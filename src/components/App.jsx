import '../App.css'
import NavBar from './NavBar'
import Main from './Main'
import { ProductoProvider } from '../ProductContext'

function App() {

  return (
    <ProductoProvider>
      <NavBar />
      <Main />
    </ProductoProvider>
  )
}

export default App
