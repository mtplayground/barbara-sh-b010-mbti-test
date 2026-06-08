import { NavLink } from 'react-router-dom';

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Test', to: '/test' },
  { label: 'Result', to: '/result' },
  { label: 'About', to: '/about' },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-8 lg:px-10 xl:flex-row xl:items-center xl:justify-between">
        <NavLink
          to="/"
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
        </NavLink>

        <nav aria-label="Primary navigation" className="w-full xl:w-auto">
          <ul className="flex gap-2 overflow-x-auto rounded-full border border-indigo-100 bg-white/70 p-1">
            {navigationItems.map((item) => (
              <li key={item.to} className="shrink-0">
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    [
                      'inline-flex rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:ring-3 focus-visible:ring-indigo-300 focus-visible:outline-none',
                      isActive
                        ? 'bg-indigo-600 text-white shadow-[var(--shadow-accent)]'
                        : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-700',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
