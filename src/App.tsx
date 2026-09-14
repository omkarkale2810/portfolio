import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SystemFlow } from './components/SystemFlow'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Achievements } from './components/Achievements'
import { Leadership } from './components/Leadership'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <div className="hairline" />
        <SystemFlow />
        <div className="hairline" />
        <About />
        <div className="hairline" />
        <Experience />
        <div className="hairline" />
        <Projects />
        <div className="hairline" />
        <Skills />
        <div className="hairline" />
        <Achievements />
        <div className="hairline" />
        <Leadership />
        <div className="hairline" />
        <Education />
        <div className="hairline" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
