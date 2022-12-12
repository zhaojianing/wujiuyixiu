const HISTORY = 'LOCAL' // 开发模式
// const HISTORY = 'HASH' // 线上模式

const GLOBAL = {
    vue_http_api: HISTORY == 'LOCAL' ? 'http://localhost:3030/' : 'http://124.221.105.167:3000/',
}

export default GLOBAL