
const Sfw = () => {
  return(
    <div id='sfw-container' class='content is-large has-text-centered'>
      <h1 class='project-header'>Seafood Wholesalers</h1>
      <div class='iframe-container'>
        <iframe  
          src="https://www.youtube.com/embed/2A-eTECpTAc" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
      </iframe>
      </div>

      <div id='sfw-card' class='card'>
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
                <h4>Front End</h4>
                <ul>
                    <li class='front-back'>JS</li>
                    <li class='front-back'>React</li>
                    <li class='front-back'>JWT</li>
                </ul>
              </div>

              <div>
                <h4>Back End</h4>
                <ul>
                  <li class='front-back'>Rails</li>
                  <li class='front-back'>Bcrypt</li>
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