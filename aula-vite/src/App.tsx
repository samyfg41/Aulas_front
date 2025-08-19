import Comp from "./Comp"

const App = () => {
  return (
    <>
      <h1>Primeiro componente</h1>

      <h2>Componente com Children</h2>
      <Comp>Esse texto foi passado do App</Comp>
    </>
  )
}

export default App;