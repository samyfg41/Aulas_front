import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Exemplo01 from './pages/useState/Exemplo01/Exemplo01'
import Exemplo02 from './pages/useState/Exemplo02/Exemplo02'
import Exemplo03 from './pages/useState/Exemplo03/Exemplo03'
import Exemplo04 from './pages/useState/Exemplo04/Exemplo04'
import UseEffect_Exemplo01 from './pages/useEffect/UseEffect_Exemplo01/UseEffect_Exemplo01'
import UseEffect_Exemplo02 from './pages/useEffect/UseEffect_Exemplo02/UseEffect_Exemplo02'
import UseEffect_Exemplo03 from './pages/useEffect/UseEffect_Exemplo03/UseEffect_Exemplo03'
import UseEffect_Exemplo04 from './pages/useEffect/UseEffect_Exemplo04/UseEffect_Exemplo04'

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>Menu de Navegação</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>useState</li>
              <ul>
                <li><Link to="/Exemplo01">Exemplo 01</Link></li>
                <li><Link to="/Exemplo02">Exemplo 02</Link></li>
                <li><Link to="/Exemplo03">Exemplo 03</Link></li>
                <li><Link to="/Exemplo04">Exemplo 04</Link></li>
              </ul>
            <li>useEffect</li>
              <ul>
                <li><Link to="/UseEffect_Exemplo01">Exemplo 01</Link></li>
                <li><Link to="/UseEffect_Exemplo02">Exemplo 02</Link></li>
                <li><Link to="/UseEffect_Exemplo03">Exemplo 03</Link></li>
                <li><Link to="/UseEffect_Exemplo04">Exemplo 04</Link></li>
              </ul>
          </ul>
        </nav>

        <Routes>
          <Route path="/Exemplo01" element={<Exemplo01 />} />
          <Route path="/Exemplo02" element={<Exemplo02 />} />
          <Route path="/Exemplo03" element={<Exemplo03 />} />
          <Route path="/Exemplo04" element={<Exemplo04 />} />
          <Route path="/UseEffect_Exemplo01" element={<UseEffect_Exemplo01 />} />
          <Route path="/UseEffect_Exemplo02" element={<UseEffect_Exemplo02 />} />
          <Route path="/UseEffect_Exemplo03" element={<UseEffect_Exemplo03 />} />
          <Route path="/UseEffect_Exemplo04" element={<UseEffect_Exemplo04 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
