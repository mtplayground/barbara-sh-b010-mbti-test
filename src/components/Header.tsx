import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LanguageToggle } from './LanguageToggle';

const navigationItems = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.test', to: '/test' },
  { labelKey: 'nav.result', to: '/result' },
  { labelKey: 'nav.about', to: '/about' },
] as const;

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-8 lg:px-10 xl:flex-row xl:items-center xl:justify-between">
        <NavLink
          to="/"
          className="group inline-flex min-w-0 items-center gap-3 rounded-full focus-visible:ring-3 focus-visible:ring-indigo-300 focus-visible:outline-none"
          aria-label={t('nav.homeAria')}
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 text-sm font-black text-white shadow-[var(--shadow-accent)]">
            MB
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold text-slate-950 sm:text-base">
              {t('app.title')}
            </span>
            <span className="block text-xs font-medium text-slate-500">
              {t('header.subtitle')}
            </span>
          </span>
        </NavLink>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between xl:w-auto">
          <nav aria-label={t('nav.primary')} className="min-w-0">
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
                    {t(item.labelKey)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
