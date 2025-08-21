const Alerta = () => {
    const caixa = {
        backgroundColor: 'red',
        color: 'white',
        padding: '15px',
    }
    const estilo ={
        fontSize: '18px',
        fontWeight: 'bold',
    }
    return(
        <>
            <div style={ caixa }>
                <h1 style={ estilo }>Alerta de Segurança</h1>
                <p style={ estilo }>Este é um alerta importante para todos os usuários.</p>
            </div>
        </>
    )
}
export default Alerta