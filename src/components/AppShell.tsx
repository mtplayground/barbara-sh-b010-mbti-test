import type { ReactNode } from 'react';
import { Header } from './Header';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-page)] text-slate-900">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.28),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.22),transparent_30%)]" />
      <Header />
      <main id="main-content" className="px-5 pb-12 sm:px-8 lg:px-10">
        {children}
      </main>
    </div>
  );
}
