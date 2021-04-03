import Sfw from '../projects/Sfw'
import Humblr from '../projects/Humblr'

const Projects = () => {

  return(
    <div class='container has-text-centered'>
      <section id='projects' class='section is-large'>
        <div class='box'>
          <div class='content'>
            <div class="glide">
              <div class="glide__track" data-glide-el="track">
                <ul class='glide__slides'>
                  <li class='glide__slide'><Sfw /></li>
                  <li class='glide__slide'><Humblr /></li>
                  <li class='glide__slide'>Third Project</li>
                </ul>
              </div>

              <div class='glide__arrows' data-glide-el='controls'>
                <button id='project-left-arrow' class='glide__arrow glide__arrow--left' data-glide-dir='<'><i class='far fa-arrow-alt-circle-left'></i></button>
                <button id='project-right-arrow' class='glide__arrow glide__arrow--right' data-glide-dir='>'><i class='far fa-arrow-alt-circle-right'></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects