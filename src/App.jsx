import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SongsPage from './pages/SongsPage.jsx'
import NotFound from './pages/NotFound.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="container" style={{ display: 'flex', gap: '1rem', padding: '0.75rem 0' }}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/songs" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Songs
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact
          </NavLink>
        </div>
      </nav>

      <Routes>
        {/* Home on both "/" and "/home" */}
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        {/* Songs page */}
        <Route path="/songs" element={<SongsPage />} />

        {/*Contact form */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}