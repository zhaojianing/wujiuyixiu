<template>
    <div>
        <div class="maoshan">
            <a-row class="home-row">
                <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
                <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                    <div class="maoshan-jiugong-form">
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
                                                <a-form-item label="分" v-bind="validateInfos.minute">
                                                    <a-select v-model:value="modelRef.minute" placeholder="分">
                                                        <a-select-option :value="item" v-for="item in minute"
                                                            :key="item">
                                                            {{ item }}</a-select-option>
                                                    </a-select>
                                                </a-form-item>
                                            </a-col>
                                            <a-col span="8">
                                                <a-form-item label="秒" v-bind="validateInfos.second">
                                                    <a-select v-model:value="modelRef.second" placeholder="秒">
                                                        <a-select-option :value="item" v-for="item in second"
                                                            :key="item">
                                                            {{ item }}</a-select-option>
                                                    </a-select>
                                                </a-form-item>
                                            </a-col>
                                        </a-row>
                                    </a-form>
                                    <!--  排盘按钮 -->
                                    <a-form-item :wrapper-col="{ span: 24, offset: 0 }">
                                        <a-button class="create-paipan" type="" @click.prevent="onSubmit(1)">阳历排盘
                                        </a-button>
                                        <a-button class="create-paipan" type="" @click.prevent="onSubmit(0)"
                                            style="margin-left:10px">阴历排盘</a-button>
                                    </a-form-item>
                                    <p class="create-paipan-bc-btn">
                                        <a-button type="text" @click="saveQiMen"><u>保存此卦</u></a-button>
                                    </p>
                                </div>
                                <!-- 保存表单 -->
                                <div class="create-paipan-save" v-if="isSaveFlag">
                                    <a-form :model="paipanFormState" v-bind="layout" name="nest-messages"
                                        :validate-messages="validateMessages" @finish="onFinish">
                                        <a-form-item :name="['user', 'name']" label="标题"
                                            :rules="[{ required: true }]">
                                            <a-input v-model:value="paipanFormState.user.name" />
                                        </a-form-item>
                                        <a-form-item :name="['user', 'email']" label="Email"
                                            :rules="[{ type: 'email' }]">
                                            <a-input v-model:value="paipanFormState.user.email" />
                                        </a-form-item>
                                        <a-form-item :name="['user', 'introduction']" label="解卦内容：">
                                            <a-textarea v-model:value="paipanFormState.user.introduction" />
                                        </a-form-item>
                                        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
                                            <a-button type="primary" html-type="submit">Submit</a-button>
                                        </a-form-item>
                                    </a-form>
                                </div>
                                <!-- 年月日时分秒表单 -->
                                <!-- 展示信息 -->
                                <div class="home-xinxi" v-if="paiPanDateRef.yangli != ''">
                                    <span>阳历：{{ paiPanDateRef.yangli }} {{ paiPanDateRef.jq }}{{ paiPanDateRef.sanyuan
                                    }}</span><br>
                                    <span>阴历：{{ paiPanDateRef.yinli }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                                    paiPanDateRef.yinyang
                                    }}{{ paiPanDateRef.jushu }}局</span><br>
                                    <span>干支：{{ paiPanDateRef.ganzhi }}</span><br>
                                    <span>旬首：{{ paiPanDateRef.xunshou }}&nbsp;&nbsp;&nbsp;日空亡：{{
                                    paiPanDateRef.rikongwang }}
                                        &lt;转盘> </span><br>
                                    <span>值符：{{ paiPanDateRef.zhifu }} 值使：{{ paiPanDateRef.zhishi }}</span>
                                </div>
                                <div class="home-xinxi" v-else>
                                    今天是要测些什么呢？ >_&lt;
                                </div>
                                <!-- 展示信息 -->
                            </a-col>
                            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxxl="8">
                                <div class="maoshan-jiugong">
                                    <div class="gridBox">
                                        <div class="cellLi" v-for="jiugong in paipanjiugong" :key="jiugong.fei">
                                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                            <p>{{ jiugong.kongwang == '1' ? `〇` :
                                            ``
                                            }}</p>
                                            <p>{{ jiugong.maxing == '' || jiugong.maxing == undefined ? ''
                                            :
                                            '马'
                                            }}</p> <br> <br>

                                            <p class="cellLi-bashen">{{ jiugong.bashen.charAt(0) }}</p>
                                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                                            <p>{{ jiugong.tianpan }}</p>
                                            &nbsp;&nbsp;&nbsp; <br>
                                            <p>{{ jiugong.bashen.charAt(1) }}</p>
                                            &nbsp;&nbsp;
                                            <p>{{ jiugong.dipan.charAt(0) }}</p>
                                            <p>{{ jiugong.jiuxing }}</p>
                                            <p>{{ jiugong.bamen }}</p>
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
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import { Form, notification, message } from 'ant-design-vue';
import { Solar, Lunar, LunarMonth } from 'lunar-typescript';

const useForm = Form.useForm;
export default defineComponent({
    name: "MaoShanPaiPan",
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
        // 验证规则
        const rulesRef = reactive({
            year: [
                {
                    required: false,  // 是否必填
                    message: 'Please select year',
                },
            ],
        });
        // 加入表单
        const { validate, validateInfos } = useForm(modelRef, rulesRef);

        // 获取年月日时分秒的基本数据
        let year: Array<number> | undefined = [], month: Array<number> | undefined = [], day: Array<number> | undefined = [], hour: Array<number> | undefined = [], minute: Array<number> | undefined = [], second: Array<number> | undefined = []
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
        for (var s = 0; s < 60; s++) {
            minute.push(s)
            second.push(s)
        }

        // 处理保存
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };

        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not a valid email!',
                number: '${label} is not a valid number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };

        const paipanFormState = reactive({
            user: {
                name: '',
                email: '',
                introduction: '',
            },
        });
        const onFinish = (values: any) => {
            console.log('Success:', values);
        };

        return {
            labelCol: { span: 6 }, // label的栅格
            wrapperCol: { span: 18 },
            validate,
            validateInfos,
            modelRef,
            year, month, day, hour, minute, second,
            paipanFormState,
            onFinish,
            layout,
            validateMessages,
        };
    },
    data() {
        return {
            // 绑定动态更新数据
            paiPanDateRef: {
                jq: '', // 节气
                sanyuan: '', // 三元
                yangli: '', // 阳历
                yinli: '', // 阴历
                ganzhi: '', // 八字
                jushu: '', // 阴阳几局
                yinyang: '', // 阴阳
                xunshou: '', // 旬首
                rikongwang: '', // 日空亡
                zhifu: '', // 值符
                zhishi: '', // 值使
            },
            //节气三元列表
            jqsyList: {
                冬至: '174',
                小寒: '285',
                大寒: '396',
                立春: '852',
                雨水: '963',
                惊蛰: '174',
                春分: '396',
                清明: '417',
                谷雨: '528',
                立夏: '417',
                小满: '528',
                芒种: '639',
                夏至: '936',
                小暑: '825',
                大暑: '714',
                立秋: '258',
                处暑: '147',
                白露: '936',
                秋分: '714',
                寒露: '693',
                霜降: '582',
                立冬: '693',
                小雪: '582',
                大雪: '471',
            },
            // 六十甲子
            liushijiazi: '甲子乙丑丙寅丁卯戊辰己巳庚午辛未壬申癸酉甲戌乙亥丙子丁丑戊寅己卯庚辰辛巳壬午癸未甲申乙酉丙戌丁亥戊子己丑庚寅辛卯壬辰癸巳甲午乙未丙申丁酉戊戌己亥庚子辛丑壬寅癸卯甲辰乙巳丙午丁未戊申己酉庚戌辛亥壬子癸丑甲寅乙卯丙辰丁巳戊午己未庚申辛酉壬戌癸亥甲子乙丑',
            //十天干对应的数字
            indextiangan: {
                甲: 0,
                乙: 1,
                丙: 2,
                丁: 3,
                戊: 4,
                己: 5,
                庚: 6,
                辛: 7,
                壬: 8,
                癸: 9,
            },
            xunshou: {
                甲子: '甲子戊',
                甲戌: '甲戌己',
                甲申: '甲申庚',
                甲午: '甲午辛',
                甲辰: '甲辰壬',
                甲寅: '甲寅癸',
            },
            // 日柱，时柱八字
            rizhushizhu: {
                rizhu: '',
                shizhu: ''
            },
            jiugongdata: {
                tiangan: '戊己庚辛壬癸丁丙乙',
                jiuxing: '天蓬星天任星天冲星天辅星天英星天芮星天柱星天心星',
                bashen: '值符腾蛇太阴六合白虎玄武九地九天',
                bamen: '休生伤杜景死惊开',
                yuanshitiangan: '甲乙丙丁戊己庚辛壬癸'
            },
            // 九宫每个宫的数据
            paipanjiugong: [
                {
                    zhuan: 1,
                    fei: 4,
                    yuan: 1,
                    name: '巽宫',
                    dipan: '',
                    jiuxing: '',
                    bashen: '',
                    bamen: '',
                    tianpan: '',
                    kongwang: '',
                    maxing: '',
                    bengongjiuxing: '天辅星',
                    bengongbamen: '杜门',
                    dizhi: '辰巳'
                }, {
                    zhuan: 2,
                    fei: 9,
                    yuan: 2,
                    name: '离宫',
                    dipan: '',
                    jiuxing: '',
                    bashen: '',
                    bamen: '',
                    tianpan: '',
                    kongwang: '',
                    maxing: undefined,
                    bengongjiuxing: '天英星',
                    bengongbamen: '景门',
                    dizhi: '午'
                }, {
                    zhuan: 3,
                    fei: 2,
                    yuan: 3,
                    name: '坤宫',
                    dipan: '',
                    jiuxing: '',
                    bashen: '',
                    bamen: '',
                    tianpan: '',
                    kongwang: '',
                    maxing: '',
                    bengongjiuxing: '天芮星',
                    bengongbamen: '死门',
                    dizhi: '未申'
                }, {
                    zhuan: 8,
                    fei: 3,
                    yuan: 4,
                    name: '震宫',
                    dipan: '',
                    jiuxing: '',
                    bashen: '',
                    bamen: '',
                    tianpan: '',
                    kongwang: '',
                    maxing: undefined,
                    bengongjiuxing: '天冲星',
                    bengongbamen: '伤门',
                    dizhi: '卯'
                }, {
                    zhuan: 0,
                    fei: 5,
                    yuan: 5,
                    name: '中宫',
                    dipan: '',
                    jiuxing: '',
                    bashen: '',
                    bamen: '',
                    tianpan: '',
                    kongwang: '',
                    maxing: undefined,
                    bengongjiuxing: '天禽星',
                    bengongbamen: '',
                    dizhi: ''
                }, {
                    zhuan: 4,
                    fei: 7,
                    yuan: 6,
                    name: '兑宫',
                    dipan: '',
                    jiuxing: '',
                    bashen: '',
                    bamen: '',
                    tianpan: '',
                    kongwang: '',
                    maxing: undefined,
                    bengongjiuxing: '天柱星',
                    bengongbamen: '惊门',
                    dizhi: '酉'
                }, {
                    zhuan: 7,
                    fei: 8,
                    yuan: 7,
                    name: '艮宫',
                    dipan: '',
                    jiuxing: '',
                    bashen: '',
                    bamen: '',
                    tianpan: '',
                    kongwang: '',
                    maxing: '',
                    bengongjiuxing: '天任星',
                    bengongbamen: '生门',
                    dizhi: '丑寅'
                }, {
                    zhuan: 6,
                    fei: 1,
                    yuan: 8,
                    name: '坎宫',
                    dipan: '',
                    jiuxing: '',
                    bashen: '',
                    bamen: '',
                    tianpan: '',
                    kongwang: '',
                    maxing: undefined,
                    bengongjiuxing: '天蓬星',
                    bengongbamen: '休门',
                    dizhi: '子'
                }, {
                    zhuan: 5,
                    fei: 6,
                    yuan: 9,
                    name: '乾宫',
                    dipan: '',
                    jiuxing: '',
                    bashen: '',
                    bamen: '',
                    tianpan: '',
                    kongwang: '',
                    maxing: '',
                    bengongjiuxing: '天心星',
                    bengongbamen: '开门',
                    dizhi: '戌亥'
                },
            ],
            // 保存展示flag
            isSaveFlag: false
        }
    }
    ,
    methods: {
        getjq(yy: any, mm: any, dd: any, hh: any, mf: any, ss: any, num: number) {
            var date
            if (num) {
                // 阳历的时间
                date = Solar.fromYmdHms(yy, mm, dd, hh, mf, ss).getLunar()
            } else {
                // 阴历的时间
                date = Lunar.fromYmdHms(yy, mm, dd, hh, mf, ss)
            }
            // lunar.js逻辑
            // var wuhou = date.getHou();

            // 编写插件(获取传入时间)
            function getqgrq(time: any) {
                return time.getYear() + '年' + time.getMonth() + '月' + time.getDay() + '日' + time.getHour() + ':' + time.getMinute() + ':' + time.getSecond();
            }
            // 获取传入八字
            this.rizhushizhu.rizhu = date.getBaZi()[2]
            this.rizhushizhu.shizhu = date.getBaZi()[3]
            function getgz(time: any) {

                return time.getBaZi()[0] + '   ' + time.getBaZi()[1] + '   ' + time.getBaZi()[2] + '   ' + time.getBaZi()[3];
            }
            // 农历
            var yangli = getqgrq(date.getSolar())
            // console.log('阳历', yangli)
            var yinli = getqgrq(date)
            // console.log('阴历', yinli)
            // console.log('year:', date.getYear(), 'month:', date.getMonth(), 'day:', date.getDay(), 'hour:', date.getHour(), 'Minute:', date.getMinute(), 'second:', date.getSecond())
            // 获取干支
            var ganzhi = getgz(date)
            // console.log('干支', ganzhi)

            // 具体节气时间点
            let beforjq = date.getPrevJieQi(false).getName(), afterjq = date.getNextJieQi(false).getName()
            let beforjqsj = date.getJieQiTable().get(beforjq).toYmdHms()
            let afterjqjqsj = date.getJieQiTable().get(afterjq).toYmdHms()
            // console.log('befor', beforjq + ':' + beforjqsj);
            // console.log('after', afterjq + ':' + afterjqjqsj);

            // 记录三元
            let sanyuan = ""

            // 调用节气三元
            getJQSY(date, beforjq, afterjq)
            // 获取节气三元
            function getJQSY(time: any, befor: any, after: any) {
                // 获取上一个节气农历时间
                var prevjqdate = time.getPrevJieQi(false).getSolar().getLunar();
                var pjqdy = prevjqdate.getYear(), pjqdm = prevjqdate.getMonth(), pjqdd = prevjqdate.getDay(), pjqdh = prevjqdate.getHour(), pjqdmm = prevjqdate.getMinute(), pjqds = prevjqdate.getSecond()
                // console.log('上一个节气阴历时间', pjqdy, pjqdm, pjqdd, pjqdh, pjqdmm, pjqds)
                // 获取下一个节气农历时间
                var nextjqdate = time.getNextJieQi(false).getSolar().getLunar();
                var njqdy = nextjqdate.getYear(), njqdm = nextjqdate.getMonth(), njqdd = nextjqdate.getDay(), njqdh = nextjqdate.getHour(), njqdmm = nextjqdate.getMinute(), njqds = nextjqdate.getSecond()
                // console.log('下一个节气阴历时间', njqdy, njqdm, njqdd, njqdh, njqdmm, njqds)

                // 用来存储天数的数组
                let dayarr = [];
                // 今天是几号
                let todayy = time.getYear(), todaym = time.getMonth(), todayd = time.getDay(), todayh = time.getHour(), todaymm = time.getMinute(), todays = time.getSecond();

                // 判断两个节气是否是同一个月(阴历月份)
                if (pjqdm !== njqdm) {
                    // 不是用一个月的逻辑
                    // console.log("两个节气不是用一个月(阴历月份)", 'pjqdm', pjqdm, 'njqdm', njqdm)
                    // 获取当月天数
                    var lunarMonth: any = LunarMonth.fromYm(todayy, todaym);
                    // console.log('当月天数', lunarMonth.getDayCount());
                    // 上个月的天数
                    var lastMonthFromYm: any = LunarMonth.fromYm(todayy, pjqdm)
                    var lastMonth = lastMonthFromYm.getDayCount();
                    for (var i = pjqdd; i <= lastMonth; i++) {
                        dayarr.push(i)
                    }
                    for (var d = 1; d <= todayd; d++) {
                        dayarr.push(d)
                    }
                    // console.log('这个元运的天数', dayarr)

                } else {
                    // 是用一个月的逻辑
                    // console.log('两个节气是用一个月(阴历月份)', 'pjqdm', pjqdm, 'njqdm', njqdm)
                    let daynum = njqdd - pjqdd;
                    for (var darr = pjqdd; darr <= njqdd; darr++) {
                        dayarr.push(darr)
                    }
                }

                // 当月是哪月
                // console.log('当月阴历是月:', pjqdm)
                // 一天所有的秒
                let allSecond = 24 * 60 * 60;
                // 一元所有的秒数
                let yiyuanSecond = allSecond * 5;
                let eryuanSecond = allSecond * 10
                // 节气开始那天过了多少秒
                let haveSecond = (pjqdh * 60 * 60 + pjqdmm * 60 + pjqds);
                // 获取天数在数组中的索引
                let indexI = dayarr.indexOf(todayd);
                // 距离开始节气过了多少秒
                let tostart = (indexI * allSecond - haveSecond) + (todayh * 60 * 60 + todaymm * 60 + todays);

                if (tostart <= yiyuanSecond) {
                    // console.log(befor + '上元')
                    sanyuan = '上元'
                } else if (tostart >= yiyuanSecond && tostart <= eryuanSecond) {
                    // console.log(befor + '中元')
                    sanyuan = '中元'
                } else {
                    // console.log(befor + '下元')
                    sanyuan = '下元'
                }

            }
            return {
                jq: beforjq,
                sanyuan: sanyuan,
                yangli: yangli,
                yinli: yinli,
                ganzhi: ganzhi
            }
        },
        // 点击事件
        onSubmit(num: number) {
            try {
                // 获取节气时间等数据
                let getjqdate = this.getjq(this.modelRef.year, this.modelRef.month, this.modelRef.day, this.modelRef.hour, this.modelRef.minute, this.modelRef.second, num)
                // 赋值到动态更新
                this.paiPanDateRef.jq = getjqdate.jq
                this.paiPanDateRef.sanyuan = getjqdate.sanyuan
                this.paiPanDateRef.yangli = getjqdate.yangli
                this.paiPanDateRef.yinli = getjqdate.yinli
                this.paiPanDateRef.ganzhi = getjqdate.ganzhi
                //获取阴阳盘三元数字
                let getjushudate = this.getjushu(this.paiPanDateRef.jq, this.paiPanDateRef.sanyuan)
                this.paiPanDateRef.jushu = getjushudate.jushu
                this.paiPanDateRef.yinyang = getjushudate.yinyang
                // 获取旬首
                let searchxunshou = this.getxunshou(this.rizhushizhu.shizhu, this.liushijiazi)
                this.paiPanDateRef.xunshou = searchxunshou
                // 获取空亡
                let searchkongwang = this.getrikongwang(this.rizhushizhu.rizhu, this.liushijiazi)
                this.paiPanDateRef.rikongwang = searchkongwang
                // 排九宫
                this.paipan(this.paiPanDateRef, this.paipanjiugong, this.jiugongdata)
            } catch (error) {
                console.log('error', error)
                const openNotification = () => {
                    notification.open({
                        message: 'error',
                        description:
                            error + '',
                        style: {
                            width: '600px',
                            marginLeft: `${335 - 600}px`,
                        },
                        class: 'notification-custom-class',
                    });
                };
                openNotification()
            }

        },
        // 获取局数
        getjushu(jq: string, sanyuan: string) {
            var yinyang = '', jushu = ''
            var i = 0
            for (let [k, v] of Object.entries(this.jqsyList)) {
                i++
                if (k == jq) {
                    i <= 12 ? yinyang = '阳' : yinyang = '阴'
                    if (sanyuan == '上元') {
                        jushu = v.charAt(0)
                    } else if (sanyuan == '中元') {
                        jushu = v.charAt(1)
                    } else {
                        jushu = v.charAt(2)
                    }
                }
            }
            return {
                yinyang, jushu
            }
        },
        // 查旬首
        getxunshou(ganzhi: string, liushijiazi: string) {
            // 找到出现的索引
            var ganzhiI = liushijiazi.indexOf(ganzhi)
            // 旬首甲的索引
            var jiaI = liushijiazi.lastIndexOf('甲', ganzhiI)
            var xunshou = liushijiazi.charAt(jiaI) + liushijiazi.charAt(jiaI + 1)
            var xunshouend = ''
            for (let [k, v] of Object.entries(this.xunshou)) {
                k == xunshou ? xunshouend = v : null
            }
            return xunshouend
        },
        // 查日空亡
        getrikongwang(ganzhi: string, liushijiazi: string) {
            var ganzhiI = liushijiazi.indexOf(ganzhi)
            var kongwangI = liushijiazi.indexOf('甲', ganzhiI + 1)
            var kongwang = liushijiazi.charAt(kongwangI + 1) + liushijiazi.charAt(kongwangI + 3) + '空'
            return kongwang
        },
        // 排盘
        paipan(paiPanDateRef: any, paipanjiugong: any, jiugongdata: any) {
            // 清空数据
            this.initdata()
            // 排地盘
            var jushu = Number(paiPanDateRef.jushu)
            for (var a = 0; a < 9; a++) {
                for (var i = 0; i < paipanjiugong.length; i++) {
                    if (jushu == paipanjiugong[i].fei) {
                        // 赋值地盘
                        this.paipanjiugong[i].dipan = jiugongdata.tiangan.charAt(a)
                    }
                }
                if (paiPanDateRef.yinyang == '阳') {
                    jushu >= 9 ? jushu = 1 : jushu++
                } else {
                    jushu <= 1 ? jushu = 9 : jushu--
                }
            }
            // 确定值符值使
            let xstiangan = this.paiPanDateRef.xunshou.charAt(2)
            for (let xstg = 0; xstg < paipanjiugong.length; xstg++) {
                if (paipanjiugong[xstg].dipan == xstiangan) {
                    this.paiPanDateRef.zhifu = paipanjiugong[xstg].bengongjiuxing.slice(0, 3)
                    this.paiPanDateRef.zhishi = this.paipanjiugong[xstg].bengongbamen
                }
            }
            // 处理地盘中宫(天盘的处理)
            if (paiPanDateRef.yinyang == '阳' && this.paipanjiugong[4].dipan == xstiangan) {
                this.paiPanDateRef.zhishi = this.paipanjiugong[6].bengongbamen
            } else if (paiPanDateRef.yinyang == '阴' && this.paipanjiugong[4].dipan == xstiangan) {
                this.paiPanDateRef.zhishi = this.paipanjiugong[2].bengongbamen
            }
            if (paiPanDateRef.yinyang == '阳') {
                // 地盘是否双
                // 地盘是否为天任星+天禽星 / 天芮星+天禽星
                // 值使在旬首落中宫情况下，是生门还是死门
                this.paipanjiugong[6].dipan += paipanjiugong[4].dipan
                this.paipanjiugong[6].bengongjiuxing = this.paipanjiugong[6].bengongjiuxing.slice(0, 3) + '天禽星'
                this.paipanjiugong[2].bengongjiuxing = this.paipanjiugong[2].bengongjiuxing.slice(0, 3)
            } else if (paiPanDateRef.yinyang == '阴') {
                this.paipanjiugong[2].dipan += paipanjiugong[4].dipan
                this.paipanjiugong[2].bengongjiuxing = this.paipanjiugong[2].bengongjiuxing.slice(0, 3) + '天禽星'
                this.paipanjiugong[6].bengongjiuxing = this.paipanjiugong[6].bengongjiuxing.slice(0, 3)
            }
            //处理马星
            if ('申子辰'.indexOf(this.rizhushizhu.rizhu.charAt(1)) != -1) {
                // 地支申子辰的马星日柱
                this.paipanjiugong[6].maxing = '马'
            } else if ('寅午戌'.indexOf(this.rizhushizhu.rizhu.charAt(1)) != -1) {
                this.paipanjiugong[2].maxing = '马'
            } else if ('亥卯未'.indexOf(this.rizhushizhu.rizhu.charAt(1)) != -1) {
                this.paipanjiugong[0].maxing = '马'
            } else if ('巳酉丑'.indexOf(this.rizhushizhu.rizhu.charAt(1)) != -1) {
                this.paipanjiugong[8].maxing = '马'
            }
            // 排九星
            var jiuxingNum = 0, bengongjiuxingNum = 0, bashenNum = 0, shizhuganjiuxing = ''
            paipanjiugong = paipanjiugong.sort(function (a: any, b: any) { return a.zhuan - b.zhuan })
            for (var x = 1; x < paipanjiugong.length; x++) {
                // 值符星找到时柱
                shizhuganjiuxing = this.rizhushizhu.shizhu.charAt(0) == '甲' ? this.paiPanDateRef.xunshou.charAt(2) : this.rizhushizhu.shizhu.charAt(0)
                if (paipanjiugong[x].dipan.indexOf(shizhuganjiuxing) != -1) {
                    for (var sortJX = 1; sortJX < 9; sortJX++) {
                        // 排九星
                        if (paipanjiugong[sortJX].bengongjiuxing.indexOf(this.paiPanDateRef.zhifu) != -1) {
                            for (var ee = 0; ee < 8; ee++) {
                                jiuxingNum = x + ee
                                bengongjiuxingNum = sortJX + ee
                                if (jiuxingNum > 8) {
                                    jiuxingNum -= 8
                                }
                                if (bengongjiuxingNum > 8) {
                                    bengongjiuxingNum -= 8
                                }
                                this.paipanjiugong[jiuxingNum].jiuxing = this.paipanjiugong[bengongjiuxingNum].bengongjiuxing.charAt(1)
                                this.paipanjiugong[bengongjiuxingNum].bengongjiuxing.charAt(4) != '' ? this.paipanjiugong[jiuxingNum].jiuxing += this.paipanjiugong[bengongjiuxingNum].bengongjiuxing.charAt(4) : null
                            }
                        }
                        // 排八神
                        if (paipanjiugong[sortJX].bengongjiuxing.indexOf(this.paiPanDateRef.zhifu) != -1) {
                            for (var bs = 0; bs < 8; bs++) {
                                if (paiPanDateRef.yinyang == '阳') {
                                    bashenNum = x + bs
                                    if (bashenNum > 8) {
                                        bashenNum -= 8
                                    }
                                    this.paipanjiugong[bashenNum].bashen = this.jiugongdata.bashen.slice(bs * 2, (bs + 1) * 2)
                                } else {
                                    bashenNum = x - bs
                                    if (bashenNum < 1) {
                                        bashenNum += 8
                                    }
                                    this.paipanjiugong[bashenNum].bashen = this.jiugongdata.bashen.slice(bs * 2, (bs + 1) * 2)
                                }

                            }
                        }
                    }
                }
            }
            for (var x1 = 1; x1 < paipanjiugong.length; x1++) {
                // 排天盘
                for (var sortJX1 = 1; sortJX1 < 9; sortJX1++) {
                    if (paipanjiugong[sortJX1].bengongjiuxing.indexOf(paipanjiugong[x1].jiuxing.charAt(0)) != -1) {
                        this.paipanjiugong[x1].tianpan = paipanjiugong[sortJX1].dipan
                    }
                }
            }
            // 排值使八门
            var xunshougan = this.paiPanDateRef.xunshou.charAt(2), shizhugan = '', shizhugannum = 0, zhishinum = 0, zshinum = 0, bgzsnum = 0, zhishiI = 0, pinjiezhishi = ''
            paipanjiugong = paipanjiugong.sort(function (a: any, b: any) { return a.fei - b.fei })
            for (var x2 = 0; x2 < paipanjiugong.length; x2++) {
                // 找到旬首所在的宫位
                // if (paipanjiugong[x2].dipan.indexOf(xunshougan) != -1) {
                if (paipanjiugong[x2].dipan.indexOf(xunshougan) != -1) {
                    // 找到值使所应该在的宫位
                    shizhugan = this.rizhushizhu.shizhu.charAt(0)
                    shizhugannum = this.jiugongdata.yuanshitiangan.indexOf(shizhugan)
                    if (paiPanDateRef.yinyang == '阳') {
                        zhishinum = paipanjiugong[x2].fei + shizhugannum > 9 ? paipanjiugong[x2].fei + shizhugannum - 9 : paipanjiugong[x2].fei + shizhugannum
                        zhishinum = zhishinum == 5 ? 8 : zhishinum
                    } else {
                        zhishinum = paipanjiugong[x2].fei - shizhugannum < 1 ? paipanjiugong[x2].fei - shizhugannum + 9 : paipanjiugong[x2].fei - shizhugannum
                        zhishinum = zhishinum == 5 ? 2 : zhishinum
                    }
                    paipanjiugong = paipanjiugong.sort(function (a: any, b: any) { return a.zhuan - b.zhuan })
                    for (var zspx = 0; zspx < paipanjiugong.length; zspx++) {
                        // if (paipanjiugong[zhishinum].fei == paipanjiugong[zspx].fei) {
                        if (paipanjiugong[zspx].fei == zhishinum) {
                            for (var zspxI = 0; zspxI < 8; zspxI++) {
                                zshinum = zspx + zspxI
                                if (zshinum > 8) {
                                    zshinum -= 8
                                }
                                zhishiI = this.jiugongdata.bamen.indexOf(this.paiPanDateRef.zhishi.charAt(0))
                                pinjiezhishi = this.jiugongdata.bamen.slice(zhishiI) + this.jiugongdata.bamen.slice(0, zhishiI)
                                this.paipanjiugong[zshinum].bamen = pinjiezhishi.charAt(zspxI)
                            }
                        }
                    }
                }

            }
            // 处理空亡
            for (let kw = 0; kw < paipanjiugong.length; kw++) {
                if (paipanjiugong[kw].dizhi.indexOf(this.paiPanDateRef.rikongwang.charAt(0)) != -1 || paipanjiugong[kw].dizhi.indexOf(this.paiPanDateRef.rikongwang.charAt(1)) != -1) {
                    this.paipanjiugong[kw].kongwang = '1'
                } else {
                    this.paipanjiugong[kw].kongwang = ''
                }
            }
            paipanjiugong = paipanjiugong.sort(function (a: any, b: any) { return a.yuan - b.yuan })
        },
        initdata() {
            for (let i = 0; i < this.paipanjiugong.length; i++) {
                this.paipanjiugong[i].dipan = ''
                this.paipanjiugong[i].jiuxing = ''
                this.paipanjiugong[i].bashen = ''
                this.paipanjiugong[i].tianpan = ''
                this.paipanjiugong[i].kongwang = ''
                this.paipanjiugong[i].maxing = ''
                this.paipanjiugong[i].bamen = ''
            }
        },
        saveQiMen() {
            if (this.$store.state.userData == '') {
                message.error('需要先登录账号！');
            } else {
                // 显示隐藏操作
                if (this.isSaveFlag) {
                    this.isSaveFlag = false
                } else {
                    this.isSaveFlag = true
                }
                // 保存操作

            }
        }
    },
})
</script>
<style lang="stylus" scoped>

.maoshan
    .home-row
        .maoshan-jiugong-form
            margin: 0 0 10px 0
            
            .home-row-form
                .home-col-form
                    margin: 0 0 10px 0
                    .home-form-box
                        background-color #f1f1f1
                        border-radius 6px
                        padding 5px
                        .create-paipan-bc-btn
                            text-align right
                            u
                                padding-right 20px
                                cursor pointer
                    .create-paipan-save
                        background-color #f1f1f1
                        border-radius 6px
                        padding 5px
                        margin-top 10px
                    .home-xinxi
                        background-color #f1f1f1
                        border-radius 6px
                        padding 5px
                        margin-top 10px
                        .create-paipan
                            background-color #f1f1f1
                            border-radius 6px
                        .ant-btn:hover
                            background-color: #cdcdcd
                            color black
                            border-color white
                        .ant-btn:focus
                            color black
                            border-color white
                        .home-form
                            display flex


        .maoshan-jiugong
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