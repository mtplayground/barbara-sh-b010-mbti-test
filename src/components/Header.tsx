export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <a
          href="/"
          className="group inline-flex min-w-0 items-center gap-3 rounded-full focus-visible:ring-3 focus-visible:ring-indigo-300 focus-visible:outline-none"
          aria-label="Discover Your MBTI Personality Type home"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 text-sm font-black text-white shadow-[var(--shadow-accent)]">
            MB
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold text-slate-950 sm:text-base">
              Discover Your MBTI Personality Type
            </span>
            <span className="block text-xs font-medium text-slate-500">
              Self-reflection test
            </span>
          </span>
        </a>

        <span className="hidden rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700 sm:inline-flex">
          32 questions
        </span>
      </div>
    </header>
  );
}
