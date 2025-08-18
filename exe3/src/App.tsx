import Comp from "./Comp";

/*
export default function App(){
função nomeada COM exportação direta
*/
const App = () => {
  return(
    <>
      <h1>Primeiro componente </h1>

      <Comp />
      <Comp></Comp>
      <Comp></Comp>
      <Comp></Comp>
      <Comp>xyz</Comp>

    </>
  )
}
export default App;
/*
função nomeada SEM exportação direta
*/