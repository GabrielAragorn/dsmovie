

//importing the github icon
import {ReactComponent as GithubIcon} from 'assets/img/github_icon.svg'
import './styles.css'

//Creating my first component :D
function Navbar(){
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/GabrielAragorn">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/GabrielAragorn</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;