import './App.css'
import Hero from './components/Hero'
import YourResult from './components/YourResult'
import Tips from './components/Tips'
import Limitations from './components/Limitations'

function App() {
  return (
    <>
      <div className="container">
        <Hero />
        <YourResult />
        <Tips />
        <Limitations />

      </div>

    </>

  )
}

export default App
