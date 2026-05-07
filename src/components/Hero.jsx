import { useState, useEffect } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import CV from './CV'

const roles = [
  'Full Stack Developer',
  'Tech Entrepreneur',
  'React Developer',
  'Node.js Developer',
  'Problem Solver',
]

const Hero = () => {
  const [currentRole, setCurrentRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 100)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 50)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }

    setCurrentRole(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            👋 Hello, I'm
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Ariogba<br />
            <span className="text-orange-500">Patrick</span><br />
            Obinna
          </h1>

          {/* Typing animation */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-gray-300 text-xl font-semibold">
              {currentRole}
            </span>
            <span className="w-0.5 h-6 bg-orange-500 animate-pulse inline-block" />
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Building real-world products for the Nigerian market and beyond. Founder of Obisco Store and Obisco Tech Academy.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            
            <a  href="#projects"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition"
            >
              View My Work
            </a>

            <PDFDownloadLink
              document={<CV />}
              fileName="Ariogba_Patrick_CV.pdf"
            >
              {({ loading }) => (
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold px-8 py-3 rounded-full transition">
                  {loading ? 'Preparing...' : '📄 Download CV'}
                </button>
              )}
            </PDFDownloadLink>

            
            <a  href="#contact"
              className="border border-gray-600 text-gray-400 hover:text-white hover:border-white font-bold px-8 py-3 rounded-full transition"
            >
              Hire Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            <div>
              <p className="text-3xl font-black text-white">1+</p>
              <p className="text-gray-500 text-sm">Years Coding</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">5+</p>
              <p className="text-gray-500 text-sm">Projects Built</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">23+</p>
              <p className="text-gray-500 text-sm">Students Trained</p>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <img
                  src="/patrick.png"
                  alt="Ariogba Patrick Obinna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              🚀 Available for hire
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero