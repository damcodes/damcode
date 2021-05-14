
const Humblr = () => {
  return(
    <div id='humblr-container' class='content is-large has-text-centered'>
      <div id='humblr-card' class='card'>
        <h1 class='project-header'>Humblr</h1>
        <img class='project-img' src="http://www.brainproject.ca/wp-content/uploads/blank-brain-image-2018-v1.jpg" alt='brain-img'/>
        <div class='card-content'>
          <div class='content'>
            <p class='project-info'>Info about Humblr: a Humblr Homage to Tumblr.</p>
            <div class='front-back-info'>
              <div>
                  <h4 class='front-back-headers'>Front End</h4>
                  <ul>
                      <li class='front-back'><p class='front-back-text'>JavaScript</p></li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 class='front-back-headers'>Back End</h4>
                <ul>
                  <li class='front-back'><p class='front-back-text'>Rails</p></li>
                  <li class='front-back'><p class='front-back-text'>Ruby</p></li>
                  <li class='front-back'><p class='front-back-text'>Postgres</p></li>
                </ul>
              </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Humblr