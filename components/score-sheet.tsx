import Reveal from "./reveal"

const ROWS: [string, string][] = [
  ["Languages", "TypeScript · JavaScript · SQL"],
  ["Frontend", "React · Next.js · Tailwind CSS · MUI · Zustand"],
  ["Mobile", "React Native · Expo"],
  ["Backend", "Node.js · Express · NestJS · WebSockets · REST"],
  ["Data", "PostgreSQL · MongoDB · Redis · Prisma · Drizzle"],
  ["Games", "Unity (3D) · C# · Nakama · Colyseus"],
  ["Ops", "Docker · Nginx · PM2 · Linux · GitHub Actions · Vercel · VPS"],
]

export default function ScoreSheet() {
  return (
    <section className="shell chapter" id="stack">
      <Reveal>
        <div className="chapter-head">
          <h2>Instrumentation</h2>
          <span className="mono-label chapter-no">03 / in production use — not a word cloud</span>
        </div>
      </Reveal>
      <Reveal>
        <dl className="score-sheet">
          {ROWS.map(([label, value]) => (
            <div className="score-row" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
