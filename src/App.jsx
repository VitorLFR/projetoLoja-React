import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Infos } from './components/Infos'
import Router from './Router'

function App() {

  return (
    <>
      <Header />

      <Router />

      <Infos /> 
      <Footer />
    </>
  )
}

export default App
