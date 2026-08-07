export default function Hero() {
  return (
    <header className="shell hero" id="top">
      <div className="hero-eyebrow">
        <span className="mono-label">Full-stack TypeScript · 4+ yrs in production</span>
        <span className="mono ar" lang="ar" dir="rtl">
          محي الدين عبدالعظيم
        </span>
      </div>

      <h1>
        Mohyeldeen
        <br />
        Abdulazeem
        <span className="cursor-block" aria-hidden="true" />
      </h1>

      <div className="hero-body">
        <div className="hero-copy">
          <p className="role">
            I build systems that can&apos;t afford to blink — <em>realtime, end to end.</em>
          </p>
          <p>
            By day that means real-estate platforms, CRMs, and messaging services used across Saudi
            Arabia. After hours it means multiplayer game servers on Google Play — lobbies, websockets,
            reconnection logic, and players who stress-test everything for free.
          </p>
          <div className="hero-links">
            <a href="https://github.com/Mohie800" target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a
              href="https://linkedin.com/in/mohyeldeen-abdulazeem"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a href="mailto:mohy_eldeen@outlook.com">email</a>
          </div>
        </div>
      </div>
    </header>
  )
}
