'use client'

import { Provider } from "react-redux"
import { CryptoList } from "./components/CrytoList"
import { store } from "./store/store"
import Footer from "./components/shared/Footer"
import NavBar from "./components/shared/NavBar"

export default function App() {
  return (
      <Provider store={store}>
          <NavBar />
          <CryptoList />
          <Footer />
      </Provider>
  )
}