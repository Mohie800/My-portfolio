export default function SiteNav() {
  return (
    <div className="shell">
      <nav className="site-nav" aria-label="Main">
        <a href="#top" className="wordmark">
          <span className="dot" aria-hidden="true" />
          M_ABDULAZEEM<span className="accent">.dev</span>
        </a>
        <div className="nav-links">
          <a href="#work">work</a>
          <a href="#games">games</a>
          <a href="#about">about</a>
          <a href="#contact" className="keep">
            contact
          </a>
          <a href="/Mohyeldeen_Abdulazeem_Resume.pdf" className="cv" download>
            résumé ↓
          </a>
        </div>
      </nav>
    </div>
  )
}
