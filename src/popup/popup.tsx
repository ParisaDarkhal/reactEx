import React from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'

const test = (
  <div>
    <p>Hello World!</p>
    <img src="./icon.png" />
  </div>
)

//create root element
const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

//create a root and render the component
const root = createRoot(rootElement)
root.render(test)
