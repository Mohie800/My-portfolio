import Reveal from "./reveal"

export default function AfterHours() {
  return (
    <section className="shell chapter after-hours" id="games">
      <Reveal>
        <div className="chapter-head">
          <h2>
            Night <span className="shift">Shift</span>
          </h2>
          <span className="mono-label chapter-no">02 / after hours · games on google play</span>
        </div>
      </Reveal>

      <Reveal>
        <p className="after-intro">
          Games I design, build, ship, and operate myself — client, realtime servers, matchmaking, store
          listings, all of it. Both run on the same discipline as the day job, with a harder crowd.
        </p>
      </Reveal>

      <div className="game-grid">
        <Reveal>
          <article className="game-panel panel">
            <div className="panel-bar">
              <span className="mono-label svc">svc / game-01</span>
              <span className="mono-label">
                <span className="dot" aria-hidden="true" />
                live
              </span>
            </div>
            <div className="game-panel-body">
              <h3>Alba3ati</h3>
              <p className="game-ar" lang="ar" dir="rtl">
                البعاتي — لعبة الخيانة والتخمين
              </p>
              <p>
                A social-deduction game rooted in Sudanese heritage: find the traitor before the village
                falls. Nine secret roles and built-in voice chat, every phase synced in real time — with
                reconnection logic that forgives bad mobile data.
              </p>
              <dl className="game-readout">
                <div>
                  <dt>players</dt>
                  <dd>600+ registered · 30+ daily active</dd>
                </div>
                <div>
                  <dt>room size</dt>
                  <dd>5–20 players, live voice</dd>
                </div>
                <div>
                  <dt>transport</dt>
                  <dd>websockets, realtime rooms</dd>
                </div>
                <div>
                  <dt>stack</dt>
                  <dd>react native · node · express · mongodb</dd>
                </div>
              </dl>
              <div className="game-links">
                <a
                  href="https://play.google.com/store/apps/details?id=com.alba3ati.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  google play
                </a>
                <a href="https://alba3ati.mohyeldeen.dev" target="_blank" rel="noopener noreferrer">
                  alba3ati.mohyeldeen.dev
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className="game-panel panel">
            <div className="panel-bar">
              <span className="mono-label svc">svc / game-02</span>
              <span className="mono-label">
                <span className="dot" aria-hidden="true" />
                live
              </span>
            </div>
            <div className="game-panel-body">
              <h3>Siegeline</h3>
              <p className="game-ar">Head-to-head siege warfare, built for a phone screen</p>
              <p>
                Ten-minute real-time strategy duels: harvest gold, raise towers, and command squads in
                formation instead of micromanaging units. Ranked matchmaking, collectible strategy cards,
                offline practice against bots — free to play, no ads.
              </p>
              <dl className="game-readout">
                <div>
                  <dt>match</dt>
                  <dd>1v1, ~10 minutes, ranked</dd>
                </div>
                <div>
                  <dt>languages</dt>
                  <dd>english · arabic (rtl)</dd>
                </div>
                <div>
                  <dt>stack</dt>
                  <dd>unity (3d) · c# · nakama · colyseus</dd>
                </div>
              </dl>
              <div className="game-links">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sigeline.game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  google play
                </a>
                <a href="https://siegeline.mohyeldeen.dev" target="_blank" rel="noopener noreferrer">
                  siegeline.mohyeldeen.dev
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal>
        <p className="after-note mono">Server bills, store reviews, and 2 a.m. hotfixes included.</p>
      </Reveal>
    </section>
  )
}
