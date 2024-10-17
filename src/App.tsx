import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import './index.css'

function App() {
  return (
    <div className='flex flex-col items-center justify-center bg-[#131414]'>      
      <div className='w-full px-8 md:px-24 max-w-5xl 3xl:max-w-7xl bg-[#2f3335] text-[#e9efe9]'>

        {/* px-10 sm:px-20 lg:px-40 xl:px-60 */}
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
