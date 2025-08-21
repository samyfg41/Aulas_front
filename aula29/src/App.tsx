// 1 forma - export default function App() 
// 2 forma - function App()
import Mensagem from './components/Mensagem/Mensagem';
import Botao from './components/Botao/Botao';
import Alerta from './components/Alerta/Alerta';

import Homer from './assets/imagens/homer.png';

const App = () => {
  return(
    <>
      <Alerta />
      <Mensagem />
      <Mensagem />
      <Mensagem />
      <Mensagem />
      <Mensagem />

      <Botao texto="Botão" />
      <Botao texto="Clique Aqui" />
      <Botao texto="Gravar" />
      <Botao texto="Excluir" />
      <Botao texto="Avançar" />
      <Botao texto="Sair" />

      <img src="/imagens/bart.png" alt="Bart Simpson" />
      {/* inserindo imagens a partir da pasta public */}

      <img src={ Homer } alt="Homer Simpson" />
      {/* inserindo imagens a partir da pasta src */}

    </>  
  )
}
export default App