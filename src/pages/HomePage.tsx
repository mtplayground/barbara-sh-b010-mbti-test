export function HomePage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
          MBTI self-reflection test
        </p>
        <h1 id="app-title">Discover Your MBTI Personality Type</h1>
        <p className="mt-6 max-w-2xl text-balance">
          A calm, bilingual personality test experience is taking shape on a
          reusable React, TypeScript, Vite, and Tailwind foundation.
        </p>
      </div>

      <aside
        className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur"
        aria-label="Design direction"
      >
        <dl className="grid gap-5">
          <div>
            <dt className="text-sm font-semibold text-slate-500">
              Visual tone
            </dt>
            <dd className="mt-1 text-xl font-semibold text-slate-950">
              Calm, modern, professional
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-slate-500">Layout</dt>
            <dd className="mt-1 text-xl font-semibold text-slate-950">
              Mobile-first with readable spacing
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-slate-500">Accents</dt>
            <dd className="mt-1 text-xl font-semibold text-slate-950">
              Soft purple and blue gradients
            </dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
