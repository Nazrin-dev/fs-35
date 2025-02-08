import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar'
import PageStart from './components/pagestart'
import Image from './components/image'
import Projects from './components/projects'
import About from './components/about'
import Contact from './components/contact'
import Map from './components/map'
import Footer from './components/footer'

createRoot(document.getElementById('root')).render(
<>
<Navbar/>
<PageStart/>
<Image/>
<Projects/>
<About/>
<Contact/>
<Map/>
<Footer/>
</>
)
