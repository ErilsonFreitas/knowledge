<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="@/assets/logo.png" width="200" alt="logo">
            <hr>
            <div class="auth-title">{{ showSignUp ? 'Cadastro' : 'login' }}</div>

            <input v-if="showSignUp" v-model="user.name" type="text" placeholder="Nome">
            <input v-model="user.email" type="text" placeholder="Email">
            <input v-model="user.password" type="password" placeholder="Senha">
            <input v-if="showSignUp" v-model="user.confirmPassword" type="password" placeholder="Confirme a Senha">

            <button v-if="showSignUp" @click="signup">Registrar</button>
            <button v-else @click="signin">Entra</button>

            <a href @click.prevent="showSignUp = !showSignUp">
                <span v-if="showSignUp"> Já tem cadastro? Acesse o Login!</span>
                <span v-else>Não tem cadastro? Registre-se aqui!</span>
            </a>
        </div>
    </div>
</template>

<script>
import { userKey, baseApiUrl } from '@/global'
import axios from 'axios'
import { showError } from '@/main'

export default {
    name: 'Auth',
    data: function () {
        return {
            showSignUp: false,
            user: {}
        }
    },
    methods: {
        signin() {
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/' })
                })
                .catch(showError)
        },
        signup() {
            axios.post(`${baseApiUrl}/signup`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    this.showSignUp = false
                })
                .catch(showError)
        }
    }
}
</script>

<style>
.auth-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-modal {
    background-color: #FFF;
    width: 350px;
    padding: 35px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.auth-title {
    font-size: 1.2rem;
    font-weight: 100;
    margin-top: 10px;
    margin-bottom: 15px;
}

.auth-modal input {
    border: 1px solid #BBB;
    width: 100%;
    margin-bottom: 15px;
    padding: 3px 8px;
    outline: none;
}

.auth-modal button {
    align-self: flex-end;
    background-color: #2460ae;
    color: #FFF;
    padding: 5px 15px;
}

.auth-modal a {
    margin-top: 35px;
}

.auth-modal hr {
    border: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right,
            rgba(120, 120, 120, 0),
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0));
}</style>