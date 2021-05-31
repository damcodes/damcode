
const Navbar = () => {
  return(
      <nav id='nav' class="level navbar is-fixed-top">
        <ul class='nav-list'>
          <li class='nav-item'><a class='nav-link' href='#about-me'><p class='nav-text'>About Me</p></a></li>
          <li class='nav-item'><a class='nav-link' href='#projects'><p class='nav-text'>Projects</p></a></li>
          <li class='nav-item'><a class='nav-link' target='_blank' rel='noreferrer' href='https://damcodes.github.io/programming-prose'><p class='nav-text'>Blog</p></a></li>
        </ul>
      </nav>
  )
}

export default Navbar