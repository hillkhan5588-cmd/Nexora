import { Check, X } from 'lucide-react';
import { ComparisonRow } from '@/lib/types';

export default function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 my-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800/80">
            {['Tool', 'Best For', 'Pricing', 'Free Plan', 'Rating'].map((h) => (
              <th key={h} className="text-left px-4 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-slate-200 dark:border-slate-700 ${row.recommended ? 'bg-blue-50 dark:bg-blue-950/30 font-semibold' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
            >
              <td className="px-4 py-3.5 text-sm">
                {row.recommended && <span className="text-blue-600 dark:text-blue-400 mr-1">⭐</span>}
                <strong className="text-slate-900 dark:text-slate-100">{row.tool}</strong>
                {row.recommended && <span className="ml-2 text-xs text-blue-600 dark:text-blue-400 font-semibold">(Recommended)</span>}
              </td>
              <td className="px-4 py-3.5 text-sm text-slate-600 dark:text-slate-300">{row.bestFor}</td>
              <td className="px-4 py-3.5 text-sm text-slate-700 dark:text-slate-200 font-medium">{row.price}</td>
              <td className="px-4 py-3.5 text-sm">
                {row.freePlan
                  ? <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"><Check size={14} />Yes</span>
                  : <span className="text-slate-400 flex items-center gap-1"><X size={14} />No</span>}
              </td>
              <td className="px-4 py-3.5 text-sm">{row.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
