import { useState, useEffect } from "react"

const UseEffect_Exemplo01 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`
    }, [count])

    return (
        <>
            <h1>Exemplo 01 - Contador: Exibe a modificação, na barra de título do navegador da página, após clicar no botão</h1>
            <p>Você clicou {count} vezes.</p>
            <button onClick={() => setCount(count + 1)}>
                Clique aqui
            </button>
        </>
    )
}

export default UseEffect_Exemplo01
