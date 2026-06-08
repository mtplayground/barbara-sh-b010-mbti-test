import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './components';
import { AboutPage, HomePage, ResultPage, TestPage } from './pages';

export function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}
