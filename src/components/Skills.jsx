const skills = [
  { category: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'bcrypt', 'Nodemailer'] },
  { category: 'Database', items: ['MongoDB', 'Mongoose', 'MongoDB Atlas'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'VS Code'] },
  { category: 'Integrations', items: ['Paystack', 'Firebase FCM', 'Google OAuth', 'VTpass API', 'Cloudinary'] },
  { category: 'Other', items: ['PWA', 'Push Notifications', 'Responsive Design', 'Mobile First'] },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2 text-center">
          What I Know
        </p>
        <h2 className="text-4xl font-black text-white text-center mb-16">
          My <span className="text-orange-500">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div key={skill.category} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-orange-500 transition">
              <h3 className="text-orange-500 font-black text-sm uppercase tracking-wider mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span
                    key={item}
                    className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-700 hover:border-orange-500 hover:text-orange-400 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills