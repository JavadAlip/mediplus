import React from 'react'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Routers from '../routers/Routers.jsx'
const layout = () => {
  return <>
  <Header/>
  <main>
    <Routers/>
  </main>
  <Footer/>
  </>
}
export default layout