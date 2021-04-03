
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

            <div id='front-end-info'>
              <div>
                <h3 class='title has-text-centered'>Front End</h3>
              </div>
              <div>
                <div id='front-end-list' class='list'>
                  <ul>
                    <li class='list-item'>React</li>
                    <li class='list-item'>Semantic UI React</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id='back-end-info' class='container'>
              <div>
                <h3 class='title has-text-centered'>Back End</h3>
              </div>
              <div class='columns is-mobile is-centered'>
                <div class='column is-5'>
                  <div class='list'>
                    <ul>
                      <li class='list-item'>Ruby on Rails</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sfw