<template>
    <div>
        <div class="maoshan">
            <a-row class="home-row">
                <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
                <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
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
                                <div class="create-paipan-save" v-show="isSaveFlag">
                                    <a-form :model="paipanFormState" v-bind="layout" name="nest-messages">
                                        <a-form-item label="时间">
                                            <span>{{ modelRef.year }}年</span>
                                            <span>{{ modelRef.month }}月</span>
                                            <span>{{ modelRef.day }}日</span>
                                            <span>{{ modelRef.hour }}时</span>
                                            <span>{{ modelRef.minute }}分</span>
                                            <span>{{ modelRef.second }}秒</span>
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
                                        <a-button html-type="submit" @click="saveMaoShan">保存</a-button>
                                    </a-form-item>
                                </div>
                                <!-- 年月日时分秒表单 -->
                                <!-- 展示信息 -->
                                <div class="home-xinxi" v-if="paiPanDateRef.yangli != ''">
                                    <span>阳历：{{ paiPanDateRef.yangli }} {{ paiPanDateRef.jq }}{{
                                        paiPanDateRef.sanyuan
                                    }}</span><br>
                                    <span>阴历：{{ paiPanDateRef.yinli }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                                        paiPanDateRef.yinyang
                                    }}{{ paiPanDateRef.jushu }}局</span><br>
                                    <span>干支：{{ paiPanDateRef.ganzhi }}</span><br>
                                    <span>旬首：{{ paiPanDateRef.xunshou }}&nbsp;&nbsp;&nbsp;日空亡：{{
                                        paiPanDateRef.rikongwang
                                    }}
                                        &lt;转盘> </span><br>
                                    <span>值符：{{ paiPanDateRef.zhifu }} 值使：{{ paiPanDateRef.zhishi }}</span>
                                </div>
                                <div class="home-xinxi" v-else>
                                    今天是要测些什么呢？ >_&lt;
                                </div>
                                <!-- 展示信息 -->
                            </a-col>
                            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxxl="8">
                                <div class="maoshan-jiugong" v-if="paiPanDateRef.yangli != ''">
                                    <div class="gridBox">
                                        <div class="cellLi" v-for="jiugong in paipanjiugong" :key="jiugong.fei">
                                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                            <p>{{
                                                jiugong.kongwang == '1' ? `〇` :
                                                    ``
                                            }}</p>
                                            <p>{{
                                                jiugong.maxing == '' || jiugong.maxing == undefined ? ''
                                                    :
                                                    '马'
                                            }}</p> <br> <br>

                                            <p class="cellLi-bashen">{{ jiugong.bashen.charAt(0) }}</p>
                                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                                            <p v-if="jiugong.istianpanjixing == '1' || jiugong.istianpanrumu == '1'"
                                                :title="jiugong.istianpanjixing == '1' ? '击邢' : '' + jiugong.istianpanrumu == '1' ? '入墓' : ''"
                                                :style="{ color: 'red' }">{{ jiugong.tianpan }}</p>
                                            <p v-else>{{ jiugong.tianpan }}</p>
                                            &nbsp;&nbsp;&nbsp; <br>
                                            <p>{{ jiugong.bashen.charAt(1) }}</p>
                                            &nbsp;&nbsp;
                                            <p v-if="jiugong.isdipanjixing == '1' || jiugong.isdipanrumu == '1'"
                                                :title="jiugong.isdipanrumu == '1' ? '入墓' : '' + jiugong.isdipanjixing == '1' ? '击邢' : ''"
                                                :style="{ color: 'red' }">{{ jiugong.dipan.charAt(0) }}</p>
                                            <p v-else>{{ jiugong.dipan.charAt(0) }}</p>
                                            <p>{{ jiugong.jiuxing }}</p>
                                            <p v-if="jiugong.ismenpo == '1'" :title="jiugong.ismenpo == '1' ? '门迫' : ''"
                                                :style="{ color: 'red' }">{{ jiugong.bamen }}</p>
                                            <p v-else>{{ jiugong.bamen }}</p>
                                        </div>
                                    </div>
                                </div>
                            </a-col>
                            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxxl="8"
                                v-if="paiPanDateRef.yangli != ''">
                                <div class="maoshan-jiugong">
                                    <h3>九宫基础信息：</h3>
                                    <a-tabs v-model:activeKey="activeKey" :tab-position="mode" @tabScroll="callback">
                                        <!-- :style="{ height: '200px' }" -->
                                        <a-tab-pane v-for="[key, value] of Object.entries(paipanjiugong)" :key="key"
                                            :tab="value.name">
                                            <!-- :tab="`Tab-${value.name}`" -->
                                            <!-- {{ key }} -->
                                            <p>十干克应:</p>
                                            <p :style="{ fontSize: '10px' }">{{
                                                value.shigankeying == "" ? "无" :
                                                    value.shigankeying
                                            }}</p>
                                            <hr>
                                            <p>九星万物类象:</p>
                                            <p :style="{ fontSize: '10px' }">{{
                                                value.jiuxingwanwuleixiang == "" ? "无" :
                                                    value.jiuxingwanwuleixiang
                                            }}
                                            </p>
                                            <hr>
                                            <p>八门万物类象:</p>
                                            <p :style="{ fontSize: '10px' }">{{
                                                value.bamenwanwuleixiang == "" ? "无" :
                                                    value.bamenwanwuleixiang
                                            }}</p>
                                            <hr>
                                        </a-tab-pane>
                                    </a-tabs>
                                </div>
                            </a-col>
                            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxxl="8"
                                v-if="paiPanDateRef.yangli != ''">
                                <div class="maoshan-jiugong">
                                    <h3>经济财运预测：</h3>
                                    <span
                                        :style="{ fontSize: '10px' }">提示：请保持独立思考，市场有风险，投资需谨慎，本结果仅作交流之用，不承担任何法律后果。</span>
                                    <hr>
                                    <h5>投资求财：{{ allyucedata.touziqiucai }}</h5>
                                    <hr>
                                    <h5>买货求财：{{ allyucedata.maihuoqiucai }}</h5>
                                    <hr>
                                    <h5>卖货求财：{{ allyucedata.maichuhuoqiucai }}</h5>
                                    <hr>
                                    <h5>借贷财务：{{ allyucedata.jiedaicaiwu }}</h5>
                                    <hr>
                                    <h5>放贷财务：{{ allyucedata.fangdaiyuce }}</h5>
                                    <hr>
                                    <h5>索债财务：{{ allyucedata.suozhaiyuce }}</h5>
                                    <hr>
                                </div>
                                <div class="maoshan-jiugong">
                                    <div :style="{ marginBottom: '10px' }">
                                        <h3 :style="{ display: 'inline-block' }">姻缘（婚姻）预测：</h3>
                                        <a-button :style="{ float: 'right', marginRight: '10px' }"
                                            @click="yinyuanyuce">阴历点击预测</a-button>
                                    </div>
                                    <div :style="{ display: 'flex' }">
                                        男性年份：<a-date-picker v-model:value="boyyear" picker="year" />
                                        女性年份：<a-date-picker v-model:value="grilyear" picker="year" />
                                    </div>
                                    <hr>
                                    <p>结果：{{ allyucedata.yinyuanyuce.jieguo }}</p>
                                    <!-- <p>男方桃花(主动求测才灵)：{{ allyucedata.yinyuanyuce.boytaohua }}</p>
                                    <p>女方桃花(主动求测才灵)：{{ allyucedata.yinyuanyuce.griltaohua }}</p> -->
                                </div>
                            </a-col>
                        </a-row>
                    </div>
                </a-col>
                <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
            </a-row>
        </div>
    </div>
</template>
<script lang="ts">
import Axios from "@/until/axios";
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import { Form, notification, message } from 'ant-design-vue';
import type { TabsProps } from 'ant-design-vue';
import { Solar, Lunar, LunarMonth, LunarYear } from 'lunar-typescript';
import qs from "qs";
import type { Dayjs } from 'dayjs';
import ARow from "ant-design-vue/lib/grid/Row";
import layout from "ant-design-vue/lib/layout";

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
            labelCol: { span: 6 },
            wrapperCol: { span: 16 },
        };

        const paipanFormState = reactive({
            user: {
                title: '',
                email: modelRef.year + '-' + modelRef.month + '-' + modelRef.day + '-' + modelRef.hour + '-' + modelRef.minute + '-' + modelRef.second,
                introduction: '',
            },
        });

        // 基础信息选项栏
        const mode = ref<TabsProps['tabPosition']>('top');
        const activeKey = ref(1);
        const callback: TabsProps['onTabScroll'] = val => {
            // console.log(val);
        };

        return {
            labelCol: { span: 6 }, // label的栅格
            wrapperCol: { span: 18 },
            validate,
            validateInfos,
            modelRef,
            year, month, day, hour, minute, second,
            paipanFormState,
            layout,
            mode,
            callback,
            activeKey,
            boyyear: ref<Dayjs>(),
            grilyear: ref<Dayjs>(),
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
                    dizhi: '辰巳',
                    shigankeying: "",
                    jiuxingwanwuleixiang: "",
                    bamenwanwuleixiang: "",
                    wuxing: "木",
                    istianpanrumu: "0",
                    isdipanrumu: "0",
                    istianpanjixing: '0',
                    isdipanjixing: '0',
                    ismenpo: "0",
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
                    dizhi: '午',
                    shigankeying: "",
                    jiuxingwanwuleixiang: "",
                    bamenwanwuleixiang: "",
                    wuxing: "火",
                    istianpanrumu: "0",
                    isdipanrumu: "0",
                    istianpanjixing: '0',
                    isdipanjixing: '0',
                    ismenpo: "0",
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
                    dizhi: '未申',
                    shigankeying: "",
                    jiuxingwanwuleixiang: "",
                    bamenwanwuleixiang: "",
                    wuxing: "土",
                    istianpanrumu: "0",
                    isdipanrumu: "0",
                    istianpanjixing: '0',
                    isdipanjixing: '0',
                    ismenpo: "0",
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
                    dizhi: '卯',
                    shigankeying: "",
                    jiuxingwanwuleixiang: "",
                    bamenwanwuleixiang: "",
                    wuxing: "木",
                    istianpanrumu: "0",
                    isdipanrumu: "0",
                    istianpanjixing: '0',
                    isdipanjixing: '0',
                    ismenpo: "0",
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
                    dizhi: '',
                    shigankeying: "",
                    jiuxingwanwuleixiang: "",
                    bamenwanwuleixiang: "",
                    wuxing: "",
                    istianpanrumu: "0",
                    isdipanrumu: "0",
                    istianpanjixing: '0',
                    isdipanjixing: '0',
                    ismenpo: "0",
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
                    dizhi: '酉',
                    shigankeying: "",
                    jiuxingwanwuleixiang: "",
                    bamenwanwuleixiang: "",
                    wuxing: "金",
                    istianpanrumu: "0",
                    isdipanrumu: "0",
                    istianpanjixing: '0',
                    isdipanjixing: '0',
                    ismenpo: "0",
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
                    dizhi: '丑寅',
                    shigankeying: "",
                    jiuxingwanwuleixiang: "",
                    bamenwanwuleixiang: "",
                    wuxing: "土",
                    istianpanrumu: "0",
                    isdipanrumu: "0",
                    istianpanjixing: '0',
                    isdipanjixing: '0',
                    ismenpo: "0",
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
                    dizhi: '子',
                    shigankeying: "",
                    jiuxingwanwuleixiang: "",
                    bamenwanwuleixiang: "",
                    wuxing: "水",
                    istianpanrumu: "0",
                    isdipanrumu: "0",
                    istianpanjixing: '0',
                    isdipanjixing: '0',
                    ismenpo: "0",
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
                    dizhi: '戌亥',
                    shigankeying: "",
                    jiuxingwanwuleixiang: "",
                    bamenwanwuleixiang: "",
                    wuxing: "金",
                    istianpanrumu: "0",
                    isdipanrumu: "0",
                    istianpanjixing: '0',
                    isdipanjixing: '0',
                    ismenpo: "0",
                },
            ],
            // 保存展示flag
            isSaveFlag: false,
            shigankeying: {
                "乙乙": "日奇伏吟，不宜谒贵求名，只可安分守己。",
                "乙丙": "奇仪顺遂，吉星迁官进职；凶星反目离别。",
                "乙丁": "奇仪相佐，文书事吉，百事皆可为。",
                "乙戊": "阴害阳门，利阴害阳，门逢凶迫，破财伤人。",
                "乙己": "日奇入墓，被土暗昧，门凶必凶；得开门为地遁。",
                "乙庚": "日奇被刑，争讼财产，夫妻怀私。",
                "乙辛": "青龙逃走，奴仆拐带，六畜皆伤。",
                "乙壬": "日奇入地，尊卑悖乱，官讼是非，有人谋害之事。",
                "乙癸": "日奇华盖，遁迹修道，隐匿藏形，躲灾避难为吉。",
                "丙乙": "日月并行，公谋私为皆吉。",
                "丙丙": "月奇悖师，文书逼迫，破耗遗失。",
                "丙丁": "月奇朱雀，贵人文书吉利，常人平静。得生门为天遁。",
                "丙戊": "飞鸟跌穴，谋为百事吉顺洞彻。",
                "丙己": "火悖入刑，囚人刑杖，文书不行。吉门得吉，凶门转凶。",
                "丙庚": "荧入太白，火入金乡，门户破败，盗贼耗失。",
                "丙辛": "丙辛相合，谋事能成，病人不凶。",
                "丙壬": "火入天罗，为客不利，是非颇多。",
                "丙癸": "悖格华盖，阴人害事，灾祸频生。",
                "丁乙": "人遁吉格，贵人官晋爵，常人婚姻财喜。",
                "丁丙": "星随月转，贵人越级高升；常人乐极生悲。",
                "丁丁": "奇入太阴，文书即至，喜事遂心。",
                "丁戊": "青龙转光，贵人升迁，常人威昌。",
                "丁己": "火入勾陈，奸私仇冤，事因女人。",
                "丁庚": "文书阻隔，行人必归。",
                "丁辛": "朱雀入狱，罪人释囚，官人失位。",
                "丁壬": "五神互合，贵人恩诏，讼狱公平。",
                "丁癸": "朱雀投江，音信沉溺，文书口舌是非，词讼不利。",
                "戊乙": "青龙合灵，门吉事吉，门凶事凶。",
                "戊丙": "青龙返首，动作大吉，若逢墓迫击刑，吉事成凶。",
                "戊丁": "青龙耀明，谒贵求名吉利；若值墓迫，招惹是非。",
                "戊戊": "青龙伏吟，凡事闭塞阻滞，静守为吉。",
                "戊己": "贵人入狱，公私皆不利。",
                "戊庚": "值符飞宫，吉事不吉，凶事更凶。飞宫也主换地方。",
                "戊辛": "青龙折足，吉门生助，尚可谋为；若逢凶门，主招灾失财有足疾。",
                "戊壬": "青龙入天牢，凡阴阳事皆不吉利。",
                "戊癸": "青龙华盖，门吉多招福；门凶多破败，诸事不利。",
                "己乙": "地户逢星，墓神不明，宜遁迹隐形为利。",
                "己丙": "火悖地户，阳人冤冤相害，阴人必致淫污。",
                "己丁": "朱雀入墓，文状词讼，先曲后直。",
                "己戊": "犬遇青龙，门吉谋望遂意，上人见喜；门凶枉费心机。",
                "己己": "地户逢鬼，病者必死，百事不遂，谋为则凶。",
                "己庚": "刑格返名，词讼先动者不利，阴星有谋害之情。",
                "己辛": "游魂入墓，易遇阴邪鬼魅作祟。",
                "己壬": "地网高张，狡童佚女，奸情伤杀。",
                "己癸": "地刑玄武，男女疾病垂危，有囚狱词讼之灾。",
                "庚乙": "太白蓬星，退吉进凶，谋为不利。",
                "庚丙": "太白入荧，占贼必来，为客进利，为主破财。",
                "庚丁": "亭亭之格，因私匿起官司，门吉有救。",
                "庚戊": "天乙伏宫，谋为百事皆凶。",
                "庚己": "刑格，官讼判刑，牢狱更凶。",
                "庚庚": "太白同宫，战格，官灾横祸，兄弟雷攻。",
                "庚辛": "白虎干格，远行必凶，车折马死。求财大凶。",
                "庚壬": "上格、小格、移荡格，远行迷失道路，男女音信难通。",
                "庚癸": "大格，行人不至，官司不止，多主车祸。生产母子俱伤，大凶。",
                "辛乙": "白虎猖狂，家败人亡，尊长不喜；远行多殃，车船俱伤；测婚离散，主因男人。",
                "辛丙": "干合悖师，占雨无，占晴旱，占事必因财致讼。",
                "辛丁": "狱神得奇，经商获倍利，囚人逢赦免。",
                "辛戊": "困龙被伤，官司破败，屈抑守分吉，妄动祸殃。",
                "辛己": "入狱自刑，奴仆背主，讼诉难伸。",
                "辛庚": "白虎出力，刀刃相接，主客相残。逊让退步稍可，强攻血溅衣衫。",
                "辛辛": "伏吟天庭，公废私就，讼狱自罹罪责。",
                "辛壬": "凶蛇入狱，两男争女，讼狱不息，先动失理。",
                "辛癸": "天牢华盖，日月失明，误入天网，动止乖张。",
                "壬乙": "小蛇得势，女子柔顺，男人通达。占孕生子，禄马光华。",
                "壬丙": "水蛇入火，官灾刑禁，络绎不绝。",
                "壬丁": "干合蛇刑，文书牵连，贵人匆匆，男吉女凶。",
                "壬戊": "小蛇化龙，男人发达，女产婴童。",
                "壬己": "反吟蛇刑，大祸将至，顺守斯吉，词讼理屈。",
                "壬庚": "太白擒蛇，刑狱公平，立剖邪正。",
                "壬辛": "腾蛇相缠，纵得吉门，亦不能安；若有谋望，被人欺瞒。",
                "壬壬": "蛇入地罗，外事缠绕，内事索索，门吉星吉，庶免磋砣。",
                "壬癸": "幼女奸淫，家有丑声，门吉星凶，反祸福隆。",
                "癸乙": "华盖蓬星，贵人禄位，常人平安。",
                "癸丙": "华盖悖师，贵贱逢之皆不利，唯上人见喜。",
                "癸丁": "腾蛇夭矫，文书官司，火焚莫逃。",
                "癸戊": "天乙会合，门吉财喜婚姻，吉人赞助成合；门凶迫制，反祸官非。",
                "癸己": "华盖地户，男女占之，音信皆阻，躲灾避难为吉。",
                "癸庚": "太白入网，以暴力争讼，自罹罪责。",
                "癸辛": "网盖天牢，占病占讼，死罪莫逃。",
                "癸壬": "复见腾蛇，嫁娶重婚，后嫁无子，不保年华。",
                "癸癸": "天网四张，行人失伴，病讼皆伤。",
                // 天干在十干克应中的类象
                "甲": "青龙，天福"
            },
            jiuxingwanwuleixiang: {
                "天蓬星": "一白贪狼星，水，咸味，原坎宫，阳星，大盗，杀人犯，黑社会，其性贪，大眼睛，宜安抚边界，修筑城池，土木之事，屯兵部首，余事皆不利，经商出行，易遭盗贼，破财生病等，水灾，总之天蓬星为大凶之星。",
                "天芮星": "二黑巨门星，土，甜味，原坤宫，阴星，又名病符星，大凶星，代表学生，求学求道求仙之人，宜屯兵部首，不宜出兵，不宜嫁娶，词讼（官司），迁徙，修造等",
                "天冲星": "三碧禄存星，木，震宫，原震宫，阳星，其具有慈爱之心，助人为乐，主管农事，树林，树木，车辆，跑动，冲动等，吉星。寿星",
                "天辅星": "四绿文昌星，木，酸味，阳星，主文化教育有关之事，为大吉之星，代表学校，老师等信息，天辅星所临之处，百事皆宜，出行，经商，交易，工术女（手巧的女人），嫁娶，修造均吉利。尤其利于升学考试，发展文化教育等。细长物品（项链等），蛇，各类长虫（蜈蚣），白眼仁多的人（黑眼球少长相），说反话，",
                "天禽星": "五黄廉贞星，土，阳星，大吉之星，为人中正，长相端庄，略胖，做事公道，守信用，具有凝聚力，有领导才能",
                "天心星": "六白武曲星，金，辣味，乾宫，阳星，其能动能静，为父亲，为领导，为天，有军事领导才能，又能医疗治病，又为神仙，利于，求道，修仙，惩恶扬善之星，为大吉之星，特别利于武职。",
                "天柱星": "七赤破军星，金，兑宫，阴星，其喜杀，好战，主惊恐怪异，破坏，毁坏，毁折等信息，大凶之星，范临天柱星，宜屯兵部首，不宜出战，经商远行不利，强行则车辙马伤，士卒败亡，做生意折本，又主意外伤灾。",
                "天任星": "八白左辅星，土，艮宫，阳星，宜利国安邦，教化黎民，入关谒贵，商贾嫁娶，百事皆吉，诚信，稳重，守信用",
                "天英星": "九紫右弼星，火，苦味，离宫，阴星，其烈火yansha，性情躁动，喜发脾气，有才华，喜展现，好胜，好动，争强，又和血光有关，属中平小凶之星，宜出谋献策，谒贵，不宜求财，求官，嫁娶，迁徙等",
            },
            bamenwanwuleixiang: {
                "开门": "开门：位居西北乾宫，五行属金。为大吉之门。开门属金，以天地肃杀之气，万物俱尽之时，何以谓之吉？ 开门之金，固是万物杀尽之时，却不知万物杀尽而有复生。开门属乾，乾中有亥，乾纳甲壬，金动水生，水生而生万物，故为资生万物之初，又为开门，所以吉也。古云：凡得开门，见官得理，做事欣然，觅人得见，大利上官，求财必遂，病人易妥，出行合伴，行人将遂，贸易开张，移徙欣然，谒贵利济，造作获安，百事悉吉，无不洞然。 总之，开门是大吉之门，可代表开始、最初、原始、开创、创始人、开业、领导、法官、飞机、门面、办公室、官运、公开等信息。",
                "休门": "休门：位居北方坎宫，为吉门。休门五行属水，无物不杀，霜雪之寒，纯阴之气，玄武之精，三光不照，鬼邪所居之宫，何以为吉？ 休门之水固为至阴之地，实系宝瓶宫，万物以水为生煞而发摺于外，以水为死气收敛归根而藏精于内。子者，乃一阳复始之初，草木值此而萌动，返本还源之门，所以吉也。古云：休门最好聚资财，牛马猪羊自送来。外口婚姻南方应，迁官职位坐京台。定进羽音人产业，居家安庆永无灾。 总之，休门是大吉之门。代表休养生息、休息冬眠、退休之人、婚姻、谒贵、酒、油、盐、酱、醋、江、河、湖、海、水产养殖、休闲、肾、血液、流动性强、一切流动性质的事物、一切液体",
                "生门": "生门：位居东北方艮宫，为吉门。生门艮卦，五行属土，少阳之方，何以为至吉？ 艮者寅位，天开于子，地辟于丑，人生于寅，天气至此而三阳俱足开泰，从此而万物皆生。阳回气转，天地好生之情而广及万物，仁道生焉，所以为至吉之门。古云：生门临着土星辰，人财资旺各称情。子丑年中三七月，牛羊鞍马进门庭。蚕谷丝绵皆丰足，朱紫儿郎任帝京。南方商音田土进，子孙禄位至公卿。 总之，生门是大吉、至吉之门。生门宜上官、修造、嫁娶、求财、牧养，皆大吉。生门代表生产、生育、养殖、房屋、房地产、利润、利息、经营求财、活物、新生事物、生长、生生不息、诞生、生日、生存、种植、建造、制造、制作",
                "伤门": "伤门：位居东方震宫，为凶门。伤门五行属木，正值春分之时，嫩甲发生，当以吉看，如何反以凶论？ 伤门之木，正值春分之气，精液自内而出，发阳于外，以致根本泄之太过，所谓以外华而内虚，而不能胜其旁，况二月中嫩甲不能当霜露之寒，因谓之伤，所以凶也。古云：伤门不可说，夫妇主灾遁。疮病行不得，折损血财牲。天灾人枉死，经年有病人。商音难得得，余事不堪陈。 总之，伤门是一个凶门。通常代表伤灾、疾病、跑动、响声、伤害、残疾、车辆、船只、打斗、战争、赌博等信息。凡伤门所临之宫，不利经商、出行、婚嫁，只宜索债、狩猎、捕捉盗贼、赌博取胜等。",
                "杜门": "杜门：位居东南方巽宫，小凶之门或中平。杜门阳木值夏季繁盛之时，本为旺气，何以凶论？ 杜门阳木，时值夏季，发生于外而津液已泄，阳气亢极，一阴将至，木性至此而力屈，欲收敛而不能收敛，欲生旺而力已尽，又不能不泄其力以实其子，而待阴伏藏其子于坚密之处，恐有伤于子，故谓之杜门小凶。古云：杜门原属木，犯着灾祸频。亥卯未年月，遭官入狱迍，生离死别事，六畜也多瘟。跌打见脓血，祸害及子孙。 总之，杜门是小凶之门。杜门为藏形之方，最宜躲灾避难、藏形隐匿，余事皆不利。杜门主要代表保密、技术、警察、公安、安全部门、不通、堵塞等。",
                "景门": "景门：位居南方离宫，为中平、小凶之门。景门属火，南方夏令正值离明之域，何以为凶也？ 景门夏令之气，万物壮旺将老之时，与死门坤宫相近，又为阳之盛气，天数至此时，将有杀物之情，虽主上明下亮之方，亦不全吉，惟利文书之事，因为次吉。古云：景门主血光，官符卖田庄。祸灾应多有，子孙受苦殃。外凶并恶死，六畜也见伤。生离并死别，用者须提防。 总之，景门为小凶之门，也有做平门来看的。凡景门用事，惟宜上书献策、奏对、选拔将士吉，余皆不利。景门主要代表文书、字据、合同、景致、风景、血光、光明、火电、计划、前景、行情、眼睛",
                "死门": "死门：位居西南坤宫，为大凶之门。死门属土，又系黑星分夜之方，秋冬之气，天地肃杀自此而始彰，门凶、星凶，当弃之而不用，不知此门宁可用之？ 死门之凶，天地令行大肆肃杀之威，草拂色变，木逢叶落，故为凶象。若得奇相助，面吊死刑捕捉畋猎之事，有得吉者，顺天之序而然也，不可弃。古云：死门之宿最为凶，人命逢之祸不轻，犯者年年财产退，更防孝服死人丁。 总之，死门是一个大凶之门，通常代表死亡之信息，亦用来代表刑戮、战争、伤疤、疼痛、痛苦、压抑、死气沉沉等信息。又可代表结束、最后、最终等信息。死门所临之处只宜吊丧、行刑等，余事皆不利。死门亦用来代表死者、尸体、锁头等信息。",
                "惊门": "惊门：属西方兑宫，为凶门。惊门属金，值八月秋令，万物俱老，天地大示肃杀之威，亦不可弃乎？ 惊门气肃，物数苍老，本无生气，固凶。但天地存好生之心，不欲杀尽而生蒜、麦，亦不得已而杀也。此门虽凶，若误词献诈，捕捉设疑、伏兵，皆吉，亦不可弃。古云：惊门主争讼，瘟疫死人丁，辰年并酉月，飞祸近门庭。惟宜讼事、捕捉、博戏吉，余皆凶。 总之，惊门为凶门，常用于代表口舌、官非、破损、争吵、惊恐、打官司等信息。惊门亦可代表律师、演说、翻译、主持人、赌博游戏、设疑伏兵、蛊惑人心、辩论演讲、吃饭、能说会道、说大话、恐吓等信息。"
            },
            allyucedata: {
                touziqiucai: "",
                maihuoqiucai: "",
                maichuhuoqiucai: "",
                jiedaicaiwu: "",
                fangdaiyuce: "如有此条信息，需职业预测师专业解答。（提示：以值符落宫为银行，或放款人,天乙为借款人，戊为本钱，生门为利息）",
                suozhaiyuce: "",
                yinyuanyuce: {
                    grilyear: 0,
                    boyyear: 0,
                    jieguo: "",
                    boytaohua: "无",
                    griltaohua: "无",
                }
            },
            wuxingshengke: {
                "水水": "比和", "水木": "被泄", "水火": "主克", "水土": "被克", "水金": "被生",
                "木水": "被生", "木木": "比和", "木火": "被泄", "木土": "主克", "木金": "被克",
                "火水": "被克", "火木": "被生", "火火": "比和", "火土": "被泄", "火金": "主克",
                "土水": "主克", "土木": "被克", "土火": "被生", "土土": "比和", "土金": "被泄",
                "金水": "被泄", "金木": "主克", "金火": "被克", "金土": "被生", "金金": "比和",
            }
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
                // 获取基础信息
                this.basicInformation()
                // 投资求财处理
                this.touziqiucai()
                // 买货求财
                this.maihuoqiucai()
                // 卖货求财
                this.maichuhuoqiucai()
                // 借贷财务
                this.jiedaicaiwu()
                // 放贷预测
                this.fangdaiyuce()
                // 索债预测
                this.suozhaiyuce()
                // 处理排盘入墓，击邢，门迫颜色
                this.changeColor()
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
        // 打开关闭保存界面
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
        },
        // 保存请求
        saveMaoShan() {
            // console.log('时间：', this.modelRef.year, this.modelRef.month, this.modelRef.day, this.modelRef.hour, this.modelRef.minute, this.modelRef.second)
            // console.log('标题：', this.paipanFormState.user.title)
            // console.log('解卦：', this.paipanFormState.user.introduction)
            if (this.$store.state.userData == '') {
                message.error('需要先登录账号！')
                return
            }
            let response = {
                uid: this.$store.state.userData.uid,
                time: this.modelRef.year + '-' + this.modelRef.month + '-' + this.modelRef.day + '-' + this.modelRef.hour + '-' + this.modelRef.minute + '-' + this.modelRef.second,
                title: this.paipanFormState.user.title,
                introduction: this.paipanFormState.user.introduction
            }
            Axios.post('/user/save_maoshanuser', qs.stringify(response)).then((response) => {
                message.success('保存成功')
                message.success('在右上角存稿管理查看，以后会更好的，先用着~')
            }).catch((error) => {
                // console.log('失败')
                message.error(error)
            })
        },
        // 处理天干克应
        basicInformation() {
            let tiandipan = ""
            let tiandipanlength2 = ""
            for (let i = 0; i < this.paipanjiugong.length; i++) {
                // 初始化字符串
                tiandipan = ""
                tiandipanlength2 = ""
                // 处理天盘有两个的情况
                if (this.paipanjiugong[i].tianpan.length == 2) {
                    tiandipanlength2 = this.paipanjiugong[i].tianpan[1] + this.paipanjiugong[i].dipan.charAt(0)
                    tiandipan = this.paipanjiugong[i].tianpan.charAt(0) + this.paipanjiugong[i].dipan.charAt(0)
                } else {
                    tiandipan = this.paipanjiugong[i].tianpan.charAt(0) + this.paipanjiugong[i].dipan.charAt(0)
                }
                // 给十干克应赋值
                for (const [key, value] of Object.entries(this.shigankeying)) {
                    if (tiandipan == key) {
                        this.paipanjiugong[i].shigankeying = key + ":" + value
                    }
                    if (tiandipanlength2 == key) {
                        this.paipanjiugong[i].shigankeying += key + ":" + value
                    }
                }

                // 处理九星万物类象
                for (const [key, value] of Object.entries(this.jiuxingwanwuleixiang)) {
                    if (key.indexOf(this.paipanjiugong[i].jiuxing) != -1) {
                        this.paipanjiugong[i].jiuxingwanwuleixiang += key + '：' + value
                    }
                }
                // 处理八门万物类象
                for (const [key, value] of Object.entries(this.bamenwanwuleixiang)) {
                    if (key.indexOf(this.paipanjiugong[i].bamen) != -1) {
                        this.paipanjiugong[i].bamenwanwuleixiang = value
                    }
                }
            }
        },
        touziqiucai() {
            let tianpanwu
            let shengmen
            // 拿到戊跟生门的数据
            for (let i = 0; i < this.paipanjiugong.length; i++) {
                if (this.paipanjiugong[i].tianpan.indexOf("戊") != -1) {
                    tianpanwu = this.paipanjiugong[i]
                }
                if (this.paipanjiugong[i].bamen.indexOf("生") != -1) {
                    shengmen = this.paipanjiugong[i]
                }
            }
            // 找到五行生克
            let nowWuXing = tianpanwu?.wuxing + "" + shengmen?.wuxing
            for (const [key, value] of Object.entries(this.wuxingshengke)) {
                if (nowWuXing == key) {
                    if (value == "比和") {
                        this.allyucedata.touziqiucai = "戊落宫与生门落宫，比和，可获中等利润"
                    } else if (value == "被泄") {
                        this.allyucedata.touziqiucai = "戊落宫生生门落宫，投资越大，利润越大"
                    } else if (value == "主克") {
                        this.allyucedata.touziqiucai = "戊落宫克生门落宫，为选错投资项目，切莫投资，若投资，必荡尽千金难回"
                    } else if (value == "被克") {
                        this.allyucedata.touziqiucai = "生门落宫克戊落宫，又乘凶格，凶星，凶神，必赔本"
                    } else if (value == "被生") {
                        this.allyucedata.touziqiucai = "生门落宫生戊落宫，又乘吉星，吉格，吉神，不空亡者，必获倍利"
                    }
                }
            }
        },
        maihuoqiucai() {
            let rizhu = this.rizhushizhu.rizhu.charAt(0)
            let shizhu = this.rizhushizhu.shizhu.charAt(0)
            let rizhuData
            let shizhuData
            for (let i = 0; i < this.paipanjiugong.length; i++) {
                if (this.paipanjiugong[i].tianpan.indexOf(rizhu) != -1) {
                    rizhuData = this.paipanjiugong[i]
                }
                if (this.paipanjiugong[i].tianpan.indexOf(shizhu) != -1) {
                    shizhuData = this.paipanjiugong[i]
                }
            }
            // 找到五行生克
            let nowWuXing = rizhuData?.wuxing + "" + shizhuData?.wuxing
            for (const [key, value] of Object.entries(this.wuxingshengke)) {
                if (nowWuXing == key) {
                    if (value == "比和") {
                        this.allyucedata.maihuoqiucai = "具体看投资求财"
                    } else if (value == "被泄") {
                        this.allyucedata.maihuoqiucai = "日干年命落宫，生时干用神落宫，为主动去买"
                    } else if (value == "主克") {
                        this.allyucedata.maihuoqiucai = "日干年命落宫，克时干用神落宫，也主能买成。"
                    } else if (value == "被克") {
                        this.allyucedata.maihuoqiucai = "时干用神落宫，来克日干年命落宫者，或乘墓绝，及空亡者，切莫买之，买必无利"
                    } else if (value == "被生") {
                        this.allyucedata.maihuoqiucai = "时干用神落宫，来生日干或年命落宫者，好货坏货，都能带来利润,为送货上门"
                    }
                }
            }
        },
        maichuhuoqiucai() {
            let rizhu = this.rizhushizhu.rizhu.charAt(0)
            let shizhu = this.rizhushizhu.shizhu.charAt(0)
            let jiaziwuData
            let shengmenData
            let rizhuData
            let shizhuData
            for (let i = 0; i < this.paipanjiugong.length; i++) {
                if (this.paipanjiugong[i].tianpan.indexOf(rizhu) != -1) {
                    rizhuData = this.paipanjiugong[i]
                }
                if (this.paipanjiugong[i].tianpan.indexOf(shizhu) != -1) {
                    shizhuData = this.paipanjiugong[i]
                }
                if (this.paipanjiugong[i].tianpan.indexOf("戊") != -1) {
                    jiaziwuData = this.paipanjiugong[i]
                }
                if (this.paipanjiugong[i].tianpan.indexOf("生") != -1) {
                    shengmenData = this.paipanjiugong[i]
                }
            }
            // 找到五行生克
            let nowWuXing = rizhuData?.wuxing + "" + shizhuData?.wuxing
            for (const [key, value] of Object.entries(this.wuxingshengke)) {
                if (nowWuXing == key) {
                    if (value == "比和") {
                        this.allyucedata.maichuhuoqiucai = "日干时干比和，卖主跟货物在一块，商量货物问题（大部分情况是不卖）"
                    } else if (value == "被泄") {
                        this.allyucedata.maichuhuoqiucai = "1.日干年命落宫生时干用神落宫，为人恋或不肯卖"
                    } else if (value == "主克") {
                        this.allyucedata.maichuhuoqiucai = "1.日干年命落宫，克时干用神落宫，随想快速将货出手，但成交慢，暂时卖不出去"
                    } else if (value == "被克") {
                        this.allyucedata.maichuhuoqiucai = "1.时干用神落宫，克日干年命落宫，货物出手必速"
                    } else if (value == "被生") {
                        this.allyucedata.maichuhuoqiucai = "1.时干用神落宫，生日干年命落宫，为货恋人，卖不出去"
                    }
                }
                if (shizhuData?.wuxing + "" + jiaziwuData?.wuxing == key) {
                    if (value == "被泄") {
                        for (const [i, v] of Object.entries(this.wuxingshengke)) {
                            if (shizhuData?.wuxing + "" + shengmenData?.wuxing == i) {
                                if (v == "主克") {
                                    this.allyucedata.maichuhuoqiucai += "2.时干用神落宫，生甲子戊落宫，但克生门落宫，为本钱可回，但无利润"
                                }
                                if (v == "被泄") {
                                    this.allyucedata.maichuhuoqiucai += "2.时干用神落宫，生甲子戊落宫，又来生生门落宫，为连本带利具收获"
                                }
                            }
                        }
                    }
                    if (value == "主克") {
                        for (const [i, v] of Object.entries(this.wuxingshengke)) {
                            if (shizhuData?.wuxing + "" + shengmenData?.wuxing == i) {
                                if (v == "被泄") {
                                    this.allyucedata.maichuhuoqiucai += "2.时干用神落宫，生生门落宫，但克甲子戊落宫，为暂时本金回不来，但长久之后，必本利具收"
                                }
                                if (v == "主克") {
                                    this.allyucedata.maichuhuoqiucai += "2.时干用神落宫，克甲子戊落宫，又克生门落宫，为赔了夫人又折兵，切莫投资买卖货物"
                                }
                            }
                        }
                    }
                }
            }
        },
        jiedaicaiwu() {
            // 获取值符
            let getzhifu: string, tianyi: string | any[], nowtianyi: string
            for (let i = 0; i < this.paipanjiugong.length; i++) {
                if (this.paipanjiugong[i].bashen == "值符") {
                    getzhifu = this.paipanjiugong[i].wuxing
                    tianyi = this.paipanjiugong[i].bengongjiuxing
                    tianyi = tianyi.length > 3 ? tianyi[1] + "" + tianyi[4] : tianyi[1]
                }
            }
            this.paipanjiugong.map((val, index, arr) => {
                if (tianyi == val.jiuxing) {
                    nowtianyi = val.wuxing
                }
            })
            Object.keys(this.wuxingshengke).forEach(key => {
                if (key == getzhifu + nowtianyi) {
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄" || this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被克") {
                        this.allyucedata.jiedaicaiwu = "借贷必成"
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克" || this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被生") {
                        this.allyucedata.jiedaicaiwu = "借贷不成"
                    }
                }
            })
        },
        fangdaiyuce() {
            // 获取值符,天乙，戊
            let getzhifu: string, tianyi: string | any[], nowtianyi: string, jiaziwu: string, shengmen: string
            for (let i = 0; i < this.paipanjiugong.length; i++) {
                if (this.paipanjiugong[i].bashen == "值符") {
                    getzhifu = this.paipanjiugong[i].wuxing
                    tianyi = this.paipanjiugong[i].bengongjiuxing
                    tianyi = tianyi.length > 3 ? tianyi[1] + "" + tianyi[4] : tianyi[1]
                }
                if (this.paipanjiugong[i].tianpan == "戊") {
                    jiaziwu = this.paipanjiugong[i].wuxing
                }
                if (this.paipanjiugong[i].bamen == "生") {
                    jiaziwu = this.paipanjiugong[i].wuxing
                }
            }
            this.paipanjiugong.map((val, index, arr) => {
                if (tianyi == val.jiuxing) {
                    nowtianyi = val.wuxing
                }
            })
            Object.keys(this.wuxingshengke).forEach(key => {
                if (key == shengmen + getzhifu) {
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄") {
                        Object.keys(this.wuxingshengke).forEach(k => {
                            if (k == tianyi + getzhifu) {
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "被泄") {
                                    this.allyucedata.fangdaiyuce = "生门天乙宫，同来生值符宫者，为本息全回"
                                }
                            }
                            if (k == tianyi + getzhifu) {
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "主克") {
                                    this.allyucedata.fangdaiyuce = "生门宫生值符宫，天乙宫克值符宫者，为借贷人先归还利息，而不还本金"
                                }
                            }
                        })
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                        Object.keys(this.wuxingshengke).forEach(k => {
                            if (k == tianyi + getzhifu) {
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "主克") {
                                    this.allyucedata.fangdaiyuce = "生门天乙宫，同来克值符宫者，为本息具难回"
                                }
                            }
                            if (k == tianyi + getzhifu) {
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "被泄") {
                                    this.allyucedata.fangdaiyuce = "生门宫克值符宫，天乙宫生值符宫者，为本钱可回，但利息难归"
                                }
                            }

                        })
                    }

                }
                if (key == tianyi + getzhifu) {
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄") {
                        this.allyucedata.fangdaiyuce = "(注：如果天乙宫，休囚，为借款人，有心想还，但目下无力偿还)"
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                        this.allyucedata.fangdaiyuce = "(注：如果天乙宫旺相，乘吉门，吉格，吉星，吉神，为借款人有钱但有意不还)"
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被克") {
                        Object.keys(this.wuxingshengke).forEach(k => {
                            if (k == shengmen + getzhifu) {
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "被克") {
                                    this.allyucedata.fangdaiyuce = "值符宫克天乙宫，又克生门宫者，为本金，利息，具能讨回"
                                }
                            }
                            if (k == shengmen + getzhifu) {
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "主克") {
                                    this.allyucedata.fangdaiyuce = "生门宫，克值符宫，值符宫克天乙宫者，为借出之本金可回，但利息难归"
                                }
                            }
                        })
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被生") {
                        Object.keys(this.wuxingshengke).forEach(k => {
                            if (k == shengmen + getzhifu) {
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "被生") {
                                    this.allyucedata.fangdaiyuce = "值符宫，生天乙宫，又生生门宫者，本息具难回"
                                }
                            }
                        })
                    }
                }
            })
        },
        suozhaiyuce() {
            let getzhifu: string, tianyi: string | any[], nowtianyi: string, shangmen: string
            for (let i = 0; i < this.paipanjiugong.length; i++) {
                if (this.paipanjiugong[i].bashen == "值符") {
                    getzhifu = this.paipanjiugong[i].wuxing
                    tianyi = this.paipanjiugong[i].bengongjiuxing
                    tianyi = tianyi.length > 3 ? tianyi[1] + "" + tianyi[4] : tianyi[1]
                }
                if (this.paipanjiugong[i].bamen == "伤") {
                    shangmen = this.paipanjiugong[i].wuxing
                }
            }
            this.paipanjiugong.map((val, index, arr) => {
                if (tianyi == val.jiuxing) {
                    nowtianyi = val.wuxing
                }
            })
            Object.keys(this.wuxingshengke).forEach(key => {
                if (key == shangmen + nowtianyi) {
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                        this.allyucedata.suozhaiyuce = "伤门宫克天乙宫，讨债人实心实意，卖力气去讨债"
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被克") {
                        this.allyucedata.suozhaiyuce = "天乙宫，克伤门宫，彼此争斗有口角，欠债人不想还"
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "比和") {
                        Object.keys(this.wuxingshengke).forEach(k => {
                            if (k == shangmen + getzhifu) {
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "被泄") {
                                    this.allyucedata.suozhaiyuce = "伤门，天乙比和，同生值符宫者，本息全回"
                                }
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "主克") {
                                    this.allyucedata.suozhaiyuce = "伤门与天乙落宫，同来克值符宫，本息具难以追回"
                                }
                            }
                        })
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                        Object.keys(this.wuxingshengke).forEach(k => {
                            if (k == shangmen + getzhifu) {
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "被泄") {
                                    this.allyucedata.suozhaiyuce = "伤门宫生值符宫，克天乙宫，主讨债有成"
                                }
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "主克") {
                                    this.allyucedata.suozhaiyuce = "(11)伤门宫克天乙宫，同时又来克值符落宫者，为讨债人，虽能讨回债务，但向放款人一方索取好处费"
                                }
                            }
                        })
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄") {
                        Object.keys(this.wuxingshengke).forEach(k => {
                            if (k == shangmen + getzhifu) {
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "主克") {
                                    this.allyucedata.suozhaiyuce = "伤门宫生天乙宫，克值符宫，为讨债人，吃里爬外，追款不随"
                                }
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "被泄") {
                                    this.allyucedata.suozhaiyuce = "伤门宫生值符宫，同时又生天乙宫者，为讨债人，两边做好人，谁也不得罪。但讨债无功"
                                }
                            }
                        })
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被克") {
                        Object.keys(this.wuxingshengke).forEach(k => {
                            if (k == shangmen + getzhifu) {
                                if (this.wuxingshengke[k as keyof typeof this.wuxingshengke] == "被克") {
                                    this.allyucedata.suozhaiyuce = "伤门宫，被值符宫克，同时又被天乙宫所克，为讨债人，两边受气，能力有限，讨债不遂"
                                }
                            }
                        })
                    }
                }
            })
        },
        yinyuanyuce() {
            this.allyucedata.yinyuanyuce.boyyear = this.boyyear?.year() == undefined ? 0 : this.boyyear?.year()
            this.allyucedata.yinyuanyuce.grilyear = this.grilyear?.year() == undefined ? 0 : this.grilyear?.year()
            if (this.allyucedata.yinyuanyuce.boyyear == 0 || this.allyucedata.yinyuanyuce.grilyear == 0) {
                message.error('请把双方的年份都填上去哦');
                return
            }
            // 获取男女的天干
            let boyyinyuandate = Lunar.fromYmdHms(this.allyucedata.yinyuanyuce.boyyear, 10, 1, 12, 0, 0)
            let boyd = boyyinyuandate.getEightChar()
            let boytiangan = boyd.getYear()[0]
            let grilyinyuandate = Lunar.fromYmdHms(this.allyucedata.yinyuanyuce.grilyear, 10, 1, 12, 0, 0)
            let grild = grilyinyuandate.getEightChar()
            let griltiangan = grild.getYear()[0]

            // 计算
            let tpyi: string, tpgeng: string, boy: string, gril: string, liuhe: string, dingqi: string, bingqi: string, dipandingqi: string, dipanbingqi: string // 五行
            let tpyikw: string, tpgengkw: string, boykw: string, grilkw: string, dingqikw: string, bingqikw: string // 空亡
            let boydipanding: string
            this.paipanjiugong.map((val, index, array) => {
                if (val.dipan == "丙") {
                    dipanbingqi = val.wuxing
                }
                if (val.dipan == "丁") {
                    dipandingqi = val.wuxing
                }
                if (val.tianpan == "丁") {
                    dingqi = val.wuxing
                    dingqikw = val.kongwang
                }
                if (val.tianpan == "丙") {
                    bingqi = val.wuxing
                    bingqikw = val.kongwang
                }
                if (val.tianpan == "乙") {
                    tpyi = val.wuxing
                    tpyikw = val.kongwang
                }
                if (val.tianpan == "庚") {
                    tpgeng = val.wuxing
                    tpgengkw = val.kongwang
                }
                if (val.bashen == "六合") {
                    liuhe = val.wuxing
                }
                if (val.tianpan == boytiangan) {
                    boy = val.wuxing
                    boykw = val.kongwang
                    boydipanding = val.dipan == "丁" ? "1" : "0"
                }
                if (val.tianpan == griltiangan) {
                    gril = val.wuxing
                    grilkw = val.kongwang
                }
            })

            Object.keys(this.wuxingshengke).forEach(key => {
                // 判断1
                if (tpgeng + tpyi == key) {
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄") {
                        if (tpyikw == "1") {
                            this.allyucedata.yinyuanyuce.jieguo = "(判断1)男爱女，但女无意"
                        } else {
                            this.allyucedata.yinyuanyuce.jieguo = "(判断1)男爱女,成婚几率大"
                        }
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被生") {
                        if (tpgengkw == "1") {
                            this.allyucedata.yinyuanyuce.jieguo = "(判断1)女落花有意，但男流水无情"
                        } else {
                            this.allyucedata.yinyuanyuce.jieguo = "(判断1)女爱男,成婚几率大"
                        }
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                        this.allyucedata.yinyuanyuce.jieguo = "(判断1)男嫌女，不娶"
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被克") {
                        this.allyucedata.yinyuanyuce.jieguo = "(判断1)女嫌男，不嫁"
                    }
                }
                if (liuhe + tpgeng == key) {
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄") {
                        this.allyucedata.yinyuanyuce.jieguo += "(判断1)(如果有媒，偏向男方)"
                    }
                }
                if (liuhe + tpyi == key) {
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄") {
                        this.allyucedata.yinyuanyuce.jieguo += "(判断1)(如果有媒，偏向女方)"
                    }
                }
                // 判断2
                if (boy + gril == key) {
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄") {
                        if (grilkw == "1") {
                            this.allyucedata.yinyuanyuce.jieguo += "(判断2)男爱女，但女无意，最终易分开"
                        } else {
                            this.allyucedata.yinyuanyuce.jieguo += "(判断2)男爱女,男追女，最终易成婚"
                        }
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被生") {
                        if (boykw == "1") {
                            this.allyucedata.yinyuanyuce.jieguo += "(判断2)女落花有意，但男流水无情，最终易分开"
                        } else {
                            this.allyucedata.yinyuanyuce.jieguo += "(判断2)女爱男,女追男，最终易成婚"
                        }
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                        this.allyucedata.yinyuanyuce.jieguo += "(判断2)男嫌女，不娶，最终易分开"
                    }
                    if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被克") {
                        this.allyucedata.yinyuanyuce.jieguo += "(判断2)女嫌男，不嫁，最终易分开"
                    }
                }

                // // 男桃花
                // if (boy + tpyi == key) {
                //     if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄" && dingqikw == "0") {
                //         Object.keys(this.wuxingshengke).forEach(key => {
                //             if (boy + tpyi == key) {
                //                 if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                //                     this.allyucedata.yinyuanyuce.boytaohua = "弃妻爱妾"
                //                 }
                //             }
                //         })
                //     }
                //     if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被生") {
                //         Object.keys(this.wuxingshengke).forEach(key => {
                //             if (boy + dingqi == key) {
                //                 if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被生" && dingqikw == "0") {
                //                     this.allyucedata.yinyuanyuce.boytaohua = "妻妾同爱一个人之象"
                //                 }
                //             }
                //         })
                //     }
                //     if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                //         Object.keys(this.wuxingshengke).forEach(key => {
                //             if (boy + dingqi == key) {
                //                 if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克" && dingqikw == "0") {
                //                     this.allyucedata.yinyuanyuce.boytaohua = "离妻休妾，另选高明"
                //                 }
                //             }
                //         })
                //     }
                // }
                // if (boy + dipandingqi == key) {
                //     if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "比和") {
                //         Object.keys(this.wuxingshengke).forEach(key => {
                //             if (boy + dingqi == key) {
                //                 if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                //                     Object.keys(this.wuxingshengke).forEach(key => {
                //                         if (boy + tpyi == key) {
                //                             if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄") {
                //                                 this.allyucedata.yinyuanyuce.boytaohua = "弃暗投明，与原配破镜重圆"
                //                             }
                //                         }
                //                     })
                //                 }
                //             }
                //         })
                //     }
                // }
                // if (boydipanding == "1") {
                //     if (boy + tpyi == key) {
                //         if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄") {
                //             Object.keys(this.wuxingshengke).forEach(key => {
                //                 if (boy + dingqi == key) {
                //                     if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被克") {
                //                         this.allyucedata.yinyuanyuce.boytaohua = "被第三者女人所挟持，虽内心欲回归本家，但迫于第三者女人的压力，而无法回归本家"
                //                     }
                //                 }
                //             })
                //         }
                //     }
                // }
                // // 女桃花
                // if (gril + tpgeng == key) {
                //     if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄" && bingqikw == "0") {
                //         Object.keys(this.wuxingshengke).forEach(key => {
                //             if (gril + tpgeng == key) {
                //                 if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                //                     this.allyucedata.yinyuanyuce.griltaohua = "弃老公爱鸭子"
                //                 }
                //             }
                //         })
                //     }
                //     if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被生") {
                //         Object.keys(this.wuxingshengke).forEach(key => {
                //             if (gril + bingqi == key) {
                //                 if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被生" && bingqikw == "0") {
                //                     this.allyucedata.yinyuanyuce.griltaohua = "老公，鸭子同时爱一个人之象"
                //                 }
                //             }
                //         })
                //     }
                //     if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                //         Object.keys(this.wuxingshengke).forEach(key => {
                //             if (gril + bingqi == key) {
                //                 if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克" && bingqikw == "0") {
                //                     this.allyucedata.yinyuanyuce.griltaohua = "离老公休鸭子，另选高明"
                //                 }
                //             }
                //         })
                //     }
                // }
                // if (gril + dipanbingqi == key) {
                //     if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "比和") {
                //         Object.keys(this.wuxingshengke).forEach(key => {
                //             if (gril + bingqi == key) {
                //                 if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "主克") {
                //                     Object.keys(this.wuxingshengke).forEach(key => {
                //                         if (gril + tpgeng == key) {
                //                             if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄") {
                //                                 this.allyucedata.yinyuanyuce.griltaohua = "弃暗投明，与原配破镜重圆"
                //                             }
                //                         }
                //                     })
                //                 }
                //             }
                //         })
                //     }
                // }
                // if (boydipanding == "1") {
                //     if (gril + tpgeng == key) {
                //         if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被泄") {
                //             Object.keys(this.wuxingshengke).forEach(key => {
                //                 if (gril + bingqi == key) {
                //                     if (this.wuxingshengke[key as keyof typeof this.wuxingshengke] == "被克") {
                //                         this.allyucedata.yinyuanyuce.griltaohua = "被第三者男人所挟持，虽内心欲回归本家，但迫于第三者女人的压力，而无法回归本家"
                //                     }
                //                 }
                //             })
                //         }
                //     }
                // }
            })
            console.log(this.allyucedata.yinyuanyuce)

        },
        changeColor() {
            this.paipanjiugong.map((val, index, arr) => {
                if (val.bengongjiuxing == "天辅星") {
                    if (val.tianpan.length == 2) {
                        if (val.tianpan[0] == "辛" || val.tianpan[0] == "壬") {
                            val.istianpanrumu = "1"
                        }
                        if (val.tianpan[0] == "癸" || val.tianpan[0] == "壬") {
                            val.istianpanjixing = "1"
                        }
                        if (val.bamen == "惊" || val.bamen == "开") {
                            val.ismenpo = "1"
                        }
                        if (val.tianpan[1] == "辛" || val.tianpan[1] == "壬") {
                            val.istianpanrumu = "2"
                        }
                        if (val.tianpan[1] == "癸" || val.tianpan[1] == "壬") {
                            val.istianpanjixing = "2"
                        }
                    } else {
                        if (val.tianpan == "辛" || val.tianpan == "壬") {
                            val.istianpanrumu = "1"
                        }
                        if (val.tianpan == "癸" || val.tianpan == "壬") {
                            val.istianpanjixing = "1"
                        }
                        if (val.bamen == "惊" || val.bamen == "开") {
                            val.ismenpo = "1"
                        }

                    }
                    if (val.dipan.length == 2) {
                        if (val.dipan[0] == "辛" || val.dipan[0] == "壬") {
                            val.isdipanrumu = "1"
                        }
                        if (val.dipan[0] == "癸" || val.dipan[0] == "壬") {
                            val.isdipanjixing = "1"
                        }
                        if (val.dipan[1] == "辛" || val.dipan[1] == "壬") {
                            val.isdipanrumu = "2"
                        }
                        if (val.dipan[1] == "癸" || val.dipan[1] == "壬") {
                            val.isdipanjixing = "2"
                        }
                    } else {
                        if (val.dipan == "辛" || val.dipan == "壬") {
                            val.isdipanrumu = "1"
                        }
                        if (val.dipan == "癸" || val.dipan == "壬") {
                            val.isdipanjixing = "1"
                        }
                    }
                }
                if (val.bengongjiuxing == "天英星") {
                    if (val.tianpan.length == 2) {
                        if (val.tianpan[0] == "辛") {
                            val.istianpanjixing = "1"
                        }
                        if (val.bamen == "休") {
                            val.ismenpo = "1"
                        }
                        if (val.tianpan[1] == "辛") {
                            val.istianpanjixing = "2"
                        }
                    } else {
                        if (val.tianpan == "辛") {
                            val.istianpanjixing = "1"
                        }
                        if (val.bamen == "休") {
                            val.ismenpo = "1"
                        }

                    }
                    if (val.dipan.length == 2) {
                        if (val.dipan[0] == "辛") {
                            val.isdipanjixing = "1"
                        }
                        if (val.dipan[1] == "辛") {
                            val.isdipanjixing = "2"
                        }
                    } else {
                        if (val.dipan == "辛") {
                            val.isdipanjixing = "1"
                        }
                    }
                }
                if (val.bengongjiuxing == "天芮星") {
                    let xunshougan = this.paiPanDateRef.xunshou[2]
                    if (val.tianpan.length == 2) {
                        if (val.tianpan[0] == "癸" || val.tianpan[0] == "乙" || val.tianpan[0] == xunshougan) {
                            val.istianpanrumu = "1"
                        }
                        if (val.tianpan[0] == "己") {
                            val.istianpanjixing = "1"
                        }
                        if (val.bamen == "伤" || val.bamen == "杜") {
                            val.ismenpo = "1"
                        }
                        if (val.tianpan[1] == "癸" || val.tianpan[1] == "乙" || val.tianpan[1] == xunshougan) {
                            val.istianpanrumu = "2"
                        }
                        if (val.tianpan[1] == "己") {
                            val.istianpanjixing = "2"
                        }
                    } else {
                        if (val.tianpan == "癸" || val.tianpan == "乙" || val.tianpan == xunshougan) {
                            val.istianpanrumu = "1"
                        }
                        if (val.tianpan == "己") {
                            val.istianpanjixing = "1"
                        }
                        if (val.bamen == "伤" || val.bamen == "杜") {
                            val.ismenpo = "1"
                        }

                    }
                    if (val.dipan.length == 2) {
                        if (val.dipan[0] == "癸" || val.dipan[0] == "乙" || val.dipan[0] == xunshougan) {
                            val.isdipanrumu = "1"
                        }
                        if (val.dipan[0] == "己") {
                            val.isdipanjixing = "1"
                        }
                        if (val.dipan[1] == "癸" || val.dipan[1] == "乙" || val.dipan[1] == xunshougan) {
                            val.isdipanrumu = "2"
                        }
                        if (val.dipan[1] == "己") {
                            val.isdipanjixing = "2"
                        }
                    } else {
                        if (val.dipan == "癸" || val.dipan == "乙" || val.dipan == xunshougan) {
                            val.isdipanrumu = "1"
                        }
                        if (val.dipan == "己") {
                            val.isdipanjixing = "1"
                        }
                    }
                }
                if (val.bengongjiuxing == "天冲星") {
                    if (val.tianpan.length == 2) {
                        if (val.tianpan[0] == "戊") {
                            val.istianpanjixing = "1"
                        }
                        if (val.bamen == "惊" || val.bamen == "开") {
                            val.ismenpo = "1"
                        }
                        if (val.tianpan[1] == "戊") {
                            val.istianpanjixing = "2"
                        }
                    } else {
                        if (val.tianpan == "戊") {
                            val.istianpanjixing = "1"
                        }
                        if (val.bamen == "惊" || val.bamen == "开") {
                            val.ismenpo = "1"
                        }

                    }
                    if (val.dipan.length == 2) {
                        if (val.dipan[0] == "戊") {
                            val.isdipanjixing = "1"
                        }
                        if (val.dipan[1] == "癸" || val.dipan[1] == "壬") {
                            val.isdipanjixing = "2"
                        }
                    } else {
                        if (val.dipan == "戊") {
                            val.isdipanjixing = "1"
                        }
                    }
                }
                if (val.bengongjiuxing == "天柱星") {
                    if (val.bamen == "景") {
                        val.ismenpo = "1"
                    }
                }
                if (val.bengongjiuxing == "天任星天禽星") {
                    if (val.tianpan.length == 2) {
                        if (val.tianpan[0] == "丁" || val.tianpan[0] == "己" || val.tianpan[0] == "庚") {
                            val.istianpanrumu = "1"
                        }
                        if (val.tianpan[0] == "庚") {
                            val.istianpanjixing = "1"
                        }
                        if (val.bamen == "伤" || val.bamen == "杜") {
                            val.ismenpo = "1"
                        }
                        if (val.tianpan[1] == "丁" || val.tianpan[1] == "己" || val.tianpan[1] == "庚") {
                            val.istianpanrumu = "2"
                        }
                        if (val.tianpan[1] == "庚") {
                            val.istianpanjixing = "2"
                        }
                    } else {
                        if (val.tianpan == "丁" || val.tianpan == "己" || val.tianpan == "庚") {
                            val.istianpanrumu = "1"
                        }
                        if (val.tianpan == "庚") {
                            val.istianpanjixing = "1"
                        }
                        if (val.bamen == "伤" || val.bamen == "杜") {
                            val.ismenpo = "1"
                        }

                    }
                    if (val.dipan.length == 2) {
                        if (val.dipan[0] == "丁" || val.dipan[0] == "己" || val.dipan[0] == "庚") {
                            val.isdipanrumu = "1"
                        }
                        if (val.dipan[0] == "庚") {
                            val.isdipanjixing = "1"
                        }
                        if (val.dipan[1] == "丁" || val.dipan[1] == "己" || val.dipan[1] == "庚") {
                            val.isdipanrumu = "1"
                        }
                        if (val.dipan[1] == "庚") {
                            val.isdipanjixing = "1"
                        }
                    } else {
                        if (val.dipan == "丁" || val.dipan == "己" || val.dipan == "庚") {
                            val.isdipanrumu = "1"
                        }
                        if (val.dipan == "庚") {
                            val.isdipanjixing = "1"
                        }
                    }
                }
                if (val.bengongjiuxing == "天蓬星") {
                    if (val.bamen == "生" || val.bamen == "死") {
                        val.ismenpo = "1"
                    }
                }
                if (val.bengongjiuxing == "天心星") {
                    if (val.tianpan.length == 2) {
                        if (val.tianpan[0] == "乙" || val.tianpan[0] == "丙" || val.tianpan[0] == "戊") {
                            val.istianpanrumu = "1"
                        }
                        if (val.bamen == "景") {
                            val.ismenpo = "1"
                        }
                        if (val.tianpan[1] == "乙" || val.tianpan[1] == "丙" || val.tianpan[1] == "戊") {
                            val.istianpanrumu = "2"
                        }
                    } else {
                        if (val.tianpan == "乙" || val.tianpan == "丙" || val.tianpan == "戊") {
                            val.istianpanrumu = "1"
                        }
                        if (val.bamen == "景") {
                            val.ismenpo = "1"
                        }
                        if (val.tianpan == "乙" || val.tianpan == "丙" || val.tianpan == "戊") {
                            val.istianpanrumu = "2"
                        }

                    }
                    if (val.dipan.length == 2) {
                        if (val.dipan[0] == "乙" || val.dipan[0] == "丙" || val.dipan[0] == "戊") {
                            val.isdipanrumu = "1"
                        }
                        if (val.bamen == "景") {
                            val.ismenpo = "1"
                        }
                        if (val.dipan[1] == "乙" || val.dipan[1] == "丙" || val.dipan[1] == "戊") {
                            val.isdipanrumu = "2"
                        }
                    } else {
                        if (val.dipan == "乙" || val.dipan == "丙" || val.dipan == "戊") {
                            val.isdipanrumu = "1"
                        }
                        if (val.dipan == "乙" || val.dipan == "丙" || val.dipan == "戊") {
                            val.isdipanrumu = "2"
                        }
                    }
                }
            })
        }
    },
})
</script>
<style lang="stylus" scoped>
@import "~@/until/mixin.styl";
.maoshan
    min-height 500px
    bg_color(background_color_main_header)
    .home-row
        .maoshan-jiugong-form
            margin 0 0 10px 0
            
            .home-row-form
                .home-col-form
                    margin 0 0 10px 0
                    .home-form-box
                        bg_color(bgColor_channel_a)
                        border-radius 6px
                        padding 5px
                        text-align center
                        .create-paipan-bc-btn
                            text-align right
                            u
                                padding-right 20px
                                cursor pointer
                    .create-paipan-save
                        bg_color(bgColor_channel_a)
                        border-radius 6px
                        padding 5px
                        margin-top 10px
                    .home-xinxi
                        bg_color(bgColor_channel_a)
                        border-radius 6px
                        padding 5px
                        margin-top 10px
                        text-align center
                        font_color(font_color_main_header_channel)
                        .create-paipan
                            background-color #f1f1f1
                            border-radius 6px
                        .ant-btn:hover
                            bg_color(bgColor_channel_a)
                            font_color(font_color_main_header_channel)
                            border-color white
                        .ant-btn:focus
                            font_color(font_color_main_header_channel)
                            border-color white
                        .home-form
                            display flex


        .maoshan-jiugong
            bg_color(bgColor_channel_a)
            border-radius 6px
            padding 5px
            margin 0 0 10px 0px
            text-align left
            font_color(font_color_main_header_channel)
            h3 
                font_color(font_color_main_header_channel)
            h5
                font_color(font_color_main_header_channel)
            .maoshan-jichuxinxi
                text-align left
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
                    bg_color(bgColor_channel_a)
                    overflow hidden
                    // text-align left
                    p
                        display inline-block
                        vertical-align middle

</style>