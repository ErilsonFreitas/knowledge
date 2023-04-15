import "font-awesome/css/font-awesome.css"
import { createApp } from 'vue'
import App from './App.vue'
import store from './config/store'
import router from './config/router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import Toasted from 'vue-toasted'
import msgs from '@/config/msgs'

const app = createApp(App)
app.use(store)
app.use(BootstrapVue)
app.use(router)
// app.use(Toasted, {
//     iconPack: 'fontawesome',
//     duration: 3000
// })
msgs(app,Toasted)
// app.toasted.register(
//     'defaultSuccess',
//     payload => !payload.msg ? 'Operação realizada com sucesso!' : payload.msg,
//     { type: 'success', icon: 'check' }
// )
// app.toasted.register(
//     'defaultError',
//     payload => !payload.msg ? 'Oops.. Erro Inesperado.' : payload.msg,
//     {type: 'error', icon: 'times'}
// )
export function showError(e){
    if(e && e.response && e.response.data){
        app.toasted.global.defaultError({msg: e.response.data})
    }else if(typeof e == 'string') {
        app.toasted.global.defaultError({msg: e})
    }else{
        app.toasted.global.defaultError()
    }
}

export default {showError}


app.mount("#app");

