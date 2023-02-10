<template>
    <div class="article-main-right">
        <div class="article-main-right-rili">
            <div :style="{ width: '100%', border: '1px solid #d9d9d9', borderRadius: '4px' }">
                <a-calendar v-model:value="value" :fullscreen="false" @select="onselect" />
            </div>
            <div class="article-main-right-xiangqing">
                阳历：<time>{{ nowTime.y + '年' + nowTime.m + '月' + nowTime.d + '日' + nowTime.w }}</time> <br>
                阴历：<time>{{ yinli }}</time>
                <hr>
                <p><span title="每日宜忌指当天适合做什么，不适合做什么。">今日宜：</span> {{ meiriyiji.yi }}</p>
                <hr>
                <p><span title="每日宜忌指当天适合做什么，不适合做什么。">今日忌：</span> {{ meiriyiji.ji }}</p>
                <hr>
                <p><span
                        title="(注：择日没有那么简单，最好请专业预测师择日)十二天神择日法，又名大黄道择日法，有十二位星神轮流值日，其名称及排列顺序依次为：青龙、明堂、天刑；朱雀、金贵、天德；白虎、玉堂、天牢；玄武、司命、勾陈。逢青龙、明堂、金贵、天德、玉堂、司命六神值日为黄道日；逢天刑、朱雀、白虎、天牢、玄武、勾陈六神值日为黑道日。">十二天神择日法：</span>
                    {{ shiertianshen }}</p>
                <hr>
                <p><span
                        title="十二值星，也称建除十二神，中国民俗信仰中的十二位神明，分别为建、除、满、平、定、执、破、危、成、收、开、闭。这十二位神明每日轮值，周而复始，负责保护凡间人民的平安。在传统农民历中，二十八宿下，通常会依序在每日标注上今日轮值神名，作为择日吉凶的参考，称为十二建除日。">建除十二值星：</span>
                    {{ jianchushierzhixing }}</p>
                <hr>
                <p><span title="彭祖百忌指的是在天干地支记日中的某日或当日里的某时不要做某事否则会发生某事。彭祖，道家先驱，是中国远古道家的重要人物，他以善养生而长寿。">彭祖百忌：</span> {{
                    pengzubaiji
                }}</p>
                <hr>
                <p>节日：{{ festivals.changyong == "" ? "" : festivals.changyong + "," }}{{ festivals.chuantong }}</p>
                <hr>
                <p><span
                        title="禄神为四柱神煞之一，是民间信仰中的主司官禄之神。甲禄在寅，乙禄在卯，丙戊禄在巳，丁己禄在午，庚禄在申，辛禄在酉，壬禄在亥，癸禄在子。禄在年支叫岁禄，禄在月支叫建禄，禄在日支叫专禄（也叫日禄），禄在时支叫归禄。">禄神：</span>
                    {{ lushen }}</p>
                <hr>
                <p><span title="十二生肖，又叫属相，是中国与十二地支相配以人出生年份的十二种动物">生肖：</span> {{ shengxiao }}</p>
                <hr>
                <p>节气：{{ jieqi }}</p>
                <hr>
                <p><span
                        title="七十二候，是我国古代用来指导农事活动的历法补充。它是根据黄河流域的地理、气候、和自然界的一些景象编写而成，以五日为候，三候为气，六气为时，四时为岁，一年“二十四节气”共七十二候。各候均以一个物候现象相应，称“候应”。其中植物候应有植物的幼芽萌动、开花、结实等；动物候应有动物的始振、始鸣、交配、迁徙等；非生物候应有始冻、解冻、雷始发声等。七十二候“候应”的依次变化，反映了一年中物候和气候变化的一般情况。">物候：</span>
                    {{ wuhou }}</p>
                <hr>
                <p><span
                        title="六曜，又称孔明六曜星或小六壬，是中国传统历法中的一种附注。它包括先胜、友引、 先负、佛灭、大安和赤口六个词汇，分别表示当天宜行何事，用以作为判定每日凶吉的参考。">六曜：</span>
                    {{ liuyao }}</p>
                <hr>
                <p><span title="二十八宿，是黄道附近的二十八组星象总称。上古时代人们根据日月星辰的运行轨迹和位置，把黄道附近的星象划分为二十八组，俗称二十八宿。">二十八宿：</span> {{
                    ershibaxiu
                }}</p>
                <hr>
                <p><span
                        title="七曜，又称七政、七纬、七耀等。“七曜日”分别代表一周七天的叫法最早出现于两河流域的古巴比伦文明。公元前七百年左右，古巴比伦出现了一个星期分为七天的制度，四星期合为一个月。在日本、韩国和朝鲜，一星期中的各天并不是按数字顺序，而是有着特定的名字，是以“七曜”来分别命名的。土曜日是星期六，日曜日是星期天，月曜日是星期一，火曜日是星期二，水曜日是星期三，木曜日是星期四，金曜日是星期五。在中国，起初也是以七曜命名一星期中的各天，将日（太阳）、月（太阴）、金（太白）太白金星是不是很耳熟？、木（岁星）、水（辰星）、火（荧惑）、土（填星、镇星）等称为七曜，到清末才逐渐改为现在“星期”的叫法。">七政：</span>
                    {{ qizheng }}</p>
                <hr>
                <p><span title="四宫代表东南西北四个方位。">四宫：</span> {{ sigong }}</p>
                <hr>
                <p><span title="四神兽对应四宫，分别是东青龙、南朱雀、西白虎、北玄武。">四神兽：</span> {{ sishenshou }}</p>
                <hr>
                <p><span title="吉神包括：喜神、阳贵神、阴贵神、福神、财神。">喜神方位：</span> {{ jishen.xishen }}</p>
                <p><span title="吉神包括：喜神、阳贵神、阴贵神、福神、财神。">福神方位：</span> {{ jishen.fushen }}</p>
                <p><span title="吉神包括：喜神、阳贵神、阴贵神、福神、财神。">财神方位：</span> {{ jishen.caishen }}</p>
                <p><span title="吉神包括：喜神、阳贵神、阴贵神、福神、财神。">阳贵神方位：</span> {{ jishen.yangguishen }}</p>
                <p><span title="吉神包括：喜神、阳贵神、阴贵神、福神、财神。">阴贵神方位：</span> {{ jishen.yinguishen }}</p>
                <hr>
                <p><span
                        title="胎神顾名思意是掌管胎儿的低神，比较接近人性，所以犯之则会对胎儿报仇，轻则胎儿出胎斑胎痣，重则流产及难产，除了对胎儿不利外，也会对母亲不利。现代太多人不懂看通胜，于是说成怀孕期间不能刻意动土、移床、敲打及鑽洞等等事情，实则应该先看通胜是否有冲突才动工。">今日胎神：</span>
                    {{ taishen.jinri }}</p>
                <p><span
                        title="胎神顾名思意是掌管胎儿的低神，比较接近人性，所以犯之则会对胎儿报仇，轻则胎儿出胎斑胎痣，重则流产及难产，除了对胎儿不利外，也会对母亲不利。现代太多人不懂看通胜，于是说成怀孕期间不能刻意动土、移床、敲打及鑽洞等等事情，实则应该先看通胜是否有冲突才动工。">本月胎神：</span>
                    {{ taishen.benyue }}</p>
                <hr>
                <p><span
                        title="四库全书收录的《御定月令辑要》曰：“太岁者，主宰一岁之尊神。凡吉事勿冲之，凶事勿犯之，凡修造方向等事尤宜慎避。太岁所在之方不宜兴工动土，否则必有灾祸。”经常听说的太岁头上动土，就出自这里。本命年，也就是值太岁。">年太岁方位：</span>
                    {{ taisui.y }}</p>
                <p><span
                        title="四库全书收录的《御定月令辑要》曰：“太岁者，主宰一岁之尊神。凡吉事勿冲之，凶事勿犯之，凡修造方向等事尤宜慎避。太岁所在之方不宜兴工动土，否则必有灾祸。”经常听说的太岁头上动土，就出自这里。本命年，也就是值太岁。">月太岁方位：</span>
                    {{ taisui.m }}</p>
                <p><span
                        title="四库全书收录的《御定月令辑要》曰：“太岁者，主宰一岁之尊神。凡吉事勿冲之，凶事勿犯之，凡修造方向等事尤宜慎避。太岁所在之方不宜兴工动土，否则必有灾祸。”经常听说的太岁头上动土，就出自这里。本命年，也就是值太岁。">日太岁方位：</span>
                    {{ taisui.d }}</p>
                <hr>
                <p><span
                        title="冲煞分为冲和煞。冲包括天干冲和地支冲，地支冲包括：子午相冲，丑未相冲，寅申相冲，辰戌相冲，卯酉相冲，巳亥相冲。由于地支对应十二生肖，也就对应了生肖相冲。天干相冲分为无情之克（阳克阳，阴克阴）和有情之克（阳克阴，阴克阳）。">日冲煞：</span>
                    {{ richongsha }}</p>
                <hr>


                <p><span
                        title="月相，是天文学中对于地球上看到的月球被太阳照明部分的称呼。随着月亮每天在星空中自东向西移动一大段距离，它的形状也在不断地变化着，这就是月亮位相变化，叫做月相。">月相：</span>
                    {{ yuexiang }}</p>
                <hr>
                <p><span
                        title="九星指北斗九星，我们熟知的北斗七星，在古代实际上有9颗，而随着时间的推移，另外2颗逐渐暗淡，人眼已经不容易观察到。太乙（太乙神数）、奇门（奇门遁甲）、六壬，并称“三式”，是中国术数三大绝学。太乙以天元为主，测国事；奇门以地元为主，测集体事；六壬以人元为主，测人事。而太乙、奇门、玄空（玄空风水）中都有与北斗九星相关的内容，其中九数、七色、五行、后天八卦方位都是相通的。">值日九星：</span>
                    {{ jiuxing.zhiri }}</p>
                <hr>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core"
import { Dayjs } from 'dayjs';
import { Solar, Lunar, LunarMonth, LunarYear } from 'lunar-typescript';

export default defineComponent({
    name: "HomeMainRight",
    setup() {
        const value = ref<Dayjs>()
        let nowTime = {
            y: new Date().getFullYear(),
            m: new Date().getMonth() + 1,
            d: new Date().getDate(),
            w: ""
        }
        return {
            value,
            nowTime,
        }
    },
    data() {
        return {
            yinli: "",
            festivals: {
                changyong: "",
                chuantong: ""
            },
            lushen: "",
            shengxiao: "",
            jieqi: "",
            wuhou: "",
            liuyao: "",
            ershibaxiu: "",
            qizheng: "",
            sigong: "",
            sishenshou: "",
            pengzubaiji: "",
            jishen: {
                xishen: "",
                yangguishen: "",
                yinguishen: "",
                fushen: "",
                caishen: ""
            },
            taishen: {
                jinri: "",
                benyue: "",
            },
            taisui: {
                y: "",
                m: "",
                d: "",
            },
            richongsha: "",
            jianchushierzhixing: "",
            shiertianshen: "",
            meiriyiji: {
                yi: "",
                ji: "",
            },
            yuexiang: "",
            jiuxing: {
                zhiri: "",
            }
        }
    },
    mounted() {
        // this.onselect(this.value as Dayjs, "")
        this.weekFormat(this.nowTime, this.nowTime.w)
        this.runLunar()
    },
    methods: {
        weekFormat(obj: any, value: string) {
            let weekTochinese = {
                "0": "周日",
                "1": "周一",
                "2": "周二",
                "3": "周三",
                "4": "周四",
                "5": "周五",
                "6": "周六",
            }
            Object.keys(weekTochinese).forEach(key => {
                if (key == value) {
                    obj.w = weekTochinese[key as keyof typeof weekTochinese]
                }
            })
        },
        onselect(value: Dayjs, mode: string) {
            this.nowTime.y = value.year()
            this.nowTime.m = value.month() + 1
            this.nowTime.d = value.date()
            this.nowTime.w = value.date(this.nowTime.d).day() + ""
            this.weekFormat(this.nowTime, this.nowTime.w)
            // console.log(this.nowTime)
            this.runLunar()
        },
        runLunar() {
            // 实例化
            var solar = Solar.fromYmd(this.nowTime.y, this.nowTime.m, this.nowTime.d);
            // 转阴历
            var lunar = solar.getLunar();
            this.yinli = lunar.toString()
            // 节日
            this.festivalsFunc(lunar)
            // 禄神
            this.getlushen(lunar)
            // 生肖
            this.getshengxiao(lunar)
            // 节气
            this.getjieqi(lunar)
            //物候
            this.getwuhou(lunar)
            // 六耀
            this.getliuyao(lunar)
            // 二十八宿
            this.getershibaxiu(lunar)
            // 七政
            this.getqizheng(lunar)
            // 四宫
            this.getsigong(lunar)
            // 四神兽
            this.getsishenshou(lunar)
            // 彭祖百忌
            this.getpengzubaiji(lunar)
            // 吉神方位
            this.getjishen(lunar)
            // 胎神方位
            this.gettaishen(lunar)
            // 太岁方位
            this.gettaisui(lunar)
            // 冲煞
            this.getrichongsha(lunar)
            // 建除十二值星
            this.getjianchushierzhixing(lunar)
            // 十二天神
            this.getshiertianshen(lunar)
            // 每日宜忌
            this.getmeiriyiji(lunar)
            // 月相
            this.getyuexiang(lunar)
            // 值日九星
            this.getjiuxing(lunar)
        },
        festivalsFunc(lunar: Lunar) {
            this.festivals.changyong = ""
            this.festivals.chuantong = ""
            var l = lunar.getFestivals();
            for (var i = 0; i < l.length; i++) {
                this.festivals.changyong = l[i]
            }

            l = lunar.getOtherFestivals();
            for (var j = 0; j < l.length; j++) {
                this.festivals.chuantong = l[j]
            }
        },
        getlushen(lunar: Lunar) {
            this.lushen = ""
            this.lushen = lunar.getDayLu().toString()
        },
        getshengxiao(lunar: Lunar) {
            this.shengxiao = ""
            this.shengxiao = lunar.getYearShengXiaoByLiChun() + "年"
        },
        getjieqi(lunar: Lunar) {
            this.jieqi = ""
            this.jieqi = lunar.getPrevJieQi().getName()
        },
        getwuhou(lunar: Lunar) {
            this.wuhou = ""
            this.wuhou = lunar.getHou() + "(" + lunar.getWuHou() + ")"
        },
        getliuyao(lunar: Lunar) {
            this.liuyao = ""
            this.liuyao = lunar.getLiuYao()
        },
        getershibaxiu(lunar: Lunar) {
            this.ershibaxiu = ""
            this.ershibaxiu = lunar.getXiu() + lunar.getAnimal() + lunar.getXiuLuck() + "(" + lunar.getXiuSong() + ")"
        },
        getqizheng(lunar: Lunar) {
            this.qizheng = ""
            this.qizheng = lunar.getZheng()
        },
        getsigong(lunar: Lunar) {
            this.sigong = ""
            this.sigong = lunar.getGong()
        },
        getsishenshou(lunar: Lunar) {
            this.sishenshou = ""
            this.sishenshou = lunar.getShou()
        },
        getpengzubaiji(lunar: Lunar) {
            this.pengzubaiji = ""
            this.pengzubaiji = lunar.getPengZuGan() + "," + lunar.getPengZuZhi()
        },
        getjishen(lunar: Lunar) {
            this.jishen.xishen = ""
            this.jishen.yangguishen = ""
            this.jishen.yinguishen = ""
            this.jishen.fushen = ""
            this.jishen.caishen = ""
            this.jishen.xishen = lunar.getDayPositionXi() + "=" + lunar.getDayPositionXiDesc()
            this.jishen.yangguishen = lunar.getDayPositionYangGui() + "=" + lunar.getDayPositionYangGuiDesc()
            this.jishen.yinguishen = lunar.getDayPositionYinGui() + "=" + lunar.getDayPositionYinGuiDesc()
            this.jishen.fushen = lunar.getDayPositionFu() + "=" + lunar.getDayPositionFuDesc()
            this.jishen.caishen = lunar.getDayPositionCai() + "=" + lunar.getDayPositionCaiDesc()
        },
        gettaishen(lunar: Lunar) {
            this.taishen.jinri = ""
            this.taishen.benyue = ""
            this.taishen.jinri = lunar.getDayPositionTai()
            this.taishen.benyue = lunar.getMonthPositionTai()
        },
        gettaisui(lunar: Lunar) {
            this.taisui.y = ""
            this.taisui.m = ""
            this.taisui.d = ""
            var year = LunarYear.fromYear(lunar.getYear())
            var month = year.getMonth(lunar.getMonth())
            this.taisui.y = year.getPositionTaiSui() + "(" + year.getPositionTaiSuiDesc() + ")"
            if (month != null) {
                this.taisui.m = month.getPositionTaiSui() + "(" + month.getPositionTaiSuiDesc() + ")"
            }
            this.taisui.d = lunar.getDayPositionTaiSui() + "(" + lunar.getDayPositionTaiSuiDesc() + ")"
        },
        getrichongsha(lunar: Lunar) {
            this.richongsha = ""
            this.richongsha = "冲" + lunar.getDayChongDesc() + ",煞" + lunar.getDaySha()
        },
        getjianchushierzhixing(lunar: Lunar) {
            this.jianchushierzhixing = ""
            this.jianchushierzhixing = lunar.getZhiXing()
        },
        getshiertianshen(lunar: Lunar) {
            this.shiertianshen = ""
            this.shiertianshen = lunar.getDayTianShen() + "(" + lunar.getDayTianShenType() + lunar.getDayTianShenLuck() + ")"
        },
        getmeiriyiji(lunar: Lunar) {
            this.meiriyiji.yi = ""
            this.meiriyiji.ji = ""
            // 宜
            var l = lunar.getDayYi()
            for (var i = 0; i < l.length; i++) {
                this.meiriyiji.yi += l[i] + ","
            }

            // 忌
            l = lunar.getDayJi();
            for (var j = 0; j < l.length; j++) {
                this.meiriyiji.ji += l[j] + ","
            }
        },
        getyuexiang(lunar: Lunar) {
            this.yuexiang = ""
            this.yuexiang = lunar.getYueXiang()
        },
        getjiuxing(lunar: Lunar) {
            this.jiuxing.zhiri = ""
            this.jiuxing.zhiri = lunar.getDayNineStar() + "：" + lunar.getDayNineStar().toFullString()

        }
    }
})
</script>
<style lang="stylus" scoped>
.article-main-right
    width 96%
    float right
    margin-bottom 10px
    background-color #fff
    border-radius 6px
    // padding 5px
    margin 0 0 10px 0px
    // box-shadow: 0px 0px 6px 2px #00000014
    border 1px solid #dbdbdb
    .article-main-right-rili
        background-color #ccc
        .article-main-right-xiangqing
            padding 10px
</style>