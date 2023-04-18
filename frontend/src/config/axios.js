import axios from 'axios'

const success = res => res
const error = err => {
    if(401 === err.response.status){
        window.location = '/'
    }else{
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success,error)

//Modulo que trata o erro de token expirado fazendo com o usuario seja levado de volta para a pagina inicial