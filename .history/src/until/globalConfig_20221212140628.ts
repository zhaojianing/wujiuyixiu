const HISTORY = 'LOCAL'
// const HISTORY = 'HASH'

const GLOBAL = {
    vue_http_api: HISTORY == 'LOCAL' ? 'http://localhost:3030/' : 'http://124.221.105.167:3000/',
}

export default GLOBAL