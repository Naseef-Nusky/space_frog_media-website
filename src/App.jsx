import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import ServicesOverview from './pages/ServicesOverview'
import ServicePage from './pages/ServicePage'
import FAQ from './pages/FAQ'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/frequently-asked-questions" element={<FAQ />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
