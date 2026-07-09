import { Check } from 'lucide-react';
import type { PricingTier } from '@/lib/tools';

export function PricingTiers({ tiers, toolName }: { tiers: PricingTier[]; toolName: string }) {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col rounded-2xl border-[1.5px] border-slate-200 dark:border-slate-700 p-5"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">{tier.name}</h3>
            <p className="mt-1 text-lg font-bold text-blue-600 dark:text-blue-400">{tier.price}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{tier.description}</p>
            <ul className="mt-4 space-y-2">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <Check size={15} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        Pricing for {toolName} may change at any time — verify current plans and pricing on the official website before purchasing.
      </p>
    </div>
  );
}
