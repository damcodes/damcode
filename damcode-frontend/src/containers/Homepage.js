import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import ContactMe from '../components/ContactMe'
import Glide from '@glidejs/glide'
import { useEffect } from 'react'

const Homepage = () => {

  useEffect(() => {
    new Glide('.glide', {
      type: 'slider',
      startAt: 0
    }).mount() 
  })

  return(
    <>
      <header id='dam-header'>
        <section class='hero is-primary is-fullweight'>
          <Navbar />
          <div class="hero-body container has-text-centered">
            <h1 class="title is-1">David A. Molina</h1>
            <h2 class='subtitle'>Full Stack Developer | Bibliophile | Musician</h2>
          </div>
        </section>
      </header>

      <AboutMe />
      <Projects />
      <Blog />
      <ContactMe />

      <footer class='footer'>
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class='heading'>Social</p>
                <p class='title is-4'><a href='https://github.com/davidmolina2810'>GitHub</a></p>
                <p class='title is-4'><a href='https://twitter.com/_davidamolina'>Twitter</a></p>
                <p class='title is-4'><a href='https://www.linkedin.com/in/david-molina-23b51817b/'>LinkedIn</a></p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class='heading'>Blog</p>
                <p class='title is-4'><a href='https://davidmolina2810.github.io/programming-prose'>Programming Prose</a></p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class='heading'>Contact</p>
              </div>
            </div>
          </nav>
      </footer>
    </>
  )
}

export default Homepage