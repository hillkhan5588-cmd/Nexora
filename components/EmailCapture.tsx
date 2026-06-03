'use client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  title?: string;
  subtitle?: string;
}

export default function EmailCapture({
  title = 'Join 10,000+ AI-Powered Professionals',
  subtitle = 'Get the best AI workflows, tool reviews, and money-making strategies — free every week.',
}: Props) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl p-12 text-center text-white" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 50%, #7C3AED 100%)' }}>
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">{title}</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-md mx-auto">{subtitle}</p>
          {submitted ? (
            <div className="bg-white/20 rounded-xl py-4 px-6 inline-block font-semibold text-lg">
              ✅ You're in! Check your inbox.
            </div>
          ) : (
            <div className="flex gap-2 max-w-md mx-auto flex-wrap">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 min-w-0 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none"
              />
              <button
                onClick={() => email && setSubmitted(true)}
                className="bg-white text-blue-700 font-bold px-5 py-3 rounded-xl text-sm flex items-center gap-2 hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Join Free <ArrowRight size={14} />
              </button>
            </div>
          )}
          <p className="text-blue-200 text-xs mt-4">No spam. Unsubscribe anytime. 10,000+ readers trust NEXORA.</p>
        </div>
      </div>
    </section>
  );
}
