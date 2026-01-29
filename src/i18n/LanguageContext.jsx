import { createContext, useContext } from 'react'

export const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
  copy: {},
})

export const useLanguage = () => useContext(LanguageContext)
