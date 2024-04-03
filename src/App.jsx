import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Infos } from './components/Infos'
import { Theme } from './components/Theme'
import Router from './Router'

function App() {

  return (
    <>
      <Header />
      <Theme />
      <Router />

      <Infos /> 
      <Footer />
    </>
  )
}

export default App
