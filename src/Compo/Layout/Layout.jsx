import React, { Children } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <main style={{ minHeight: "80vh" }} className="m-4">{children}</main>
        <Footer/>
    </>
  )
}

export default Layout