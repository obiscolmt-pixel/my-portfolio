const projects = [
  {
    title: 'Obisco Store',
    description: 'A full-featured Nigerian e-commerce + VTU platform with Paystack payment integration, push notifications, PWA, admin dashboard, order management, promo codes and VTU services (airtime, data, electricity, cable TV).',
    tech: ['React', 'Node.js', 'MongoDB', 'Paystack', 'Firebase FCM', 'VTpass', 'Tailwind CSS'],
    live: 'https://www.obisco.store',
    github: 'https://github.com/obiscolmt-pixel',
    emoji: '🛒',
    featured: true,
  },
  {
    title: 'Obisco Tech Academy',
    description: 'A student portal for a Nigerian tech training school. Features include student registration, login, dashboard, messaging system and real email delivery via EmailJS. Deployed on Netlify.',
    tech: ['React', 'Node.js', 'MongoDB', 'EmailJS', 'JWT', 'Netlify'],
    live: '#',
    github: 'https://github.com/obiscolmt-pixel',
    emoji: '🎓',
    featured: false,
  },
  {
    title: 'Amazon Clone',
    description: 'A full Amazon clone project showcasing e-commerce fundamentals including product listing, cart management, and checkout flow.',
    tech: ['React', 'JavaScript', 'CSS', 'Firebase'],
    live: '#',
    github: 'https://github.com/obiscolmt-pixel',
    emoji: '📦',
    featured: false,
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2 text-center">
          What I've Built
        </p>
        <h2 className="text-4xl font-black text-white text-center mb-16">
          My <span className="text-orange-500">Projects</span>
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map(project => (
            <div
              key={project.title}
              className={`bg-gray-900 border rounded-2xl p-6 md:p-8 hover:border-orange-500 transition ${project.featured ? 'border-orange-500/50' : 'border-gray-800'}`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{project.emoji}</span>
                    <div>
                      <h3 className="text-white font-black text-xl">{project.title}</h3>
                      {project.featured && (
                        <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold">
                          ⭐ Featured Project
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="bg-gray-800 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full border border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.live !== '#' && (
                      
                       <a href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-6 py-2 rounded-full transition"
                      >
                        🌐 Live Site
                      </a>
                    )}
                    
                    <a  href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-gray-700 hover:border-orange-500 text-gray-400 hover:text-orange-500 text-sm font-bold px-6 py-2 rounded-full transition"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects