export default (app,Toasted) => {
    app.use(Toasted, {
        iconPack: 'fontawesome',
        duration: 3000
    })
    app.toasted.register(
        'defaultSuccess',
        payload => !payload.msg ? 'Operação realizada com sucesso!' : payload.msg,
        { type: 'success', icon: 'check' }
    )
    app.toasted.register(
        'defaultError',
        payload => !payload.msg ? 'Oops.. Erro Inesperado.' : payload.msg,
        { type: 'error', icon: 'times' }
    )
}
