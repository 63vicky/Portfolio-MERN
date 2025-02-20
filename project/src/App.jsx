import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import PrivateRoute from '@/components/PrivateRoute';
import { useEffect, useState } from 'react';

function App() {
  // Theme state management
  const [theme, setTheme] = useState('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Toaster
          className="p-4"
          toastOptions={{
            unstyled: false,
            duration: 9000000,
            classNames: {
              error: 'bg-red-500',
              info: 'bg-blue-500',
              success: 'bg-green-500',
              warning: 'bg-orange-500',
              toast: 'bg-blue-500',
              title: 'text-white text-2xl',
              description: 'text-white-900',
              actionButton: 'bg-zinc-400',
              cancelButton: 'bg-orange-400',
              closeButton: 'bg-white p-0',
            },
            className: 'p-2',
          }}
        />
      </div>
    </Router>
  );
}

export default App;
