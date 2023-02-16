const HISTORY = 'LOCAL' // 开发模式
// const HISTORY = 'HASH' // 线上模式

const GLOBAL = {
    // vue_http_api: HISTORY != 'HASH' ? 'https://localhost:3030/' : 'https://wujiuyixiu.cn/api/',
    vue_http_api: HISTORY != 'LOCAL' ? 'https://wujiuyixiu.cn/api/' : 'http://localhost:4863/',
}

export default {
    GLOBAL,
    HISTORY
}