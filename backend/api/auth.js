const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('Informe usuário e Senha!')
        }

        const user = await app.db('users')
            .where({email: req.body.email })
            .first()

        if (!user) return res.status(400).send('Usuário não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return res.status(401).send('Email/Senha inválidos!')
        
        //pegando a data atual a partir de 1970 convertida pra segundos
        const now = Math.floor(Date.now() / 1000)
        const dt = new Date
        const horaAtual = (dt.getHours() * 60 * 60)+(dt.getMinutes() * 60)+(dt.getSeconds())
        const restoDoDia = 86400 - horaAtual
        console.log(restoDoDia)
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now, // iat Significa "issued at" == "Emitido em"
            //exp: now + (60 * 60 * 24 * 3) //validade do token de 3 dias
            exp: now + (restoDoDia + 7200) //Token Expirando 2h da manha

        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch {
            //problema no token
        }

        res.send(false)
    }

    return{ signin, validateToken}
}