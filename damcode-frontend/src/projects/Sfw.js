
const Sfw = () => {
  return(
    <div id='sfw-container' class='content is-large has-text-centered'>

      <div id='sfw-card' class='card'>
        <h1 class='project-header'>Seafood Wholesalers</h1>
        <div class='iframe-container'>
          <iframe  
            src="https://www.youtube.com/embed/2A-eTECpTAc" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        <div class='card-content'>
          <div class='content'>
            <p class='project-info'>Seafood Wholesalers is a Houston based seafood distribution
                                    company, whose clients are comprised of local restaurants and 
                                    grocery stores. This app serves as a B2B application allowing Seafood 
                                    Wholesalers to manage a daily inventory for their clients to then order 
                                    their products from. The app features different views depending on your
                                    role. A client of SFW would only be able to create a new order&#8212;granting
                                    them access to the "daily catch" of products available, and see all their current 
                                    orders being processed. As an employee of SFW, you would have all priviliges of a
                                    client, plus a couple other views depending on your position in the company.
            </p>

            <div id='front-back-info'>
              <div>
                <h4 class='front-back-headers'>Front End</h4>
                <ul>
                    <li class='front-back'><p class='front-back-text'>JS</p></li>
                    <li class='front-back'><p class='front-back-text'>React</p></li>
                    <li class='front-back'><p class='front-back-text'>Semantic UI</p></li>
                </ul>
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
    </div>
  )
}

export default Sfw