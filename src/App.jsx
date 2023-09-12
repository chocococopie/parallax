import { useState } from 'react'
import './App.css'
import Parallax from './parallax/Parallax'

function App() {

  return (
    <div>
      <section><Parallax /></section>
      <section>Hello world!</section>
      <section><Parallax /></section>
      <section>Hello world!</section>
    </div>
  )
}

export default App
