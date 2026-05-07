const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2 text-center">
          Who I Am
        </p>
        <h2 className="text-4xl font-black text-white text-center mb-16">
          About <span className="text-orange-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a 23-year-old Full Stack Developer and Tech Entrepreneur from Nigeria. I build real-world web applications that solve actual problems for real users — not just demo projects.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm the founder of <span className="text-orange-500 font-semibold">Obisco Tech Academy</span>, where I train the next generation of Nigerian developers, and <span className="text-orange-500 font-semibold">Obisco Store</span> — a full-featured e-commerce and VTU platform serving Nigerian customers.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm passionate about building products that matter — from payment integrations to push notifications, PWA, and VTU systems. I write clean, scalable code and I'm always learning.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Name', value: 'Ariogba Patrick Obinna' },
                { label: 'Location', value: 'Nigeria' },
                { label: 'Email', value: 'obiscolmt@gmail.com' },
                { label: 'Status', value: 'Open to Work 🟢' },
              ].map(item => (
                <div key={item.label} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                  <p className="text-orange-500 text-xs font-bold uppercase mb-1">{item.label}</p>
                  <p className="text-white text-sm font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { emoji: '🏪', title: 'Obisco Store', desc: 'Full-stack e-commerce + VTU platform with Paystack payments, push notifications and PWA' },
              { emoji: '🎓', title: 'Obisco Tech Academy', desc: 'Tech training school teaching web development to Nigerian students' },
              { emoji: '💡', title: 'Problem Solver', desc: 'I build solutions for real Nigerian market problems — payments, VTU, delivery' },
            ].map(item => (
              <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-orange-500 transition">
                <p className="text-2xl mb-2">{item.emoji}</p>
                <p className="text-white font-bold mb-1">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About