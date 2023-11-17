'use client'

import { Provider } from "react-redux"
import { CryptoList } from "./components/CrytoList"
import { store } from "./store/store"
import { MainLayout } from "./components"

export default function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <CryptoList />
      </MainLayout>
    </Provider>
  );
}