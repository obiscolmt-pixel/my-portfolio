import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
       <a href="#" className="text-xl font-black text-white">
  Obisco<span className="text-orange-500">Dev</span>
</a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            
             <a key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-orange-500 transition text-sm font-semibold"
            >
              {link}
            </a>
          ))}
          
          <a  href="https://github.com/obiscolmt-pixel"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2 rounded-full transition"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-white transition"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {links.map(link => (
            
            // key={link}
            <a  href={`#${link.toLowerCase()}`}
             key={link}
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-orange-500 transition text-sm font-semibold py-2 border-b border-gray-800"
            >
              {link}
            </a>
          ))}
          
           <a href="https://github.com/obiscolmt-pixel"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-500 text-white text-sm font-bold px-5 py-2 rounded-full text-center transition"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar