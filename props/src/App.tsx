import Botao from "./components/Botao/Botao"

function App() {

  return (
    <>
      <h1>Exemplo 01</h1>
      <Botao />

      <h1>Exemplo 02</h1>
      <Botao cor="red" texto="Avançar" onClick={ () => alert("Botão Clicado!")} />
      

      <h1>Exemplo 03</h1>
      <Botao cor="green" texto="Clique aqui" onClick={ () => alert("Botão Clicado!")} />
    
    </>

  );

}

export default App

 