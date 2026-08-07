import Reveal from "./reveal"

export default function AboutSection() {
  return (
    <section className="shell chapter" id="about">
      <Reveal>
        <div className="chapter-head">
          <h2>Operator</h2>
          <span className="mono-label chapter-no">04 / the person behind the commits</span>
        </div>
      </Reveal>
      <div className="about-grid">
        <Reveal>
          <div className="about-copy">
            <p>
              I hold a medical degree — <strong>MBBS, Nile Valley University</strong> — and chose software
              anyway. Medicine teaches you to stay methodical when something breaks at 3 a.m.; it turns out
              that transfers directly to production incidents.
            </p>
            <p>
              I started out in Khartoum building logistics dashboards, and since 2024 I&apos;ve been in
              Buraidah working on real-estate products used across Saudi Arabia. In between, I ship my own
              multiplayer games — which means I&apos;ve been the developer, the ops team, and the customer
              support inbox at the same time.
            </p>
            <p>
              I work in <strong>Arabic and English</strong>, and I especially like building products where
              both matter — RTL layouts included.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <figure className="about-photo panel">
            <img src="/me.jpg" alt="Mohyeldeen Abdulazeem at his desk" />
            <figcaption className="panel-bar">
              <span className="mono-label">operator — buraidah, most nights</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
