import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import ContactMe from '../components/ContactMe'

const Homepage = () => {

  return(
    <>
      <section id='main-content' class="hero is-primary is-fullweight">
        <Navbar />

        <div class="hero-body container has-text-centered">
          <h1 class="title is-1">David A. Molina</h1>
          <h2 class='subtitle'>Full Stack Developer | Bibliophile | Musician</h2>
        </div>
      </section>

      <AboutMe />
      <Projects />
      <Blog />
      <ContactMe />

      <footer class='footer'>

      </footer>
    </>
  )
}

export default Homepage