import './index.css'
import Hero from './Hero'
import Footer from './Footer'

// border border-red-500 

function App() {
  return (
    <div className='min-h-screen flex flex-col font-cardenio'>
     <Hero 
        title="Hey there, I'm Bryan"
        subtitle="Welcome to my website! Come see what I'm up to :D"
      />
      <Footer 
        linkedInUrl="https://www.linkedin.com/in/bryanjhdang" 
      />
    </div>
  )
}

export default App
