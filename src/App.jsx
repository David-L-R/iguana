import { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import YouTube from './pages/YouTube.jsx'
import Movies from './pages/Movies.jsx'
import Minecraft from './pages/Minecraft.jsx'
import Books from './pages/Books.jsx'
import Memes from './pages/Memes.jsx'
import iguanaIcon from './assets/iguana.png'
import { LanguageContext } from './i18n/LanguageContext.jsx'
import { copy } from './i18n/copy.js'

function App() {
  const getNavClass = ({ isActive }) => (isActive ? 'active' : '')
  const { pathname } = useLocation()
  const showNavIguana = pathname !== '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState(() => {
    const stored = window.localStorage.getItem('iguana-language')
    return ['en', 'nl', 'fr', 'de'].includes(stored) ? stored : 'en'
  })
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const languageLabel =
    language === 'nl'
      ? 'Nederlands'
      : language === 'fr'
        ? 'Français'
        : language === 'de'
          ? 'Deutsch'
          : 'English'
  const setLang = (next) => {
    setLanguage(next)
    setLangMenuOpen(false)
  }
  const toggleLanguage = () => setLang(language === 'en' ? 'nl' : 'en')
  const text = copy[language]

  useEffect(() => {
    setMenuOpen(false)
    setLangMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    window.localStorage.setItem('iguana-language', language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, copy: text }}>
      <div className="app">
        <header className="site-header">
          <div className="brand">
            <div className="brand-row">
              <span className="brand-title">{text.brand.title}</span>
              {showNavIguana ? (
                <img
                  className="nav-iguana"
                  src={iguanaIcon}
                  alt="Iguana mascot"
                />
              ) : null}
            </div>
            <span className="brand-subtitle">{text.brand.subtitle}</span>
          </div>
          <div className="nav-actions">
            <div className="lang-menu">
              <button
                className="lang-toggle"
                type="button"
                aria-haspopup="menu"
                aria-expanded={langMenuOpen}
                onClick={() => {
                  setLangMenuOpen((open) => !open)
                  setMenuOpen(false)
                }}
              >
                {languageLabel}
              </button>
              {langMenuOpen ? (
                <div className="lang-dropdown" role="menu">
                  <button
                    type="button"
                    role="menuitem"
                    className="lang-option"
                    onClick={() => setLang('en')}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="lang-option"
                    onClick={() => setLang('nl')}
                  >
                    🇳🇱 Nederlands
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="lang-option"
                    onClick={() => setLang('fr')}
                  >
                    🇫🇷 Français
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="lang-option"
                    onClick={() => setLang('de')}
                  >
                    🇩🇪 Deutsch
                  </button>
                </div>
              ) : null}
            </div>
            <button
              className="nav-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((open) => !open)
                setLangMenuOpen(false)
              }}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <NavLink to="/" end className={getNavClass}>
              {text.nav.home}
            </NavLink>
            <NavLink to="/youtube" className={getNavClass}>
              {text.nav.youtube}
            </NavLink>
            <NavLink to="/movies" className={getNavClass}>
              {text.nav.movies}
            </NavLink>
            <NavLink to="/minecraft" className={getNavClass}>
              {text.nav.minecraft}
            </NavLink>
            <NavLink to="/memes" className={getNavClass}>
              {text.nav.memes}
            </NavLink>
            <NavLink to="/books" className={getNavClass}>
              {text.nav.books}
            </NavLink>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/youtube" element={<YouTube />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/minecraft" element={<Minecraft />} />
            <Route path="/memes" element={<Memes />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </main>

        <footer className="footer">{text.footer}</footer>
      </div>
    </LanguageContext.Provider>
  )
}

export default App
