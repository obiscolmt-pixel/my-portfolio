import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#f97316',
    paddingBottom: 15,
  },
  name: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: '#0a0a0a',
    marginBottom: 4,
  },
  title: {
    fontSize: 13,
    color: '#f97316',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  contactItem: {
    fontSize: 9,
    color: '#555555',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#f97316',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    borderBottomWidth: 1,
    borderBottomColor: '#f97316',
    paddingBottom: 4,
    marginBottom: 10,
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#0a0a0a',
  },
  company: {
    fontSize: 10,
    color: '#f97316',
    marginBottom: 2,
  },
  date: {
    fontSize: 9,
    color: '#888888',
    marginBottom: 4,
  },
  bullet: {
    fontSize: 9,
    color: '#444444',
    marginBottom: 3,
    paddingLeft: 10,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillBadge: {
    backgroundColor: '#fff7ed',
    borderWidth: 1,
    borderColor: '#f97316',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 8,
    color: '#f97316',
    fontFamily: 'Helvetica-Bold',
  },
  summaryText: {
    fontSize: 10,
    color: '#444444',
    lineHeight: 1.6,
  },
  twoCol: {
    flexDirection: 'row',
    gap: 20,
  },
  col: {
    flex: 1,
  },
})

const CV = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Ariogba Patrick Obinna</Text>
        <Text style={styles.title}>Full Stack Developer & Tech Entrepreneur</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>📧 obiscolmt@gmail.com</Text>
          <Text style={styles.contactItem}>🌐 obiscodev.com</Text>
          <Text style={styles.contactItem}>🐙 github.com/obiscolmt-pixel</Text>
          <Text style={styles.contactItem}>📍 Nigeria</Text>
          <Text style={styles.contactItem}>🗣 English, Igbo</Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summaryText}>
          Self-taught Full Stack Developer and Tech Entrepreneur with hands-on experience building real-world production applications. Founder of Obisco Store — a live Nigerian e-commerce and VTU platform — and Obisco Tech Academy, a tech training school with 23 enrolled students. Proficient in React, Node.js, MongoDB and modern web technologies. Passionate about solving real problems with clean, scalable code. Open to remote opportunities worldwide.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Founder & Lead Full Stack Developer</Text>
          <Text style={styles.company}>Obisco Store — obisco.store</Text>
          <Text style={styles.date}>2024 – Present | Nigeria</Text>
          <Text style={styles.bullet}>• Built a full-featured e-commerce platform with React, Node.js and MongoDB</Text>
          <Text style={styles.bullet}>• Integrated Paystack payment gateway for card and bank transfer payments</Text>
          <Text style={styles.bullet}>• Built VTU system for airtime, data, electricity and cable TV payments</Text>
          <Text style={styles.bullet}>• Implemented Firebase FCM push notifications for web and Android</Text>
          <Text style={styles.bullet}>• Built PWA installable on Android and iOS with offline support</Text>
          <Text style={styles.bullet}>• Deployed frontend on Vercel and backend on Render with MongoDB Atlas</Text>
          <Text style={styles.bullet}>• Built admin dashboard for order management, products, promos and customers</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Founder & Lead Instructor</Text>
          <Text style={styles.company}>Obisco Tech Academy</Text>
          <Text style={styles.date}>2024 – Present | Nigeria</Text>
          <Text style={styles.bullet}>• Founded a tech training school teaching web development to Nigerian students</Text>
          <Text style={styles.bullet}>• Currently training 23 students in HTML, CSS, JavaScript and React</Text>
          <Text style={styles.bullet}>• Built a student portal with registration, login, dashboard and EmailJS integration</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>IT Trainee — Web Development</Text>
          <Text style={styles.company}>New Horizon Computer Learning Centre, Egbeda, Lagos</Text>
          <Text style={styles.date}>2024 | Lagos, Nigeria</Text>
          <Text style={styles.bullet}>• Completed industrial training in web development and computer science</Text>
          <Text style={styles.bullet}>• Gained hands-on experience with programming fundamentals and web technologies</Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.twoCol}>
          <View style={styles.col}>
            <Text style={[styles.bullet, { fontFamily: 'Helvetica-Bold', color: '#0a0a0a', marginBottom: 6 }]}>Frontend</Text>
            <View style={styles.skillsGrid}>
              {['React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript ES6+'].map(s => (
                <Text key={s} style={styles.skillBadge}>{s}</Text>
              ))}
            </View>

            <Text style={[styles.bullet, { fontFamily: 'Helvetica-Bold', color: '#0a0a0a', marginBottom: 6, marginTop: 10 }]}>Backend</Text>
            <View style={styles.skillsGrid}>
              {['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'bcrypt', 'Nodemailer'].map(s => (
                <Text key={s} style={styles.skillBadge}>{s}</Text>
              ))}
            </View>

            <Text style={[styles.bullet, { fontFamily: 'Helvetica-Bold', color: '#0a0a0a', marginBottom: 6, marginTop: 10 }]}>Database</Text>
            <View style={styles.skillsGrid}>
              {['MongoDB', 'Mongoose', 'MongoDB Atlas'].map(s => (
                <Text key={s} style={styles.skillBadge}>{s}</Text>
              ))}
            </View>
          </View>

          <View style={styles.col}>
            <Text style={[styles.bullet, { fontFamily: 'Helvetica-Bold', color: '#0a0a0a', marginBottom: 6 }]}>Integrations</Text>
            <View style={styles.skillsGrid}>
              {['Paystack', 'Firebase FCM', 'Google OAuth', 'VTpass API', 'Cloudinary'].map(s => (
                <Text key={s} style={styles.skillBadge}>{s}</Text>
              ))}
            </View>

            <Text style={[styles.bullet, { fontFamily: 'Helvetica-Bold', color: '#0a0a0a', marginBottom: 6, marginTop: 10 }]}>Tools & Platforms</Text>
            <View style={styles.skillsGrid}>
              {['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'VS Code'].map(s => (
                <Text key={s} style={styles.skillBadge}>{s}</Text>
              ))}
            </View>

            <Text style={[styles.bullet, { fontFamily: 'Helvetica-Bold', color: '#0a0a0a', marginBottom: 6, marginTop: 10 }]}>AI Tools</Text>
            <View style={styles.skillsGrid}>
              {['Claude AI', 'ChatGPT', 'GitHub Copilot', 'AI-assisted Dev'].map(s => (
                <Text key={s} style={styles.skillBadge}>{s}</Text>
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Obisco Store — Full Stack E-commerce + VTU Platform</Text>
          <Text style={styles.company}>obisco.store | github.com/obiscolmt-pixel</Text>
          <Text style={styles.bullet}>• React + Node.js + MongoDB + Paystack + Firebase + VTpass</Text>
          <Text style={styles.bullet}>• Live platform with real users, orders, payments and VTU transactions</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Obisco Tech Academy Student Portal</Text>
          <Text style={styles.company}>github.com/obiscolmt-pixel</Text>
          <Text style={styles.bullet}>• React + Node.js + MongoDB + EmailJS — deployed on Netlify</Text>
          <Text style={styles.bullet}>• Student registration, login, dashboard and messaging system</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Amazon Clone</Text>
          <Text style={styles.company}>github.com/obiscolmt-pixel</Text>
          <Text style={styles.bullet}>• React + Firebase — full e-commerce clone with cart and checkout</Text>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education & Training</Text>
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Self-taught Full Stack Developer</Text>
          <Text style={styles.date}>2024 – Present</Text>
          <Text style={styles.bullet}>• Built production-level applications through hands-on learning and practice</Text>
        </View>
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>West African Senior School Certificate (WAEC/NECO)</Text>
          <Text style={styles.date}>Completed 2021</Text>
        </View>
      </View>

    </Page>
  </Document>
)

export default CV