import React from 'react'
import { ProductsContextProvider } from '../../routers/ProductContext'
import Routers from '../../routers/Routers'
import Footer from '../Footer/Footer'
import Header from "../Header/Header"
const Layout = () => {
  return (
    <>
      <div>
      <ProductsContextProvider>
      <Header/>
      <div className='grow overflow-scroll'>
        <Routers/>
      </div>
      <Footer/>
      </ProductsContextProvider>
      </div>
    </>
  )
}

export default Layout
