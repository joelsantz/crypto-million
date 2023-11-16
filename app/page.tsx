'use client'

import { Provider } from "react-redux"
import { CryptoList } from "./components/CrytoList"
import { store } from "./store/store"

export default function App() {
  return (
      <Provider store={store}>
          <CryptoList />
      </Provider>
  )
}