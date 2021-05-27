
const AboutMe = () => {
  return(
    <div class='container has-text-centered'>
      <section id='about-me' class='section is-large'>
        <div class='box'>
          <div class='card' id='aboutme-card'>
            <div class='content'>
              <h1 id='aboutme-header' class='title'>About Me</h1>

              <div class='aboutme-content-flex'>
                <div id='profile-pic-contact-info'>
                  <div>
                    <div id='contact-me-card' class='card'>
                      <div class='content'>
                        <h4 id='contact-info-header' class='contact-info'>Contact Me</h4>
                        <p class='contact-info'><span class='icon'><i class="fab fa-linkedin"></i></span><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/damcodes'>www.linkedin.com/in/damcodes</a></p>
                        <p class='contact-info'><span class='icon'><i class="far fa-envelope-open"></i></span> davidmolina2810@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='column is-12-desktop is-8-tablet is-4-mobile'>
                  <div id='about-me-text'>
                    <p class='aboutme-info'>&nbsp;&nbsp;&nbsp;&nbsp;I am a recent graduate of Flatiron School's 
                    Software Engineering program and a growth-oriented fullstack 
                    developer hoping to bring a strong commitment to code, 
                    collaboration, and creative problem solving to an organization 
                    with a culture of camaraderie and advancement.
                    </p>
                      
                    <p class='aboutme-info'>&nbsp;&nbsp;&nbsp;&nbsp;My first experience with code was in 2019. I took 2 semesters of 
                      Python at University of Houston-Downtown&mdash;intro to Python and Data 
                      structures and algorithms with Python. I was completely captivated 
                      by Python and programming in general and I started researching 
                      for ways to continue my coding journey. Eventually, I heard about 
                      Flatiron School and I immediately applied for the Software Engineering program. 
                      Luckily, transitioning from Python to Ruby as a high-level language with 
                      frameworks for creating backends wasn't hard. I had no web development 
                      experience with Python, but I had learned the basics of the language 
                      and object oriented programming, so transferring those skills 
                      allowed me to quickly grasp Ruby and then move on to conquer Rails as 
                      a backend.
                    </p>

                    <p class='aboutme-info'>&nbsp;&nbsp;&nbsp;&nbsp;Javascript was completely new to me, 
                      but I found that with consistent 
                      study I was able to harness the power of JS and combine it with 
                      React to develop some pretty cool apps.
                    </p>

                    <p class='aboutme-info'>&nbsp;&nbsp;&nbsp;&nbsp;Having graduated from bootcamp, I plan on continuing
                      to refine the skills I learned in Ruby and Javascript 
                      by developing new apps using React and other frameworks. 
                      I'm also avidly interested in mobile app development so I plan 
                      on learning to build those as well.
                    </p>

                    <p class='aboutme-info'>&nbsp;&nbsp;&nbsp;&nbsp;In my free time I really like to read, watch 
                      Netflix and animes, and learn new developer 
                      skills/technologies.
                    </p>
                    <p id='sax' class='aboutme-info'>Sax player 🎷</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe