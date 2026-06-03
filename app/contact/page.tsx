'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const REASONS = ['General inquiry', 'Sponsorship & advertising', 'Guest post submission', 'Tool submission for review'];

const SOCIAL = [
  { icon: '𝕏', label: 'Twitter / X', handle: '@nexora_ai', note: 'Best for quick questions and AI tips' },
  { icon: '📧', label: 'Email', handle: 'hello@nexora.com', note: 'We reply within 48 hours' },
  { icon: 'r/', label: 'Reddit', handle: 'u/nexora_official', note: 'Community discussions' },
  { icon: 'in', label: 'LinkedIn', handle: 'NEXORA', note: 'Professional inquiries' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ reason: REASONS[0], name: '', email: '', subject: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>›</span>
        <span className="text-slate-600 dark:text-slate-300">Contact</span>
      </nav>

      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-2">Get in Touch</h1>
      <p className="text-slate-500 dark:text-slate-400 text-lg mb-10">
        We reply to all messages within 48 hours. For instant answers,{' '}
        <Link href="/search" className="text-blue-600 hover:underline font-semibold">search our guides →</Link>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">Send a Message</h2>
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Message sent!</h3>
              <p className="text-slate-500 dark:text-slate-400">We'll reply to {form.email} within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Reason for contact</label>
                <select
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                >
                  {REASONS.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
              {(['name', 'email', 'subject'] as const).map((field) => (
                <div key={field}>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 capitalize">{field === 'name' ? 'Your name' : field === 'email' ? 'Email address' : 'Subject'}</label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    placeholder={field === 'name' ? 'John Smith' : field === 'email' ? 'john@company.com' : 'Tool review request'}
                    className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
                    required={field !== 'subject'}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what you need..."
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 transition-colors resize-y placeholder:text-slate-400"
                  required
                />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors">
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Right side */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-5">Other Ways to Reach Us</h2>
          <div className="flex flex-col gap-3 mb-6">
            {SOCIAL.map(({ icon, label, handle, note }) => (
              <div key={label} className="flex gap-4 items-start p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <div className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded-lg font-bold text-slate-600 dark:text-slate-300 flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{handle}</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500">{label} · {note}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
            <strong>📋 Submitting a Tool for Review?</strong><br />
            We accept tool submissions but make our own independent assessment. Submission doesn't guarantee a review or a positive one. We don't accept sponsored reviews or paid placements.
          </div>

          <div className="mt-6 p-5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <strong className="text-slate-900 dark:text-slate-100">⏱ Response time:</strong> We reply to all genuine inquiries within 48 business hours. Sponsorship and advertising inquiries receive a reply within 24 hours.
          </div>
        </div>
      </div>
    </div>
  );
}
