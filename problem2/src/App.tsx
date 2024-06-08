import './App.css'
import CurrencySwap from './modules/currency-swap'

function App() {


  return (
    <div>
      <h1>
        <img src='src/assets/fire.svg' alt='fire' width={32} height={32}/>
        Welcome to exchange currency Tool
        <img src='src/assets/fire.svg' alt='fire' width={32} height={32}/>

      </h1>
      <CurrencySwap />
    </div>
  )
}

export default App
