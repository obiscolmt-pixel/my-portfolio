const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">
          Get In Touch
        </p>
        <h2 className="text-4xl font-black text-white mb-6">
          Let's <span className="text-orange-500">Work Together</span>
        </h2>
        <p className="text-gray-400 leading-relaxed mb-12">
          I'm currently open to full-time remote opportunities, freelance projects and collaborations. If you have a project in mind or want to hire me, let's talk!
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { emoji: '📧', label: 'Email', value: 'obiscolmt@gmail.com', href: 'mailto:obiscolmt@gmail.com' },
            { emoji: '💬', label: 'WhatsApp', value: '+234 904 986 3067', href: 'https://wa.me/2349049863067' },
            { emoji: '🐙', label: 'GitHub', value: 'obiscolmt-pixel', href: 'https://github.com/obiscolmt-pixel' },
          ].map(item => (
            
              // key={item.label}
            <a  href={item.href}
               key={item.label}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 border border-gray-800 hover:border-orange-500 rounded-2xl p-6 transition group"
            >
              <p className="text-3xl mb-3">{item.emoji}</p>
              <p className="text-orange-500 text-xs font-bold uppercase mb-1">{item.label}</p>
              <p className="text-gray-400 text-sm group-hover:text-white transition">{item.value}</p>
            </a>
          ))}
        </div>

        
        <a  href="mailto:obiscolmt@gmail.com"
          className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-12 py-4 rounded-full transition inline-block"
        >
          📩 Send Me an Email
        </a>
      </div>
    </section>
  )
}

export default Contact