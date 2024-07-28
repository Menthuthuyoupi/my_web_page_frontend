import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'

import { LoggedInContext } from './context/LoggedInContext'

import ScrollToTop from './components/ScrollToTop'

import Navigation from './components/Navigation'

import HomePage from './views/HomePage'

import SearchPage from './views/SearchPage'
import CategoriasPage from './views/CategoriasPage'

import ProductsPage from './views/ProductsPage'

import LoginPage from './views/LoginPage'
import UsersPage from './views/UsersPage'

import PerfilPage from './views/PerfilPage'
import MisComprasPage from './views/MisComprasPage'
import PayPage from './views/PayPage'
import MisPublicacionesPage from './views/MisPublicacionesPage'
import PublicarPage from './views/PublicarPage'

import AccessDenied from './views/AccessDenied'

import NotFound from './views/NotFound'

import Footer from './components/Footer'

function App() {
  const { loggedIn } = useContext(LoggedInContext)

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/users" element={<UsersPage />} />
        <Route path="/login" element={loggedIn.logged ? <HomePage /> : <LoginPage />} />

        <Route path="/perfil" element={loggedIn.logged ? <PerfilPage /> : <AccessDenied />} />
        <Route path="/perfil/pagar" element={loggedIn.logged ? <PayPage /> : <AccessDenied />} />
        <Route path="/perfil/mispublicaciones" element={loggedIn.logged ? <MisPublicacionesPage /> : <AccessDenied />} />
        <Route path="/perfil/publicar" element={loggedIn.logged ? <PublicarPage /> : <AccessDenied />} />
        <Route path="/perfil/miscompras" element={loggedIn.logged ? <MisComprasPage /> : <AccessDenied />} />
        
        <Route path="/search" element={<SearchPage />} />

        <Route path="/procesadores" element={<CategoriasPage categoria={"procesador"} endpoint={"procesadores"} />} />
        <Route path="/tarjetadevideo" element={<CategoriasPage categoria={"tarjeta de video"} endpoint={"tarjetadevideo"}/>} />
        <Route path="/placamadre" element={<CategoriasPage categoria={"placa madre"} endpoint={"placamadre"}/>} />
        <Route path="/ram" element={<CategoriasPage categoria={"ram"} endpoint={"ram"}/>} />
        <Route path="/discoduro" element={<CategoriasPage categoria={"disco duro"} endpoint={"discoduro"}/>} />
        <Route path="/gabinetes" element={<CategoriasPage categoria={"gabinete"} endpoint={"gabinetes"}/>} />
        <Route path="/fuentedepoder" element={<CategoriasPage categoria={"fuente de poder"} endpoint={"fuentedepoder"}/>} />

        <Route path="/teclados" element={<CategoriasPage categoria={"teclado"} endpoint={"teclados"}/>} />
        <Route path="/mouses" element={<CategoriasPage categoria={"mouse"} endpoint={"mouses"}/>} />
        <Route path="/pantallas" element={<CategoriasPage categoria={"pantalla"} endpoint={"pantallas"}/>} />
        <Route path="/audifonos" element={<CategoriasPage categoria={"audifono"} endpoint={"audifonos"}/>} />

        <Route path="/productos/:id" element={<ProductsPage />} />

        <Route path="/accesodenegado" element={<AccessDenied />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
