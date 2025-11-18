import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Configurator from './pages/Configurator'
import TechnologyPage from './pages/Technology'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:slug" element={<ProductDetail />} />
      <Route path="/configurator" element={<Configurator />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
