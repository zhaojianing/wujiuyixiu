const HISTORY = 'LOCAL' // 开发模式
// const HISTORY = 'HASH' // 线上模式

const GLOBAL = {
    // vue_http_api: HISTORY != 'HASH' ? 'http://localhost:3030/' : 'http://wujiuyixiu.cn:3000/',
    vue_http_api: HISTORY != 'LOCAL' ? 'http://wujiuyixiu.cn:3000/' : 'http://localhost:3030/',
}

export default {
    GLOBAL,
    HISTORY
}