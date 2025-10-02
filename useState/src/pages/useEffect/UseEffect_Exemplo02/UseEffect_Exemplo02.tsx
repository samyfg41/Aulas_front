import { useEffect, useState } from "react"

const UseEffect_Exemplo02 = () => {
    const frases = [
        "Frase 1: A persistência é o caminho do êxito.",
        "Frase 2: A vida é 10% o que acontece com você e 90% como você reage a isso.",
        "Frase 3: O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Frase 4: Acredite em si mesmo e todo o resto virá naturalmente.",
        "Frase 5: A única maneira de fazer um excelente trabalho é amar o que você faz.",
        "Frase 6: Código limpo é MENTE FELIZ."
    ]

    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndice((indice) => (indice + 1) % frases.length)
        }, 3000) 
            return () => clearInterval(timer);
    }, [frases.length]);

    return (
        <>
            <h1>Exemplo 02: Exibe mensagens após um período de tempo</h1>
            <p>{frases[indice]}</p>
        </>
    )
}
export default UseEffect_Exemplo02