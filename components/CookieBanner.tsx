'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nexora-cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem('nexora-cookie-consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('nexora-cookie-consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-4 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-300 flex-1 text-center sm:text-left">
          🍪 We use cookies to analyze traffic and improve your experience.{' '}
          <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium border border-slate-200 dark:border-slate-600 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
