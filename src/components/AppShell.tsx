import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './Header';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-page)] text-slate-900">
      <a
        href="#main-content"
        className="sr-only fixed top-4 left-4 z-50 rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-lg focus:not-sr-only focus:ring-3 focus:ring-indigo-300 focus:outline-none"
      >
        {t('nav.skipToContent')}
      </a>
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.28),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.22),transparent_30%)]" />
      <Header />
      <main
        id="main-content"
        className="px-5 pb-12 sm:px-8 lg:px-10"
        tabIndex={-1}
      >
        {children}
      </main>
    </div>
  );
}
