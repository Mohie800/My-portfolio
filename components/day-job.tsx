import Reveal from "./reveal"

export default function DayJob() {
  return (
    <section className="shell chapter" id="work">
      <Reveal>
        <div className="chapter-head">
          <h2>Day Shift</h2>
          <span className="mono-label chapter-no">01 / operations · 09:00 → 18:00</span>
        </div>
      </Reveal>

      <Reveal>
        <div className="employer">
          <div className="employer-meta">
            <h3>Al&#8209;Wosool Al&#8209;Sahl for Information Technology</h3>
            <p className="where">Buraidah, Saudi Arabia</p>
            <p className="mono-label">Full-stack developer · Mar 2024 → present</p>
          </div>
          <div>
            <p className="employer-intro">
              One engineering team, several production products for the Saudi real-estate market. I work
              across all of them, frontend to database.
            </p>
            <ul className="ledger">
              <li>
                <span>
                  <span className="item-name">Qistar</span>
                  <span className="item-status">● in production</span>
                </span>
                <span className="item-desc">
                  Commercial real-estate platform — leasing and monthly-installment plans for business
                  tenants. I built the customer-facing frontend.
                  <span className="item-stack">React.js</span>
                </span>
              </li>
              <li>
                <span>
                  <span className="item-name">Sada</span>
                  <span className="item-status">● in production</span>
                </span>
                <span className="item-desc">
                  The CRM behind the same operation: units, contracts, collections, and the daily workflows
                  of a real-estate business.
                  <span className="item-stack">Next.js</span>
                </span>
              </li>
              <li>
                <span>
                  <span className="item-name">Sadah Connect</span>
                  <span className="item-status">● in production</span>
                </span>
                <span className="item-desc">
                  Unified business-messaging platform. My widest scope on the team — frontend, backend
                  services, and the data model.
                  <span className="item-stack">Next.js · NestJS · Prisma · PostgreSQL</span>
                </span>
              </li>
              <li>
                <span>
                  <span className="item-name">WhatsApp Microservice</span>
                  <span className="item-status">● in production</span>
                </span>
                <span className="item-desc">
                  The service that lets the products above talk to customers over WhatsApp — session
                  handling, message workflows, and the endpoints everything else depends on.
                  <span className="item-stack">Node.js · Express</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="employer">
          <div className="employer-meta">
            <h3>KTL Ltd.</h3>
            <p className="where">Khartoum, Sudan</p>
            <p className="mono-label">Frontend developer · Mar → Oct 2022</p>
          </div>
          <div>
            <ul className="ledger">
              <li>
                <span className="item-name">Logistics Dashboard</span>
                <span className="item-desc">
                  Interfaces for monitoring and managing logistics operations — my first production React
                  work, and where I learned that users click everything.
                  <span className="item-stack">React.js</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="employer">
          <div className="employer-meta">
            <h3>Freelance</h3>
            <p className="where">Remote</p>
            <p className="mono-label">On the side</p>
          </div>
          <div>
            <ul className="ledger">
              <li>
                <span className="item-name">
                  <a
                    className="item-link"
                    href="https://khayat-indol.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Khabnah ↗
                  </a>
                </span>
                <span className="item-desc">
                  Storefront for a made-to-measure clothing brand in Saudi Arabia — Arabic-first, RTL
                  throughout.
                  <span className="item-stack">React.js</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="shots">
          <figure className="shot panel">
            <a href="https://qistar.sa" target="_blank" rel="noopener noreferrer">
              <div className="panel-bar">
                <span className="mono-label">qistar</span>
                <span className="mono-label go">qistar.sa&nbsp;↗</span>
              </div>
              <img
                src="/qistar.png"
                alt="Qistar — landing page of the commercial real-estate platform, in Arabic"
              />
            </a>
          </figure>
          <figure className="shot panel">
            <a href="https://sadah.io" target="_blank" rel="noopener noreferrer">
              <div className="panel-bar">
                <span className="mono-label">sadah</span>
                <span className="mono-label go">sadah.io&nbsp;↗</span>
              </div>
              <img
                src="/sadah-io.png"
                alt="Sadah — landing page of the AI real-estate platform, in Arabic"
              />
            </a>
          </figure>
          <figure className="shot panel">
            <a href="https://connect.sadah.io" target="_blank" rel="noopener noreferrer">
              <div className="panel-bar">
                <span className="mono-label">sadah connect</span>
                <span className="mono-label go">connect.sadah.io&nbsp;↗</span>
              </div>
              <img
                src="/sadah-connect.png"
                alt="Sadah Connect — landing page of the unified business-messaging platform, in Arabic"
              />
            </a>
          </figure>
        </div>
      </Reveal>
    </section>
  )
}
