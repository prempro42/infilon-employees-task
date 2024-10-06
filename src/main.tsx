import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { makeServer } from "mirage.ts"
import { Provider } from "react-redux"
import { store } from "store.ts"

makeServer()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
