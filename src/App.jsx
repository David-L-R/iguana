import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import YouTube from './pages/YouTube.jsx'
import Movies from './pages/Movies.jsx'
import Minecraft from './pages/Minecraft.jsx'
import Books from './pages/Books.jsx'
import iguanaIcon from './assets/iguana.png'
import { useEffect, useState } from 'react'

function App() {
  const getNavClass = ({ isActive }) => (isActive ? 'active' : '')
  const { pathname } = useLocation()
  const showNavIguana = pathname !== '/'
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <div className="app">
      <header className="site-header">
        <div className="brand">
          <div className="brand-row">
            <span className="brand-title">Iguana</span>
            {showNavIguana ? (
              <img
                className="nav-iguana"
                src={iguanaIcon}
                alt="Iguana mascot"
              />
            ) : null}
          </div>
          <span className="brand-subtitle">kids only, fun guaranteed</span>
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" end className={getNavClass}>
            Home
          </NavLink>
          <NavLink to="/youtube" className={getNavClass}>
            YouTube
          </NavLink>
          <NavLink to="/movies" className={getNavClass}>
            Movies
          </NavLink>
          <NavLink to="/minecraft" className={getNavClass}>
            Minecraft
          </NavLink>
          <NavLink to="/books" className={getNavClass}>
            Books
          </NavLink>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/minecraft" element={<Minecraft />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </main>

      <footer className="footer">
        Iguana is the awesome kids-only corner of the web
      </footer>
    </div>
  )
}

export default App
