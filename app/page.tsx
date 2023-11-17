'use client'

import { Provider } from "react-redux"
import { CryptoList } from "./components/CrytoList"
import { store } from "./store/store"
import Footer from "./components/shared/Footer"

export default function App() {
  return (
      <Provider store={store}>
          <CryptoList />
          <Footer />
      </Provider>
  )
}