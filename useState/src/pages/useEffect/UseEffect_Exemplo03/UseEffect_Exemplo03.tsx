import { useEffect, useState } from "react"

const UseEffect_Exemplo03 = () => {
    const frases = [
        "Frase 1: A persistência é o caminho do êxito.",
        "Frase 2: A vida é 10% o que acontece com você e 90% como você reage a isso.",
        "Frase 3: O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Frase 4: Acredite em si mesmo e todo o resto virá naturalmente.",
        "Frase 5: A única maneira de fazer um excelente trabalho é amar o que você faz.",
        "Frase 6: Código limpo é MENTE FELIZ."
    ]

    const [indice, setIndice] = useState(0);
    const [exibirFrase, setExibirFrase] = useState<string[]>([]);

    useEffect(() => {
        const timer = setInterval(() => {

            setExibirFrase((anteriores) => {
                const novaFrase = frases[indice];
                return [...anteriores, novaFrase];
            })

            setIndice((indice) => (indice + 1) % frases.length)
        }, 3000) 
            return () => clearInterval(timer);
    }, [indice]);

    return (
        <>
            <h1>Exemplo 03: Exibe mensagens após um período de tempo</h1>
            { exibirFrase.map((frase, idx) => (
                <p key={ idx }>{ frase }</p>
            )) }
        </>
    )
}
export default UseEffect_Exemplo03