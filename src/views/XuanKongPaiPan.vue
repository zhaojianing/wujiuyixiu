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
                                    <hr style="border-color: #f1f1f1;">
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
                                        <a-form-item label="坐向">
                                            <span>{{ xuankongRef.jiuyun }}</span>
                                            <span>{{ xuankongRef.zuoshan }}</span>
                                            <span>({{ xuankongRef.xiati }})</span>
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
                            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxxl="8" v-show="isShow.isShowZiBai">
                                <div class="xuankong-jiugong">
                                    <div class="gridBox">
                                        <div class="cellLi" v-for="zibai in zibaifeixing" :key="zibai.fei">
                                            <p>年：{{ zibai.year }} 月：{{ zibai.month }}</p> <br>
                                            <p>日：{{ zibai.day }} 时：{{ zibai.hour }}</p>
                                        </div>
                                    </div>
                                </div>
                            </a-col>
                            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxxl="8"
                                v-show="isShow.isShowXuanKong">
                                <div class="xuankong-jiugong">
                                    <div class="gridBox">
                                        <div class="cellLi" v-for="jiugong in xuankongjiugong" :key="jiugong.fei">
                                            <p>{{ jiugong.shanxing }} {{ jiugong.xiangxing }}</p> <br>
                                            <p>{{ jiugong.yunpan }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="xuankong-jibenziliao">
                                    <div class="jibenziliao">
                                        <h3> <b> ( {{ xuankongRef.zuoshan }} {{ xuankongRef.xiati }}) 基础信息：</b></h3>
                                        <hr>
                                        <p>1: 地运{{ gengduo.diyun }}年</p>
                                        <p v-for="(item, index) in gengduo.geju" :key="index">
                                            {{ (index + 2) + ': ' + item }}
                                        </p>
                                        <hr>
                                        <h3> <b> 城门诀：</b></h3>
                                        <!-- <p>{{chengmenjuedata.sanyuanlong}}</p> -->
                                        <div class="xuankong-jiugong-chengmen">
                                            <span>{{chengmenjuedata.leftchengmenStr}}</span>
                                            <div class="gridBox">
                                                <div class="cellLi"
                                                    v-for="jiugong in chengmenjuedata.leftchengmenjuedata"
                                                    :key="jiugong.left">
                                                    <p>{{ jiugong.left }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="xuankong-jiugong-chengmen">
                                            <span>{{chengmenjuedata.rightchengmenStr}}</span>
                                            <div class="gridBox">
                                                <div class="cellLi" v-for="jiugong in chengmenjuedata.rightchengmenjuedata"
                                                    :key="jiugong.right">
                                                    <p>{{ jiugong.right }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <hr>
                                        <h3> <b> 七星打劫(在写，别着急)：</b></h3> -->
                                        <hr>
                                        <h3> <b> 九星组合吉凶：</b></h3>
                                        <div v-for="jxzh in xuankongjiugong" :key="jxzh.yuan">
                                            <p>{{ jxzh.name }} : ({{jxzh.shanxing}}{{jxzh.xiangxing}}组合){{ jxzh.jiuxingjixiong }}</p>
                                            <hr>
                                        </div>
                                        <!-- <hr>
                                        <h3> <b> 文献参考(在写，别着急)：</b></h3> -->
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
import Axios from "@/until/axios";
import { defineComponent, reactive } from "@vue/runtime-core";
import { Form, message, notification } from 'ant-design-vue';
import { Solar, Lunar, LunarMonth } from 'lunar-typescript';
import qs from "qs";
import { func, number } from "vue-types";
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
            isShow: {
                isShowXuanKong: false,
                isShowZiBai: false,
            },
            xuankongjiugong: [
                {
                    zhuan: 1,
                    fei: 4,
                    yuan: 1,
                    name: '巽宫',
                    ershisishan: '辰巽巳',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: '',
                    fanyin: '6',
                    jiuxingjixiong: '',
                }, {
                    zhuan: 2,
                    fei: 9,
                    yuan: 2,
                    name: '离宫',
                    ershisishan: '丙午丁',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: '',
                    fanyin: '1',
                    jiuxingjixiong: '',
                }, {
                    zhuan: 3,
                    fei: 2,
                    yuan: 3,
                    name: '坤宫',
                    ershisishan: '未坤申',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: '',
                    fanyin: '8',
                    jiuxingjixiong: '',
                }, {
                    zhuan: 8,
                    fei: 3,
                    yuan: 4,
                    name: '震宫',
                    ershisishan: '甲卯乙',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: '',
                    fanyin: '7',
                    jiuxingjixiong: '',
                }, {
                    zhuan: 0,
                    fei: 5,
                    yuan: 5,
                    name: '中宫',
                    ershisishan: '',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: '',
                    fanyin: '55',
                    jiuxingjixiong: '',
                }, {
                    zhuan: 4,
                    fei: 7,
                    yuan: 6,
                    name: '兑宫',
                    ershisishan: '庚酉辛',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: '',
                    fanyin: '3',
                    jiuxingjixiong: '',
                }, {
                    zhuan: 7,
                    fei: 8,
                    yuan: 7,
                    name: '艮宫',
                    ershisishan: '丑艮寅',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: '',
                    fanyin: '2',
                    jiuxingjixiong: '',
                }, {
                    zhuan: 6,
                    fei: 1,
                    yuan: 8,
                    name: '坎宫',
                    ershisishan: '壬子癸',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: '',
                    fanyin: '9',
                    jiuxingjixiong: '',
                }, {
                    zhuan: 5,
                    fei: 6,
                    yuan: 9,
                    name: '乾宫',
                    ershisishan: '戌乾亥',
                    shanxing: '',
                    xiangxing: '',
                    yunpan: '',
                    fanyin: '4',
                    jiuxingjixiong: '',
                },
            ],
            ershisishanyinyang: {
                yang: '艮寅甲巽巳丙坤申庚乾亥壬',
                yin: '子癸丑卯乙辰午丁未酉辛戌',
                num: '一二三四五六七八九',
                n: '123456789',
                tixing: '壬二子一癸一丑七艮七寅九甲一卯二乙二辰六巽六巳六丙七午九丁九未二坤二申一庚九酉七辛七戌六乾六亥六',
                lianRuGuaNum: '12345678912'
            },
            xuankongjiuyun: ["一运", "二运", "三运", "四运", "五运", "六运", "七运", "八运", "九运",],
            xuankongRef: {
                jiuyun: "",
                zuoshan: "",
                xiati: "", // 存储是是下卦还是替卦的保存
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
            gengduo: {
                diyun: 0,
                geju: [''],
            },
            chengmenjuedata: {
                sanyuanlong: '',
                leftchengmenjuedata: [
                    {
                        zhuan: 1,
                        fei: 4,
                        yuan: 1,
                        name: '巽宫',
                        ershisishan: '辰巽巳',
                        left: ''
                    }, {
                        zhuan: 2,
                        fei: 9,
                        yuan: 2,
                        name: '离宫',
                        ershisishan: '丙午丁',
                        left: ''
                    }, {
                        zhuan: 3,
                        fei: 2,
                        yuan: 3,
                        name: '坤宫',
                        ershisishan: '未坤申',
                        left: ''
                    }, {
                        zhuan: 8,
                        fei: 3,
                        yuan: 4,
                        name: '震宫',
                        ershisishan: '甲卯乙',
                        left: ''
                    }, {
                        zhuan: 0,
                        fei: 5,
                        yuan: 5,
                        name: '中宫',
                        ershisishan: '',
                        left: ''
                    }, {
                        zhuan: 4,
                        fei: 7,
                        yuan: 6,
                        name: '兑宫',
                        ershisishan: '庚酉辛',
                        left: ''
                    }, {
                        zhuan: 7,
                        fei: 8,
                        yuan: 7,
                        name: '艮宫',
                        ershisishan: '丑艮寅',
                        left: ''
                    }, {
                        zhuan: 6,
                        fei: 1,
                        yuan: 8,
                        name: '坎宫',
                        ershisishan: '壬子癸',
                        left: ''
                    }, {
                        zhuan: 5,
                        fei: 6,
                        yuan: 9,
                        name: '乾宫',
                        ershisishan: '戌乾亥',
                        left: ''
                    },
                ],
                rightchengmenjuedata: [
                    {
                        zhuan: 1,
                        fei: 4,
                        yuan: 1,
                        name: '巽宫',
                        ershisishan: '辰巽巳',
                        right: ''
                    }, {
                        zhuan: 2,
                        fei: 9,
                        yuan: 2,
                        name: '离宫',
                        ershisishan: '丙午丁',
                        right: ''
                    }, {
                        zhuan: 3,
                        fei: 2,
                        yuan: 3,
                        name: '坤宫',
                        ershisishan: '未坤申',
                        right: ''
                    }, {
                        zhuan: 8,
                        fei: 3,
                        yuan: 4,
                        name: '震宫',
                        ershisishan: '甲卯乙',
                        right: ''
                    }, {
                        zhuan: 0,
                        fei: 5,
                        yuan: 5,
                        name: '中宫',
                        ershisishan: '',
                        right: ''
                    }, {
                        zhuan: 4,
                        fei: 7,
                        yuan: 6,
                        name: '兑宫',
                        ershisishan: '庚酉辛',
                        right: ''
                    }, {
                        zhuan: 7,
                        fei: 8,
                        yuan: 7,
                        name: '艮宫',
                        ershisishan: '丑艮寅',
                        right: ''
                    }, {
                        zhuan: 6,
                        fei: 1,
                        yuan: 8,
                        name: '坎宫',
                        ershisishan: '壬子癸',
                        right: ''
                    }, {
                        zhuan: 5,
                        fei: 6,
                        yuan: 9,
                        name: '乾宫',
                        ershisishan: '戌乾亥',
                        right: ''
                    },
                ],
                leftchengmenStr: '',
                rightchengmenStr: '',
            },
            jiuxingzuhejixiongdata: {
                jiuxingdata: {
                    "11": "《玄空秘旨》云：“吉凶相并，螟蛉为嗣。”《挨星灵验经》云：“丁财双会，吉凶并临。”又云：“上山定破财，下水必损丁。”此组合旺财则难以旺丁，旺丁则难以旺财",
                    "22": "《玄空秘旨》云：“吉凶相并，螟蛉为嗣。”《挨星灵验经》云：“丁财双会，吉凶并临。”又云：“上山定破财，下水必损丁。”此组合旺财则难以旺丁，旺丁则难以旺财",
                    "33": "《玄空秘旨》云：“吉凶相并，螟蛉为嗣。”《挨星灵验经》云：“丁财双会，吉凶并临。”又云：“上山定破财，下水必损丁。”此组合旺财则难以旺丁，旺丁则难以旺财",
                    "44": "《玄空秘旨》云：“吉凶相并，螟蛉为嗣。”《挨星灵验经》云：“丁财双会，吉凶并临。”又云：“上山定破财，下水必损丁。”此组合旺财则难以旺丁，旺丁则难以旺财",
                    "55": "《玄空秘旨》云：“吉凶相并，螟蛉为嗣。”《挨星灵验经》云：“丁财双会，吉凶并临。”又云：“上山定破财，下水必损丁。”此组合旺财则难以旺丁，旺丁则难以旺财",
                    "66": "《玄空秘旨》云：“吉凶相并，螟蛉为嗣。”《挨星灵验经》云：“丁财双会，吉凶并临。”又云：“上山定破财，下水必损丁。”此组合旺财则难以旺丁，旺丁则难以旺财",
                    "77": "《玄空秘旨》云：“吉凶相并，螟蛉为嗣。”《挨星灵验经》云：“丁财双会，吉凶并临。”又云：“上山定破财，下水必损丁。”此组合旺财则难以旺丁，旺丁则难以旺财",
                    "88": "《玄空秘旨》云：“吉凶相并，螟蛉为嗣。”《挨星灵验经》云：“丁财双会，吉凶并临。”又云：“上山定破财，下水必损丁。”此组合旺财则难以旺丁，旺丁则难以旺财",
                    "99": "《玄空秘旨》云：“吉凶相并，螟蛉为嗣。”《挨星灵验经》云：“丁财双会，吉凶并临。”又云：“上山定破财，下水必损丁。”此组合旺财则难以旺丁，旺丁则难以旺财",
                    "12": "《玄机赋》 云：“坎流坤位， 买臣常遭贱妇之羞。”《玄空秘旨》 云： “腹多水而膨胀。”《挨星灵验经》 云： “贪黑腹水， 妇人持家。”《挨星奇验经》 云： “二一交加大不良，中男灭绝不还乡 。”",
                    "13": "《玄机赋》 云： “震与坎乍交。” 又云“木入坎宫， 凤池身贵。”",
                    "14": "《玄机赋》 云： “木入坎宫， 凤池身贵。” 又云“名扬科甲， 贪狼在巽宫。”《紫白诀》 云： “四一同宫， 准发科甲之显。”《玄空秘旨》 云： “车驱北阙， 时闻丹诏频来。”《挨星奇验经》 云： “井助文风科甲。”",
                    "15": "《飞星赋》 云： “子癸岁， 廉贞飞来， 阴处生疮。”(补加：泌尿系统，癌症)",
                    "16": "《玄空秘旨》 云：“金水多情， 贪花恋酒。”《挨星奇验经》 云： “需利学习仕途。”(补加：文昌位不得位，就是官非，车祸)",
                    "17": "《玄空秘旨》 云： “金水多情， 贪花恋酒。” 又云“鸡交鼠而倾泻， 必犯徒流。”(补加：外遇)",
                    "18": "《挨星灵验经》 云：“一八相逢， 当运亦主损丁、 溺水、肾亏。” 一八交会主不祥， 小心高处被摔伤。(补加：摔伤)",
                    "19": "《飞星赋》 云： “火暗而神志难清。”《玄空秘旨》 云：“南离北坎， 位极中央。” 又云“丙壬会子癸， 喜产多男；天市合丙坤， 富堪敌围。” 又云“鲜姻缘之作合， 寄物于南北人家。”(补加：不得位，就是不正当两性关系)",
                    "23": "《飞星赋》 云： “复壁堪身。” 又云“豫拟食停。”《挨星灵验经》 云：“雷地防车灾， 家人脾胃难吉。 斗牛主官非，后代子女不孝。”《玄空秘旨》 云： “雷出地而相冲， 定遭桎梏。”(补加：对母亲不好，以下犯上)",
                    "24": "《玄空秘旨》云：“风行地而硬直难当， 室有欺姑之妇。”《玄机赋》 云： “风行地上， 决定伤脾。”(补加：官非，以下犯上，车祸)",
                    "25": "《飞星赋》 云：“黑黄兮酿疾堪伤。”《挨星灵验经》 云：“二五交加， 失令可断伤亡、 难孕、 流产。”《紫白诀》 云：“黄遇黑时出寡妇， 黑逢黄至出鳏夫。” 又云“二五交加，罹死亡或生疾病。”(补加：必损主，专死当家人，死绝，常年吃药，生女儿问题不大)",
                    "26": "《飞星赋》 云： “交至乾坤， 吝心不足。” 又云“戌未僧尼， 自我有缘何益？ ” 又云“乾坤鬼神， 与他相克非祥。”(补加：不正当两性关系，淫荡)",
                    "27": "《飞星赋》 云： “临云泄痢。” 肠胃有疾， 也主车祸、淫荡。(补加：27合化火，车祸，血光之灾，淫荡（2女性阴部，7为悦），火灾)",
                    "28": "《玄机赋》 云： “巨入艮坤， 田连阡陌。” 吉时主富，凶时车祸、 脾胃肠等疾病。(补加：不得位，仍然以凶论)",
                    "29": "《玄机赋》 云： “离位峻岩而损目。” 主眼疾、 淫荡。(补加：车祸，血光之灾)",
                    "34": "《飞星赋》 云：“同来震巽， 昧事无常。”《挨星奇验经》云： “比和为打斗。” 主打架斗殴、 官非。(补加：淫荡，毫无生气入门，则粮难一宿，家中困难)",
                    "35": "《玄空秘旨》 云：“我克彼而遭其辱， 因财帛而丧身。”主官非、 四肢不利或脑神经疾病。(补加：足病)",
                    "36": "《飞星赋》 云：“壮途踬足。” 又云“头响兮六三。”《玄机赋》 云： “木见戌朝， 庄生难免鼓盆之叹。”(补加：撞腿，伤足)",
                    "37": "《飞星赋》 云： “乙辛兮家室分离。”《玄空秘旨》 云：“长庚启明， 交战四国。” 又云“木金相反， 背义忘恩。”又云“男女多情， 无媒约则为私约。” 又云“兑位明堂破震，主吐血之灾。” 又云“甲庚会局， 文臣而兼武将之职。”《紫白诀》 云： “三七叠至， 被劫盗更见官灾。”(补加：穿心煞，最轻官灾)",
                    "38": "《挨星奇验经》 云： “卯遇丑， 谨损小口。” 主官非、损人丁。(补加：38合化木，卯酉兮谨慎损小口，得位不损人丁)",
                    "39": "《玄空秘旨》 云：“栋入南离， 骤厅堂再焕。”《玄机赋》云： “震阳生火， 雷奋而火尤明。”(补加：不得位，仍以凶论)",
                    "45": "《飞星赋》 云： “乳痛兮四五。” 主股疾或乳病。(补加：股病，头脑神经病，妇人乳房疾病)",
                    "46": "《飞星赋》 云： “小畜差役劳碌。”《挨星奇验经》 云：“跳楼自寻短见， 定是乾木应凶。”(补加：脑神经，失眠，官非，车祸)",
                    "47": "《飞星赋》 云： “辰酉兮闺帏不睦。” 又云“风郁而气机不利。”(补加：以下犯上，口舌，官非，股伤)",
                    "48": "《玄空秘旨》 云：“山风值而泉石膏盲。”《挨星灵验经》云： “文曲逢辅， 少女定然羞死。”《紫白诀》 云： “四绿固号文昌， 然八会而小口损伤。”(补加：姻缘煞，结石)",
                    "49": "《玄机赋》 云： “巽阴就离， 风散则火易熄。”《挨星奇验经》： “四九合化为金， 须防淫乱是非。” 又云： “午见辰，当防股伤。”",
                    "56": "《挨星奇验经》 云： “戊己到乾宫， 头多不吉。”(补加：头部疾病，足病)",
                    "57": "《飞星赋》 云： “酉辛年， 戊己吊来， 喉间有疾。”(补加：口舌生疮，肺部有病)",
                    "58": "《挨星奇验经》 云： “左辅遇廉贞， 腿上有病。”(补加：车灾，足)",
                    "59": "《挨星灵验经》 云：“宅犯紫黄， 必有疾病、 服毒之厄运。”(补加：常年吃药)",
                    "67": "《挨星灵验经》 云：“盘遇交剑， 定遭车祸、 官非之凶灾。” 又云“乾位为天门， 破军飞临防车祸。”(补加：被枪毙)",
                    "68": "《玄机赋》 云： “金居艮位， 乌府求名。” 又云“若艮配纯阳， 鳏夫岂有发儿之兆？ ”《紫白诀》 云： “六八武科发趾， 八六谋士参军。”",
                    "69": "《挨星灵验经》 云：“火烧天， 头部有病。”《玄空秘旨》云： “火烧天而张门相斗， 家生骂父之儿。”《飞星赋》 云：“同人车马驰驱。”《玄机赋》 云： “火烧天门， 必当吐血。”《紫白诀》 云： “九紫虽司喜气， 然六会九而长房血症。”(补加：官非，淫乱，车祸，不孝子嗣)",
                    "78": "《玄机赋》 云：“泽山为咸， 少男之情属少女。”《挨星奇验经》 云： “少男少女， 无媒也能私定婚约。” 主外遇、婚外情。",
                    "79": "《飞星赋》 云： “赤紫兮致灾有数。”《玄空秘旨》 云：“午酉逢而江源花酒。”《紫白诀》 云： “九七合辙， 常招回禄之灾。”(补加：常年吃药，手术，血光，车祸，私人，偷情)",
                    "89": "《玄空秘旨》 云：“火见土而愚钝顽夫。”《玄机赋》 云：“辅临丙丁， 位列朝班。”",
                    "137": "《飞星赋》 云： “壬甲排庚， 最异龙摧屋角。《紫白诀》 云： “三碧临庚， 逢一白而丁口频添， 交二黑则食相济济。””(补加：洪水冲屋，房屋倒塌，漏水)",
                    "146": "《玄空秘旨》 云： “巽宫水路缠乾， 有悬梁之厄。”(补加：能说会道，上吊)",
                    "166": "《玄空秘旨》 云： “虚联奎壁， 启八代之文章。”",
                    "168": "《玄空秘旨》 云： “土制水复生金， 自主田庄之富。”",
                    "169": "《玄空秘旨》 云： “壬丙朝乾， 贵客而有耋耄之寿。”(注：耋耄指长寿之意)",
                    "178": "《玄空秘旨》 云： “胃入斗牛， 积千箱之玉帛。”",
                    "248": "《飞星赋》 云： “寅申触巳， 曾闻虎咥家人”《玄空秘旨》 云： “山地风吹， 还生风疾。”(补加：可断（因）动物受伤)",
                    "345": "《飞星赋》 云：“寒户遭瘟， 缘自三廉夹绿。” 又云“碧绿风魔， 他处廉贞莫见”",
                    "369": "《玄空秘旨》 云： “火克金兼化木， 数惊回禄之灾。”主车祸。",
                    "479": "《玄空秘旨》 云： “火克金兼化木， 数惊回禄之灾。”主车祸。",
                    "579": "《飞星赋》 云：“青楼染疾， 只因七弼同黄。” 又云“紫黃毒药， 临宮兑口休尝。”(补加：家有人有病，性病)",
                    "927": "《玄空秘旨》 云： “火曜连珠相值， 青云路上自消遙。”",
                    "419": "《飞星赋》 云： 四荡一淫，淫荡者扶之归正",
                    "667": "重乾取悦，老头强奸少女",
                    "2479": "《飞星赋》 云： “当知四荡一淫， 淫荡者扶之归正。”《玄空秘旨》 云： “阴神满地成群， 红粉场中空快乐。”",
                    "2689": "《紫白诀》 云： “二黑飞乾， 逢八白而财源大进， 遇九紫则瓜瓞绵绵。”",
                    "372": "《紫白诀》 云： “三碧临庚， 逢一白而丁口频添， 交二黑则食相济济。”",
                    "6728": "《玄空秘旨》 云： “富并陶朱， 断是坚金遇土。”",
                    "1486": "山风值而泉石膏盲，结石疾病"
                }
            }
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
            // 显示样式
            this.isShow.isShowXuanKong = true
            // 保存记录
            this.xuankongRef.xiati = "下卦"
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
                    // 拿到坐山原宫的三元龙
                    shanxingI = this.ershisishanyinyang.num.indexOf(zuoshanyunpan)
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

            // 更多信息
            this.jibenxinxiFunc()
        },
        // 替卦按钮逻辑
        tigua() {
            // 显示样式
            this.isShow.isShowXuanKong = true
            // 保存记录
            this.xuankongRef.xiati = "替卦"
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

            // 更多信息
            this.jibenxinxiFunc()
        },
        // 紫白飞星排法
        zibaifeixingPai() {
            // 显示紫白
            this.isShow.isShowZiBai = !this.isShow.isShowZiBai
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
            if (this.$store.state.userData == '') {
                message.error('需要先登录账号！')
                return
            }
            let response = {
                uid: this.$store.state.userData.uid,
                time: this.xuankongRef.jiuyun + this.xuankongRef.zuoshan + this.xuankongRef.xiati,
                title: this.paipanFormState.user.title,
                introduction: this.paipanFormState.user.introduction
            }
            Axios.post('/user/save_xuankonguser', qs.stringify(response)).then((response) => {
                message.success('保存成功')
                message.success('在右上角存稿管理查看，以后会更好的，先用着~')
            }).catch((error) => {
                // console.log('失败')
                message.error(error)
            })
        },
        // 基础信息
        jibenxinxiFunc() {
            // 计算地运时间
            this.jibenxinxi_diyun()
            // 计算格局全部信息
            this.jibenxinxi_geju()
            // 计算城门诀
            this.chengMenJue()
            // 计算七星打劫
            // 计算九星组合吉凶
            this.jiuxingjixiongFunc()
        },
        jibenxinxi_diyun() {
            let diyun_zuoshan = this.xuankongRef.zuoshan.slice(0, 1)

            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                if (this.xuankongjiugong[i].ershisishan.indexOf(diyun_zuoshan) != -1) {
                    // 找到坐山信息
                    // 计算地运
                    if (this.xuankongjiugong[i].fei < 5) {
                        this.gengduo.diyun = (5 - this.xuankongjiugong[i].fei) * 20
                    } else {
                        this.gengduo.diyun = (9 - this.xuankongjiugong[i].fei) * 20 + 100
                    }
                }
            }
        },
        jibenxinxi_geju() {
            let zuoJiuGong, xiangJiuGong
            let zuo = this.xuankongRef.zuoshan.slice(0, 1)
            let xiang = this.xuankongRef.zuoshan.slice(2, 3)
            let isHeShiShan = true
            let isHeShiXiang = true
            this.gengduo.geju = []  // 初始化
            let gejuData: Array<string> = []
            let isLianRuGua = true
            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                // 获取地运的number类型数据
                // 找到坐山信息
                if (this.xuankongjiugong[i].ershisishan.indexOf(zuo) != -1) {
                    zuoJiuGong = this.xuankongjiugong[i]

                }
                // 找到朝向信息
                if (this.xuankongjiugong[i].ershisishan.indexOf(xiang) != -1) {
                    xiangJiuGong = this.xuankongjiugong[i]

                }


                // 获取地运的number类型数据
                let diyunN = this.ershisishanyinyang.n[this.ershisishanyinyang.num.indexOf(this.xuankongjiugong[i].yunpan)]
                let pushStr = this.xuankongjiugong[i].name + ': '
                // 伏吟的处理
                if (this.xuankongjiugong[i].shanxing == diyunN) {
                    pushStr += '山星与运盘同，犯伏吟。'
                }
                if (this.xuankongjiugong[i].xiangxing == diyunN) {
                    pushStr += '向星与运盘同，犯伏吟。'
                }
                if (Number(this.xuankongjiugong[i].shanxing) == this.xuankongjiugong[i].fei) {
                    pushStr += '山星与元旦盘同，犯伏吟。'
                }
                if (Number(this.xuankongjiugong[i].xiangxing) == this.xuankongjiugong[i].fei) {
                    pushStr += '向星与元旦盘同，犯伏吟。'
                }

                // 反吟的处理
                if (this.xuankongjiugong[i].fanyin == this.xuankongjiugong[i].shanxing) {
                    // 山星反吟
                    pushStr += '山星犯反吟。'
                }
                if (this.xuankongjiugong[i].fanyin == this.xuankongjiugong[i].xiangxing) {
                    // 向星反吟
                    pushStr += '向星犯反吟。'
                }

                // 连茹卦处理
                let isLianRuGuaStr = this.xuankongjiugong[i].shanxing + diyunN + this.xuankongjiugong[i].xiangxing
                if (this.ershisishanyinyang.lianRuGuaNum.indexOf(isLianRuGuaStr) != -1 || this.ershisishanyinyang.lianRuGuaNum.indexOf(isLianRuGuaStr.split("").reverse().join("")) != -1) {
                    // console.log(isLianRuGuaStr)
                    // console.log('连茹卦记录')
                } else {
                    // console.log('连茹卦记录False')
                    isLianRuGua = false
                }

                // 处理山向星合十
                let shanN = Number(this.xuankongjiugong[i].shanxing) + Number(diyunN)
                if (shanN != 10) {
                    isHeShiShan = false
                }
                let xiangN = Number(this.xuankongjiugong[i].xiangxing) + Number(diyunN)
                if (xiangN != 10) {
                    isHeShiXiang = false
                }

                // 添加数据
                gejuData = [...gejuData, pushStr]
            }
            // 玄空格局的处理
            let jiuyunXiaBiao = this.xuankongjiuyun.indexOf(this.xuankongRef.jiuyun) + 1 + ''   // 处理九运的数字转换
            if (jiuyunXiaBiao == zuoJiuGong?.shanxing && jiuyunXiaBiao == xiangJiuGong?.xiangxing) {
                this.gengduo.geju = [...this.gengduo.geju, "旺山旺向局"]
            } else if (jiuyunXiaBiao == zuoJiuGong?.shanxing && jiuyunXiaBiao == zuoJiuGong?.xiangxing) {
                this.gengduo.geju = [...this.gengduo.geju, "双星到坐，上山局"]
            } else if (jiuyunXiaBiao == xiangJiuGong?.shanxing && jiuyunXiaBiao == xiangJiuGong?.xiangxing) {
                this.gengduo.geju = [...this.gengduo.geju, "双星到向，下水局"]
            } else if (jiuyunXiaBiao == xiangJiuGong?.shanxing && jiuyunXiaBiao == zuoJiuGong?.xiangxing) {
                this.gengduo.geju = [...this.gengduo.geju, "上山下水局"]
            }
            // 连茹卦记录
            if (isLianRuGua) {
                this.gengduo.geju = [...this.gengduo.geju, '全局连茹卦']
            }
            // 全局山星合十
            if (isHeShiShan) {
                this.gengduo.geju = [...this.gengduo.geju, '全局山星合十']
            }
            // 全局向星合十
            if (isHeShiXiang) {
                this.gengduo.geju = [...this.gengduo.geju, '全局向星合十']
            }
            // console.log('未作处理的数据：', gejuData)
            let unArr = this.unique(gejuData)
            // console.log('处理完的数据：', unArr)
            this.gengduo.geju = [...this.gengduo.geju, ...unArr]

        },
        // 去重
        unique(arr: Array<string>): Array<string> {
            if (this.clearStr(arr, '').length < 9) {
                return arr
            }
            let arrData: Array<string> = []
            let [syfu, sydfu, xyfu, xydfu, sfy, xfy] = [0, 0, 0, 0, 0, 0]
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].indexOf('山星与运盘同，犯伏吟。') != -1) {
                    syfu++
                }
                if (arr[i].indexOf('山星与元旦盘同，犯伏吟。') != -1) {
                    sydfu++
                }
                if (arr[i].indexOf('向星与运盘同，犯伏吟。') != -1) {
                    xyfu++
                }
                if (arr[i].indexOf('向星与元旦盘同，犯伏吟。') != -1) {
                    xydfu++
                }
                if (arr[i].indexOf('山星犯反吟。') != -1) {
                    sfy++
                }
                if (arr[i].indexOf('向星犯反吟。') != -1) {
                    xfy++
                }
            }

            if (syfu == 9) {
                let clearArr = this.clearStr(arr, '山星与运盘同，犯伏吟。')
                arrData = [...arrData, '全局山星与运盘同，犯伏吟。', ...clearArr]
                // console.log('arrData', arrData)
            }
            if (sydfu == 9) {
                let clearArr = this.clearStr(arr, '山星与元旦盘同，犯伏吟')
                arrData = [...arrData, '全局山星与元旦盘同，犯伏吟', ...clearArr]
                // console.log('arrData', arrData)
            }
            if (xyfu == 9) {
                let clearArr = this.clearStr(arr, '向星与运盘同，犯伏吟。')
                arrData = [...arrData, '全局向星与运盘同，犯伏吟。', ...clearArr]
                // console.log('arrData', arrData)
            }
            if (xydfu == 9) {
                let clearArr = this.clearStr(arr, '向星与元旦盘同，犯伏吟。')
                arrData = [...arrData, '全局向星与元旦盘同，犯伏吟。', ...clearArr]
                // console.log('arrData', arrData)
            }
            // 去除中宫
            if (sfy == 8) {
                let clearArr = this.clearStr(arr, '山星犯反吟。')
                arrData = [...arrData, '全局山星犯反吟。', ...clearArr]
                // console.log('arrData', arrData)
            }
            if (xfy == 8) {
                let clearArr = this.clearStr(arr, '向星犯反吟。')
                arrData = [...arrData, '全局向星犯反吟。', ...clearArr]
                // console.log('arrData', arrData)
            }
            // arrData = [...arrData, ...this.clearStr(arr, '')]
            // console.log([arrData, syfu, sydfu, xyfu, xydfu])
            // console.log("arrData:", arrData)
            return arrData
        },
        clearStr(arr: Array<string>, str: string): Array<string> {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].indexOf(str) != -1) {
                    let reg = new RegExp(str)
                    arr[i] = arr[i].replace(reg, "")
                }
            }
            // 清除没用的数据
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].length == 4 || arr[j].length == 5) {
                    arr.splice(j, 1);
                    j = j - 1;
                }
            }
            return arr
        },
        chengMenJue() {
            // 取到朝向的信息
            let xiang = this.xuankongRef.zuoshan.slice(2, 3)
            let xiangSanYuanLong = '地天人'
            let xiangSanYuanLongIndex = 0 // 存储三元龙的索引下标
            let xiangData
            let leftNum, rightNum, leftStr, rightStr, leftI, rightI
            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                // 找到朝向那一宫的信息
                if (this.xuankongjiugong[i].ershisishan.indexOf(xiang) != -1) {
                    xiangSanYuanLongIndex = this.xuankongjiugong[i].ershisishan.indexOf(xiang)
                    xiangData = this.xuankongjiugong[i]
                }
            }
            this.chengmenjuedata.sanyuanlong = xiangSanYuanLong[xiangSanYuanLongIndex] + '元龙'
            // console.log('xiangSanYuanLongIndex', xiangSanYuanLongIndex)
            // console.log('xiangData', xiangData)
            // 拿到向首左右的宫位数字
            leftNum = xiangData?.zhuan == 1 ? 8 : Number(xiangData?.zhuan) - 1
            rightNum = xiangData?.zhuan == 8 ? 1 : Number(xiangData?.zhuan) + 1
            // console.log('leftNum', leftNum)
            // console.log('rightNum', rightNum)
            // 处理顺序
            this.chengmenjuedata.leftchengmenjuedata = this.chengmenjuedata.leftchengmenjuedata.sort(function (a: any, b: any) { return a.fei - b.fei })
            let leftFive, rightFive
            // 处理左边城门诀
            this.chengmenjuedata.leftchengmenStr = ""
            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                if (this.xuankongjiugong[i].zhuan == leftNum) {
                    // 拿到运盘的Number类型
                    let diyunNum = this.ershisishanyinyang.n[this.ershisishanyinyang.num.indexOf(this.xuankongjiugong[i].yunpan)]
                    // console.log('左运盘地运数字：', diyunNum)
                    leftFive = this.xuankongjiugong[i].ershisishan[xiangSanYuanLongIndex]
                    this.chengmenjuedata.leftchengmenStr += this.xuankongjiugong[i].name + "("+ this.chengmenjuedata.sanyuanlong +")"
                    for (let j = 0; j < this.xuankongjiugong.length; j++) {
                        // 原飞盘 = 向首地运
                        if (this.xuankongjiugong[j].fei == Number(diyunNum)) {
                            let yuanErShiSiShan = this.xuankongjiugong[j].ershisishan == "" ? leftFive : this.xuankongjiugong[j].ershisishan[xiangSanYuanLongIndex]
                            // 原飞盘二十四山阴阳
                            if (this.ershisishanyinyang.yang.indexOf(yuanErShiSiShan) != -1) {
                                // 顺飞
                                this.chengmenjuedata.leftchengmenStr += ':城门不可用'
                                leftStr = this.ershisishanyinyang.n.slice((Number(diyunNum) - 1) - 9) + this.ershisishanyinyang.n.slice(0, (Number(diyunNum) - 1))
                                for (let x = 0; x < this.chengmenjuedata.leftchengmenjuedata.length; x++) {
                                    let flagNum = 4 + x
                                    flagNum >= 9 ? this.chengmenjuedata.leftchengmenjuedata[flagNum - 9].left = leftStr[x] : this.chengmenjuedata.leftchengmenjuedata[flagNum].left = leftStr[x]
                                }
                            } else {
                                // 逆飞
                                this.chengmenjuedata.leftchengmenStr += ':城门可用'
                                let reverseN = this.ershisishanyinyang.n.split('').reverse().join("")  // ->  987654321
                                leftI = reverseN.indexOf(diyunNum)
                                leftStr = reverseN.slice(leftI - 9) + reverseN.slice(0, leftI)
                                // console.log('leftStr',leftStr)
                                for (let x = 0; x < this.xuankongjiugong.length; x++) {
                                    // flagNum 是找到中宫，赋值
                                    let flagNum = 4 + x
                                    flagNum >= 9 ? this.chengmenjuedata.leftchengmenjuedata[flagNum - 9].left = leftStr[x] : this.chengmenjuedata.leftchengmenjuedata[flagNum].left = leftStr[x]
                                }
                            }
                        }
                    }
                }
            }
            // 换回排序
            this.chengmenjuedata.leftchengmenjuedata = this.chengmenjuedata.leftchengmenjuedata.sort(function (a: any, b: any) { return a.yuan - b.yuan })
            // 处理顺序
            this.chengmenjuedata.rightchengmenjuedata = this.chengmenjuedata.rightchengmenjuedata.sort(function (a: any, b: any) { return a.fei - b.fei })
            this.chengmenjuedata.rightchengmenStr = ""
            // 处理右边城门诀
            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                if (this.xuankongjiugong[i].zhuan == rightNum) {
                    // 拿到运盘的Number类型
                    let diyunNum = this.ershisishanyinyang.n[this.ershisishanyinyang.num.indexOf(this.xuankongjiugong[i].yunpan)]
                    // console.log('右运盘地运数字：', diyunNum)
                    rightFive = this.xuankongjiugong[i].ershisishan[xiangSanYuanLongIndex]
                    this.chengmenjuedata.rightchengmenStr += this.xuankongjiugong[i].name + "("+ this.chengmenjuedata.sanyuanlong +")"
                    for (let j = 0; j < this.xuankongjiugong.length; j++) {
                        // 原飞盘 = 向首地运
                        if (this.xuankongjiugong[j].fei == Number(diyunNum)) {
                            let yuanErShiSiShan = this.xuankongjiugong[j].ershisishan == "" ? rightFive : this.xuankongjiugong[j].ershisishan[xiangSanYuanLongIndex]
                            // 原飞盘二十四山阴阳
                            if (this.ershisishanyinyang.yang.indexOf(yuanErShiSiShan) != -1) {
                                // 顺飞
                                this.chengmenjuedata.rightchengmenStr += ':城门不可用'
                                rightStr = this.ershisishanyinyang.n.slice((Number(diyunNum) - 1) - 9) + this.ershisishanyinyang.n.slice(0, (Number(diyunNum) - 1))
                                for (let x = 0; x < this.chengmenjuedata.rightchengmenjuedata.length; x++) {
                                    let flagNum = 4 + x
                                    flagNum >= 9 ? this.chengmenjuedata.rightchengmenjuedata[flagNum - 9].right = rightStr[x] : this.chengmenjuedata.rightchengmenjuedata[flagNum].right = rightStr[x]
                                }
                            } else {
                                // 逆飞
                                this.chengmenjuedata.rightchengmenStr += ':城门可用'
                                let reverseN = this.ershisishanyinyang.n.split('').reverse().join("")
                                rightI = reverseN.indexOf(diyunNum)
                                rightStr = reverseN.slice(rightI - 9) + reverseN.slice(0, rightI)
                                // console.log('rightStr',rightStr)
                                for (let x = 0; x < this.xuankongjiugong.length; x++) {
                                    let flagNum = 4 + x
                                    flagNum >= 9 ? this.chengmenjuedata.rightchengmenjuedata[flagNum - 9].right = rightStr[x] : this.chengmenjuedata.rightchengmenjuedata[flagNum].right = rightStr[x]
                                }
                            }
                        }
                    }
                }
            }
            // 换回排序
            this.chengmenjuedata.rightchengmenjuedata = this.chengmenjuedata.rightchengmenjuedata.sort(function (a: any, b: any) { return a.yuan - b.yuan })
        },
        jiuxingjixiongFunc() {
            let shanN, xiangN, sortN
            for (let i = 0; i < this.xuankongjiugong.length; i++) {
                shanN = this.xuankongjiugong[i].shanxing
                xiangN = this.xuankongjiugong[i].xiangxing
                sortN = (shanN + xiangN).split('').sort().join('')
                for (let item in this.jiuxingzuhejixiongdata.jiuxingdata) {
                    if (sortN == item) {
                        let obj = this.jiuxingzuhejixiongdata.jiuxingdata
                        this.xuankongjiugong[i].jiuxingjixiong = obj[item as keyof typeof obj]
                    }
                }
            }
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
    min-height 500px

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
        
        .xuankong-jiugong-chengmen
            display inline-block
            background-color #f1f1f1
            border-radius 6px
            padding 5px
            margin 0 0 10px 0px
            width 49%
            .gridBox
                background-color #f5f5f5
                overflow hidden
                display flex
                flex-wrap wrap
                .cellLi
                    width calc(100% / 3)
                    // padding 60px 0
                    text-align center
                    border 2px solid white
                    box-sizing border-box
                    background-color #f1f1f1
                    overflow hidden
                    // text-align left
                    p
                        display inline-block
                        vertical-align middle
        .xuankong-jibenziliao
            background-color #f1f1f1
            border-radius 6px
            padding 5px
            margin 0 0 10px 0px
            text-align left
</style>