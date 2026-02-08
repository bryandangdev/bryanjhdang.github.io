import './index.css'
import Hero from './Hero'
import Footer from './Footer'

function App() {
  return (
    <div className='min-h-screen flex flex-col font-cardenio'>
     <Hero 
        title="bryandang"
        subtitle="welcome to my website! come find out what i'm doing :D"
      />
      <Footer 
        linkedInUrl="https://www.linkedin.com/in/bryanjhdang" 
      />
    </div>
  )
}

export default App
