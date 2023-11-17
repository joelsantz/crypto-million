'use client'

import { Provider } from "react-redux"
import { CryptoList } from "./components/CrytoList"
import { store } from "./store/store"
import { Footer, NavBar } from "./components/shared"

export default function App() {
  return (
      <Provider store={store}>
          <NavBar />
          <CryptoList />
          <Footer />
      </Provider>
  )
}