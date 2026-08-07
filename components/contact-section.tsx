import Reveal from "./reveal"

export default function ContactSection() {
  return (
    <footer className="contact" id="contact">
      <div className="shell chapter">
        <Reveal>
          <div className="chapter-head">
            <h2>Open a Channel</h2>
            <span className="mono-label chapter-no">05 / hiring · listening</span>
          </div>
        </Reveal>
        <Reveal>
          <p className="contact-lede">
            The fastest way to reach me is email — I read everything, and I answer quickly when the message
            says what you&apos;re building.
          </p>
          <a className="contact-email" href="mailto:mohy_eldeen@outlook.com">
            mohy_eldeen@outlook.com
          </a>
          <div className="contact-rows">
            <a href="https://github.com/Mohie800" target="_blank" rel="noopener noreferrer">
              github.com/Mohie800
            </a>
            <a href="https://linkedin.com/in/mohyeldeen-abdulazeem" target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a href="tel:+966543281314">+966 54 328 1314</a>
            <a href="/Mohyeldeen_Abdulazeem_Resume.pdf" download>
              résumé (pdf) ↓
            </a>
          </div>
        </Reveal>
        <div className="colophon">
          <span>© 2026 Mohyeldeen Abdulazeem</span>
        </div>
      </div>
    </footer>
  )
}
