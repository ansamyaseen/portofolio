import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
     
      </div>
      <div className="container mt-5">
      <h1 className="text-primary">Hello, Bootstrap + TypeScript!</h1>
      <button className="btn btn-success">Click me</button>
    </div>
     
    </>
  )
}

export default App
