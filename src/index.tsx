import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { initServer } from './server'

initServer()

const container = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(container)