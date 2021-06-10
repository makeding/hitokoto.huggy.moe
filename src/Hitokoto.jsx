import React from 'react'
import './Hitokoto.css'
import hitokoto_data from './hitokoto.json'
function hitokoto(){
  return hitokoto_data[Math.floor(Math.random() * hitokoto_data.length)]
}
function App() {
  let h = hitokoto()
  h.source = h.source ? '--' + h.source : ''
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {h.hitokoto}
          <br></br>
          <p className="App-source">{h.source}</p>
        </p>
      </header>
    </div>
  )
}

export default App
