import { CheckCircle2, XCircle } from 'lucide-react';

export function ProsConsList({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-2xl border-[1.5px] border-emerald-200 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20 p-5">
        <h3 className="mb-3 font-semibold text-emerald-700 dark:text-emerald-400">Pros</h3>
        <ul className="space-y-2.5">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-emerald-500" />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border-[1.5px] border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 p-5">
        <h3 className="mb-3 font-semibold text-red-700 dark:text-red-400">Cons</h3>
        <ul className="space-y-2.5">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
              <XCircle size={16} className="mt-0.5 flex-shrink-0 text-red-500" />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
