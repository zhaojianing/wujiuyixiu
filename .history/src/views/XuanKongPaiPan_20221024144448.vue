<template>
    <div>
        <!-- <nav>
            <MainHeader />
        </nav> -->
        <div class="xuankong">
            <a-row class="home-row">
                <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
                <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                    <div class="xuankong-jiugong-form">
                        <a-row class="home-row-form">
                            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxxl="8" class="home-col-form">
                                <!-- 年月日时分秒表单 -->
                                <div class="home-form-box">
                                    <a-form :label-col="labelCol" :wrapper-col="wrapperCol" class="home-form">
                                        <a-row :gutter="24">
                                            <a-col span="8">
                                                <a-form-item label="年" v-bind="validateInfos.year">
                                                    <a-select v-model:value="modelRef.year" placeholder="年">
                                                        <a-select-option :value="item" v-for="item in year" :key="item">
                                                            {{
                                                            item
                                                            }}
                                                        </a-select-option>
                                                    </a-select>
                                                </a-form-item>
                                            </a-col>
                                            <a-col span="8">
                                                <a-form-item label="月" v-bind="validateInfos.month">
                                                    <a-select v-model:value="modelRef.month" placeholder="月">
                                                        <a-select-option :value="item" v-for="item in month"
                                                            :key="item">
                                                            {{ item }}</a-select-option>
                                                    </a-select>
                                                </a-form-item>
                                            </a-col>
                                            <a-col span="8">
                                                <a-form-item label="日" v-bind="validateInfos.day">
                                                    <a-select v-model:value="modelRef.day" placeholder="日">
                                                        <a-select-option :value="item" v-for="item in day" :key="item">
                                                            {{
                                                            item
                                                            }}
                                                        </a-select-option>
                                                    </a-select>
                                                </a-form-item>
                                            </a-col>
                                            <a-col span="8">
                                                <a-form-item label="时" v-bind="validateInfos.hour">
                                                    <a-select v-model:value="modelRef.hour" placeholder="时">
                                                        <a-select-option :value="item" v-for="item in hour" :key="item">
                                                            {{
                                                            item
                                                            }}
                                                        </a-select-option>
                                                    </a-select>
                                                </a-form-item>
                                            </a-col>
                                            <a-col span="8">
                                            </a-col>
                                            <a-col span="8">
                                                <a-button class="create-paipan" type=""
                                                    @click.prevent="zibaifeixingPai">
                                                    紫白飞星</a-button>
                                            </a-col>
                                        </a-row>
                                    </a-form>
                                    <hr>
                                    <div class="home-xinxi">
                                        <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }" class="home-form">
                                            <a-row :gutter="24">
                                                <a-col span="8">
                                                    <a-form-item label="几运">
                                                        <a-select v-model:value="xuankongRef.jiuyun" placeholder="几运">
                                                            <a-select-option :value="item"
                                                                v-for="item in xuankongjiuyun" :key="item">{{
                                                                item
                                                                }}
                                                            </a-select-option>
                                                        </a-select>
                                                    </a-form-item>
                                                </a-col>
                                                <a-col span="8">
                                                    <a-form-item label="坐向">
                                                        <a-select v-model:value="xuankongRef.zuoshan" placeholder="坐向">
                                                            <a-select-option :value="item"
                                                                v-for="item in xuankongzuoshan" :key="item">
                                                                {{ item }}</a-select-option>
                                                        </a-select>
                                                    </a-form-item>
                                                </a-col>
                                                <a-col span="8">
                                                    <!--  排盘按钮 -->
                                                    <a-button class="create-paipan" type="" @click.prevent="xiagua">下卦
                                                    </a-button>
                                                    <a-button class="create-paipan" type="" @click.prevent="tigua"
                                                        style="margin-left:10px">替卦</a-button>
                                                </a-col>
                                            </a-row>
                                        </a-form>

                                    </div>
                                    <div class="xk-save">
                                        <a-button type="text" @click="saveXKBtn"><u>保存此卦</u></a-button>
                                    </div>
                                </div>
                                <!-- 年月日时分秒表单 -->
                                <div class="xuankong-save" v-if="isSave">
                                    <a-form :model="paipanFormState" v-bind="layout" name="nest-messages">
                                        <a-form-item label="时间">
                                            <span>{{xuankongRef.jiuyun}}</span>
                                            <span>{{xuankongRef.zuoshan}}</span>
                                        </a-form-item>
                                        <a-form-item :name="['user', 'name']" label="标题">
                                            <a-input placeholder="此卦所测" v-model:value="paipanFormState.user.title" />
                                        </a-form-item>
                                        <a-form-item :name="['user', 'introduction']" label="解卦内容：">
                                            <a-textarea placeholder="解卦步骤"
                                                v-model:value="paipanFormState.user.introduction" />
                                        </a-form-item>
                                    </a-form>
                                    <a-form-item>
                                        <a-button html-type="submit" @click="saveXK">保存</a-button>
                                    </a-form-item>
                                </div>
                                <!-- 展示信息 -->
                            </a-col>
                            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxxl="8">
                                <div class="xuankong-jiugong">
                                    <div class="gridBox">
                                        <div class="cellLi" v-for="zibai in zibaifeixing" :key="zibai.fei">
                                            <p>年：{{ zibai.year }} 月：{{ zibai.month }}</p> <br>
                                            <p>日：{{ zibai.day }} 时：{{ zibai.hour }}</p>
                                        </div>
                                    </div>
                                </div>
                            </a-col>
                            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxxl="8">
                                <div class="xuankong-jiugong">
                                    <div class="gridBox">
                                        <div class="cellLi" v-for="jiugong in xuankongjiugong" :key="jiugong.fei">
                                            <p>{{ jiugong.shanxing }} {{ jiugong.xiangxing }}</p> <br>
                                            <p>{{ jiugong.yunpan }}</p>
                                        </div>
                                    </div>
                                </div>
                            </a-col>
                        </a-row>
                    </div>
                </a-col>
                <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            </a-row>
        </div>
        <!-- <MainCopyright /> -->
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import { Form, message, notification } from 'ant-design-vue';
import { Solar, Lunar, LunarMonth } from 'lunar-typescript';
// import { number } from "vue-types";
// import MainHeader from '@/components/MainHeader.vue';
// import MainCopyright from '@/components/MainCopyright.vue';

const useForm = Form.useForm;

export default defineComponent({
    name: "XuanKongPaiPan",
    setup() {
        // 获取当前时间
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth() + 1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
        // 最终数据(public)
        const modelRef = reactive({
            year: yy,
            month: mm,
            day: dd,
            hour: hh,
            minute: mf,
            second: ss
        });
        // 加入表单
        // 验证规则
        const rulesRef = reactive({});
        const { validate, validateInfos } = useForm(modelRef, rulesRef);
        // 获取年月日时分秒的基本数据
        let year: Array<number> | undefined = [], month: Array<number> | undefined = [], day: Array<number> | undefined = [], hour: Array<number> | undefined = []
        for (var i = 1901; i <= 2100; i++) {
            year.push(i)
        }
        for (var d = 1; d <= 12; d++) {
            month.push(d)
        }
        for (var m = 1; m <= 31; m++) {
            day.push(m)
        }
        for (var h = 0; h < 24; h++) {
            hour.push(h)
        }
        // 处理保存
        const layout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 16 },
        };

        const paipanFormState = reactive({
            user: {
                title: '',
                introduction: '',
            },
        });

        return {
            labelCol: { span: 6 }, // label的栅格
            wrapperCol: { span: 18 },
            validate,
            validateInfos,
            modelRef,
            year, month, day, hour,
            layout, paipanFormState
        }
    },
    data() {
        return {
            xuankongjiugong: [
                {
                    zhuan: 1,
                    fei: 4,
                    yuan: 1,
                    name: '巽宫',
                    ershisishan: '辰巽巳',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: ''
                }, {
                    zhuan: 2,
                    fei: 9,
                    yuan: 2,
                    name: '离宫',
                    ershisishan: '丙午丁',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: ''
                }, {
                    zhuan: 3,
                    fei: 2,
                    yuan: 3,
                    name: '坤宫',
                    ershisishan: '未坤申',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: ''
                }, {
                    zhuan: 8,
                    fei: 3,
                    yuan: 4,
                    name: '震宫',
                    ershisishan: '甲卯乙',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: ''
                }, {
                    zhuan: 0,
                    fei: 5,
                    yuan: 5,
                    name: '中宫',
                    ershisishan: '',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: ''
                }, {
                    zhuan: 4,
                    fei: 7,
                    yuan: 6,
                    name: '兑宫',
                    ershisishan: '庚酉辛',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: ''
                }, {
                    zhuan: 7,
                    fei: 8,
                    yuan: 7,
                    name: '艮宫',
                    ershisishan: '丑艮寅',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: ''
                }, {
                    zhuan: 6,
                    fei: 1,
                    yuan: 8,
                    name: '坎宫',
                    ershisishan: '壬子癸',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: ''
                }, {
                    zhuan: 5,
                    fei: 6,
                    yuan: 9,
                    name: '乾宫',
                    ershisishan: '戌乾亥',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: ''
                },
            ],
            ershisishanyinyang: {
                yang: '艮寅甲巽巳丙坤申庚乾亥壬',
                yin: '子癸丑卯乙辰午丁未酉辛戌',
                num: '一二三四五六七八九',
                n: '123456789',
                tixing: '壬二子一癸一丑七艮七寅九甲一卯二乙二辰六巽六巳六丙七午九丁九未二坤二申一庚九酉七辛七戌六乾六亥六'
            },
            xuankongjiuyun: ["一运", "二运", "三运", "四运", "五运", "六运", "七运", "八运", "九运",],
            xuankongRef: {
                jiuyun: "",
                zuoshan: "",
            },
            xuankongzuoshan: [
                "壬山丙向",
                "子山午向",
                "癸山丁向",
                "丑山未向",
                "艮山坤向",
                "寅山申向",
                "甲山庚向",
                "卯山酉向",
                "乙山辛向",
                "辰山戌向",
                "巽山乾向",
                "巳山亥向",
                "丙山壬向",
                "午山子向",
                "丁山癸向",
                "未山丑向",
                "坤山艮向",
                "申山寅向",
                "庚山甲向",
                "酉山卯向",
                "辛山乙向",
                "戌山辰向",
                "乾山巽向",
                "亥山巳向"
            ],
            zibaifeixing: [
                {
                    zhuan: 1,
                    fei: 4,
                    yuan: 1,
                    name: '巽宫',
                    year: '',
                    month: '',
                    day: '',
                    hour: ''
                }, {
                    zhuan: 2,
                    fei: 9,
                    yuan: 2,
                    name: '离宫',
                    year: '',
                    month: '',
                    day: '',
                    hour: ''
                }, {
                    zhuan: 3,
                    fei: 2,
                    yuan: 3,
                    name: '坤宫',
                    year: '',
                    month: '',
                    day: '',
                    hour: ''
                }, {
                    zhuan: 8,
                    fei: 3,
                    yuan: 4,
                    name: '震宫',
                    year: '',
                    month: '',
                    day: '',
                    hour: ''
                }, {
                    zhuan: 0,
                    fei: 5,
                    yuan: 5,
                    name: '中宫',
                    year: '',
                    month: '',
                    day: '',
                    hour: ''
                }, {
                    zhuan: 4,
                    fei: 7,
                    yuan: 6,
                    name: '兑宫',
                    year: '',
                    month: '',
                    day: '',
                    hour: ''
                }, {
                    zhuan: 7,
                    fei: 8,
                    yuan: 7,
                    name: '艮宫',
                    year: '',
                    month: '',
                    day: '',
                    hour: ''
                }, {
                    zhuan: 6,
                    fei: 1,
                    yuan: 8,
                    name: '坎宫',
                    year: '',
                    month: '',
                    day: '',
                    hour: ''
                }, {
                    zhuan: 5,
                    fei: 6,
                    yuan: 9,
                    name: '乾宫',
                    year: '',
                    month: '',
                    day: '',
                    hour: ''
                },
            ],
            isSave: false,
        }
    },
    mounted() {
        // 初始化
        this.init()
    },
    methods: {
        init() {
            this.xuankongRef.jiuyun = this.xuankongjiuyun[0]
            this.xuankongRef.zuoshan = this.xuankongzuoshan[0]
        },
        // 下卦按钮逻辑
        xiagua() {
            // 处理运盘
            var jiyun = this.xuankongRef.jiuyun.charAt(0)
            var jiyunI = this.ershisishanyinyang.num.indexOf(jiyun)
            // 截取地运顺序
            var diyunStr = this.ershisishanyinyang.num.slice(jiyunI - 9) + this.ershisishanyinyang.num.slice(0, jiyunI)
            // 给地运赋值   后天八卦排序
            this.xuankongjiugong = this.xuankongjiugong.sort(function (a: any, b: any) { return a.fei - b.fei })
            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                let flagNum = 4 + i
                flagNum >= 9 ? this.xuankongjiugong[flagNum - 9].yunpan = diyunStr[i] : this.xuankongjiugong[flagNum].yunpan = diyunStr[i]
            }

            // 处理山星
            var shan = this.xuankongRef.zuoshan.charAt(0), shanxingZ = '', shanxingI, shanxingStr
            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                // 找到山星所在宫位
                if (this.xuankongjiugong[i].ershisishan.indexOf(shan) != -1) {
                    // 拿到坐山运盘
                    var zuoshanyunpan = this.xuankongjiugong[i].yunpan
                    // 拿到坐山三元龙
                    var sanYuanLongI = this.xuankongjiugong[i].ershisishan.indexOf(shan)
                    shanxingI = this.ershisishanyinyang.num.indexOf(zuoshanyunpan)
                    // 拿到坐山原宫的三元龙
                    var yuanSYL = zuoshanyunpan == "五" ? shan : this.xuankongjiugong[shanxingI].ershisishan[sanYuanLongI]
                    if (this.ershisishanyinyang.yang.indexOf(yuanSYL) != -1) {
                        shanxingStr = this.ershisishanyinyang.n.slice(shanxingI - 9) + this.ershisishanyinyang.n.slice(0, shanxingI)
                        for (let x = 0; x < this.xuankongjiugong.length; x++) {
                            let flagNum = 4 + x
                            flagNum >= 9 ? this.xuankongjiugong[flagNum - 9].shanxing = shanxingStr[x] : this.xuankongjiugong[flagNum].shanxing = shanxingStr[x]
                        }
                    } else {
                        var reverseStr = this.ershisishanyinyang.num.split('').reverse().join("")
                        var reverseN = this.ershisishanyinyang.n.split('').reverse().join("")
                        shanxingI = reverseStr.indexOf(zuoshanyunpan)
                        shanxingStr = reverseN.slice(shanxingI - 9) + reverseN.slice(0, shanxingI)
                        for (let x = 0; x < this.xuankongjiugong.length; x++) {
                            let flagNum = 4 + x
                            flagNum >= 9 ? this.xuankongjiugong[flagNum - 9].shanxing = shanxingStr[x] : this.xuankongjiugong[flagNum].shanxing = shanxingStr[x]
                        }
                    }
                }
            }

            // 处理向星
            var xiang = this.xuankongRef.zuoshan.charAt(2), xiangxingZ = '', xiangxingI, xiangxingStr
            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                // 找到向星所在宫位
                if (this.xuankongjiugong[i].ershisishan.indexOf(xiang) != -1) {
                    // 拿到朝向运盘
                    var chaoxiangyunpan = this.xuankongjiugong[i].yunpan
                    // 拿到朝向三元龙
                    let sanYuanLongI = this.xuankongjiugong[i].ershisishan.indexOf(xiang)
                    xiangxingI = this.ershisishanyinyang.num.indexOf(chaoxiangyunpan)
                    // 拿到朝向原宫的三元龙
                    let yuanSYL = chaoxiangyunpan == "五" ? shan : this.xuankongjiugong[xiangxingI].ershisishan[sanYuanLongI]
                    if (this.ershisishanyinyang.yang.indexOf(yuanSYL) != -1) {
                        xiangxingStr = this.ershisishanyinyang.n.slice(xiangxingI - 9) + this.ershisishanyinyang.n.slice(0, xiangxingI)
                        for (let x = 0; x < this.xuankongjiugong.length; x++) {
                            let flagNum = 4 + x
                            flagNum >= 9 ? this.xuankongjiugong[flagNum - 9].xiangxing = xiangxingStr[x] : this.xuankongjiugong[flagNum].xiangxing = xiangxingStr[x]
                        }
                    } else {
                        let reverseStr = this.ershisishanyinyang.num.split('').reverse().join("")
                        let reverseN = this.ershisishanyinyang.n.split('').reverse().join("")
                        xiangxingI = reverseStr.indexOf(chaoxiangyunpan)
                        xiangxingStr = reverseN.slice(xiangxingI - 9) + reverseN.slice(0, xiangxingI)
                        for (let x = 0; x < this.xuankongjiugong.length; x++) {
                            let flagNum = 4 + x
                            flagNum >= 9 ? this.xuankongjiugong[flagNum - 9].xiangxing = xiangxingStr[x] : this.xuankongjiugong[flagNum].xiangxing = xiangxingStr[x]
                        }
                    }

                }
            }

            // 换回排序
            this.xuankongjiugong = this.xuankongjiugong.sort(function (a: any, b: any) { return a.yuan - b.yuan })
        },
        // 替卦按钮逻辑
        tigua() {
            // 处理运盘
            var jiyun = this.xuankongRef.jiuyun.charAt(0)
            var jiyunI = this.ershisishanyinyang.num.indexOf(jiyun)
            // 截取地运顺序
            var diyunStr = this.ershisishanyinyang.num.slice(jiyunI - 9) + this.ershisishanyinyang.num.slice(0, jiyunI)
            // 给地运赋值   后天八卦排序
            this.xuankongjiugong = this.xuankongjiugong.sort(function (a: any, b: any) { return a.fei - b.fei })
            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                let flagNum = 4 + i
                flagNum >= 9 ? this.xuankongjiugong[flagNum - 9].yunpan = diyunStr[i] : this.xuankongjiugong[flagNum].yunpan = diyunStr[i]
            }

            // 处理山星
            var shan = this.xuankongRef.zuoshan.charAt(0), shanxingZ = '', shanxingI, shanxingStr
            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                // 找到山星所在宫位
                if (this.xuankongjiugong[i].ershisishan.indexOf(shan) != -1) {
                    // 拿到坐山运盘
                    var zuoshanyunpan = this.xuankongjiugong[i].yunpan
                    // 拿到坐山三元龙
                    var sanYuanLongI = this.xuankongjiugong[i].ershisishan.indexOf(shan)
                    shanxingI = this.ershisishanyinyang.num.indexOf(zuoshanyunpan)
                    let tishan
                    if (this.xuankongjiugong[Number(this.ershisishanyinyang.n[shanxingI]) - 1].ershisishan[sanYuanLongI] == undefined) {
                        tishan = shan
                        chaoxiangyunpan = "五"
                    } else {
                        tishan = this.xuankongjiugong[Number(this.ershisishanyinyang.n[shanxingI]) - 1].ershisishan[sanYuanLongI]
                        let tixingIndex = this.ershisishanyinyang.tixing.indexOf(tishan)
                        zuoshanyunpan = this.ershisishanyinyang.tixing[tixingIndex + 1]
                        // console.log('替好的山', zuoshanyunpan)
                    }

                    shanxingI = this.ershisishanyinyang.num.indexOf(zuoshanyunpan)
                    if (this.ershisishanyinyang.yang.indexOf(tishan) != -1) {
                        shanxingStr = this.ershisishanyinyang.n.slice(shanxingI - 9) + this.ershisishanyinyang.n.slice(0, shanxingI)
                        for (let x = 0; x < this.xuankongjiugong.length; x++) {
                            let flagNum = 4 + x
                            flagNum >= 9 ? this.xuankongjiugong[flagNum - 9].shanxing = shanxingStr[x] : this.xuankongjiugong[flagNum].shanxing = shanxingStr[x]
                        }
                    } else {
                        var reverseStr = this.ershisishanyinyang.num.split('').reverse().join("")
                        var reverseN = this.ershisishanyinyang.n.split('').reverse().join("")
                        shanxingI = reverseStr.indexOf(zuoshanyunpan)
                        shanxingStr = reverseN.slice(shanxingI - 9) + reverseN.slice(0, shanxingI)
                        for (let x = 0; x < this.xuankongjiugong.length; x++) {
                            let flagNum = 4 + x
                            flagNum >= 9 ? this.xuankongjiugong[flagNum - 9].shanxing = shanxingStr[x] : this.xuankongjiugong[flagNum].shanxing = shanxingStr[x]
                        }
                    }
                }
            }

            // 处理向星
            var xiang = this.xuankongRef.zuoshan.charAt(2), xiangxingZ = '', xiangxingI, xiangxingStr
            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                // 找到向星所在宫位
                if (this.xuankongjiugong[i].ershisishan.indexOf(xiang) != -1) {
                    // 拿到朝向运盘
                    var chaoxiangyunpan = this.xuankongjiugong[i].yunpan
                    // 拿到朝向三元龙
                    let sanYuanLongI = this.xuankongjiugong[i].ershisishan.indexOf(xiang)
                    xiangxingI = this.ershisishanyinyang.num.indexOf(chaoxiangyunpan)
                    let tixing
                    if (this.xuankongjiugong[Number(this.ershisishanyinyang.n[xiangxingI]) - 1].ershisishan[sanYuanLongI] == undefined) {
                        tixing = xiang
                        chaoxiangyunpan = "五"
                    } else {
                        tixing = this.xuankongjiugong[Number(this.ershisishanyinyang.n[xiangxingI]) - 1].ershisishan[sanYuanLongI]
                        let tixingIndex = this.ershisishanyinyang.tixing.indexOf(tixing)
                        chaoxiangyunpan = this.ershisishanyinyang.tixing[tixingIndex + 1]
                    }
                    xiangxingI = this.ershisishanyinyang.num.indexOf(chaoxiangyunpan)
                    if (this.ershisishanyinyang.yang.indexOf(tixing) != -1) {
                        xiangxingStr = this.ershisishanyinyang.n.slice(xiangxingI - 9) + this.ershisishanyinyang.n.slice(0, xiangxingI)
                        for (let x = 0; x < this.xuankongjiugong.length; x++) {
                            let flagNum = 4 + x
                            flagNum >= 9 ? this.xuankongjiugong[flagNum - 9].xiangxing = xiangxingStr[x] : this.xuankongjiugong[flagNum].xiangxing = xiangxingStr[x]
                        }
                    } else {
                        let reverseStr = this.ershisishanyinyang.num.split('').reverse().join("")
                        let reverseN = this.ershisishanyinyang.n.split('').reverse().join("")
                        xiangxingI = reverseStr.indexOf(chaoxiangyunpan)
                        xiangxingStr = reverseN.slice(xiangxingI - 9) + reverseN.slice(0, xiangxingI)
                        for (let x = 0; x < this.xuankongjiugong.length; x++) {
                            let flagNum = 4 + x
                            flagNum >= 9 ? this.xuankongjiugong[flagNum - 9].xiangxing = xiangxingStr[x] : this.xuankongjiugong[flagNum].xiangxing = xiangxingStr[x]
                        }
                    }

                }
            }

            // 换回排序
            this.xuankongjiugong = this.xuankongjiugong.sort(function (a: any, b: any) { return a.yuan - b.yuan })
        },
        // 紫白飞星排法
        zibaifeixingPai() {
            // 当前农历时间
            var lunar = Solar.fromYmdHms(this.modelRef.year, this.modelRef.month, this.modelRef.day, this.modelRef.hour, Number(this.modelRef.minute), Number(this.modelRef.second)).getLunar()

            // 值年九星
            var y = lunar.getYearNineStar().getIndex()
            this.zibaifeixing = this.zibaifeixing.sort(function (a: any, b: any) { return a.fei - b.fei })
            var zibaiyStr = this.ershisishanyinyang.n.slice(Number(y) - 9) + this.ershisishanyinyang.n.slice(0, Number(y))
            for (let i = 0; i < this.zibaifeixing.length; i++) {
                let flagNum = 4 + i
                flagNum >= 9 ? this.zibaifeixing[flagNum - 9].year = zibaiyStr[i] : this.zibaifeixing[flagNum].year = zibaiyStr[i]
            }

            // 值月九星
            var m = lunar.getMonthNineStar().getIndex()
            var zibaimStr = this.ershisishanyinyang.n.slice(Number(m) - 9) + this.ershisishanyinyang.n.slice(0, Number(m))
            for (let i = 0; i < this.zibaifeixing.length; i++) {
                let flagNum = 4 + i
                flagNum >= 9 ? this.zibaifeixing[flagNum - 9].month = zibaimStr[i] : this.zibaifeixing[flagNum].month = zibaimStr[i]
            }

            // 值日九星
            var d = lunar.getDayNineStar().getIndex()
            let yin = '夏至小暑大暑立秋处暑白露秋分寒露霜降立冬小雪大雪'
            var zibaidStr
            // 处理阳顺阴逆
            if (yin.indexOf(lunar.getPrevJieQi().getName()) == -1) {
                zibaidStr = this.ershisishanyinyang.n.slice(Number(d) - 9) + this.ershisishanyinyang.n.slice(0, Number(d))
            } else {
                let reverseN = this.ershisishanyinyang.n.split('').reverse().join("")
                let dI = reverseN.indexOf(this.ershisishanyinyang.n[d])
                zibaidStr = reverseN.slice(Number(dI) - 9) + this.ershisishanyinyang.n.slice(0, Number(dI))
            }
            for (let i = 0; i < this.zibaifeixing.length; i++) {
                let flagNum = 4 + i
                flagNum >= 9 ? this.zibaifeixing[flagNum - 9].day = zibaidStr[i] : this.zibaifeixing[flagNum].day = zibaidStr[i]
            }

            // 值时九星
            var h = lunar.getTimeNineStar().getIndex()
            var zibaihStr
            //  = this.ershisishanyinyang.n.slice(Number(h) - 9) + this.ershisishanyinyang.n.slice(0, Number(h))
            // 处理阳顺阴逆
            if (yin.indexOf(lunar.getPrevJieQi().getName()) == -1) {
                zibaihStr = this.ershisishanyinyang.n.slice(Number(h) - 9) + this.ershisishanyinyang.n.slice(0, Number(h))
            } else {
                let reverseN = this.ershisishanyinyang.n.split('').reverse().join("")
                let hI = reverseN.indexOf(this.ershisishanyinyang.n[h])
                zibaihStr = reverseN.slice(Number(hI) - 9) + this.ershisishanyinyang.n.slice(0, Number(hI))
            }
            for (let i = 0; i < this.zibaifeixing.length; i++) {
                let flagNum = 4 + i
                flagNum >= 9 ? this.zibaifeixing[flagNum - 9].hour = zibaihStr[i] : this.zibaifeixing[flagNum].hour = zibaihStr[i]
            }
            this.zibaifeixing = this.zibaifeixing.sort(function (a: any, b: any) { return a.yuan - b.yuan })
        },
        addFei(num: number, arg: string) {
            // this.zibaifeixing = this.zibaifeixing.sort(function (a: any, b: any) { return a.fei - b.fei })
            // var zibaiStr = this.ershisishanyinyang.n.slice(num - 9) + this.ershisishanyinyang.n.slice(0, num)
            // for (let i = 0; i < this.zibaifeixing.length; i++) {
            //     let flagNum = 4 + i
            //     flagNum >= 9 ? this.zibaifeixing[flagNum - 9].arg = zibaiStr[i] : this.zibaifeixing[flagNum].arg = zibaiStr[i]
            // }
        },
        saveXKBtn() {
            if (this.$store.state.userData == '') {
                message.error('需要先登录账号！');
            } else {
                // 显示隐藏操作
                if (this.isSave) {
                    this.isSave = false
                } else {
                    this.isSave = true
                }
                // 保存操作

            }
        },
        saveXK() {
            console.log(this.paipanFormState)
        }
    },
    // components: {
    //     MainHeader,
    //     MainCopyright
    // },
})
</script>
<style lang="stylus" scoped>
.xuankong
    .home-row
        // 修改ant，button的margin
        .ant-col-xs-20
            .home-xinxi
                button
                    margin-left 0!important

        .xuankong-jiugong-form
            margin: 0 0 10px 0
            
            .home-row-form
                .home-col-form
                    margin: 0 0 10px 0
                    .xuankong-save
                        background-color #f1f1f1
                        border-radius 6px
                        padding 5px
                        margin-top 10px
                    .home-form-box
                        background-color #f1f1f1
                        border-radius 6px
                        padding 5px
                        .xk-save
                            text-align right
                            u
                                padding-right 20px
                                cursor pointer
                    .home-xinxi
                        background-color #f1f1f1
                        border-radius 6px
                        padding 5px
                        margin-top 10px
                        
                        // .create-paipan
                        //     background-color #f1f1f1
                        //     border-radius 6px
                        // .ant-btn:hover
                        //     background-color: #cdcdcd
                        //     color black
                        //     border-color white
                        // .ant-btn:focus
                        //     color black
                        //     border-color white
                        // .home-form
                        //     display flex
                        

        .xuankong-jiugong
            background-color #f1f1f1
            border-radius 6px
            padding 5px
            margin 0 0 10px 0px
            .gridBox
                background-color #f5f5f5
                overflow hidden
                display flex
                flex-wrap wrap
            
                .cellLi
                    
                    width calc(100% / 3)
                    padding 60px 0
                    text-align center
                    border 2px solid white
                    box-sizing border-box
                    background-color #f1f1f1
                    overflow hidden
                    // text-align left
                    p
                        display inline-block
                        vertical-align middle
</style>