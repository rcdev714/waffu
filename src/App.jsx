import { MENU_SECTIONS } from './data/menu'
import { CategoryRail } from './components/CategoryRail'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { OrderPanel } from './components/OrderPanel'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CategoryRail />
        <div className="section-anchor" id="menu" />
        <div className="menu-shell">
          {MENU_SECTIONS.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </div>
        <OrderPanel />
      </main>
      <Footer />
    </div>
  )
}

export default App
