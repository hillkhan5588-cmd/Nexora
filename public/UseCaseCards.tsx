interface UseCase {
  title: string;
  description: string;
  icon: string;
}

interface Feature {
  title: string;
  description: string;
}

export function UseCaseCards({ useCases }: { useCases: UseCase[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {useCases.map((useCase) => (
        <div
          key={useCase.title}
          className="rounded-2xl border-[1.5px] border-slate-200 dark:border-slate-700 p-5 transition-colors hover:border-blue-300 dark:hover:border-blue-800"
        >
          <div className="mb-2 text-2xl">{useCase.icon}</div>
          <h3 className="font-semibold text-slate-900 dark:text-white">{useCase.title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{useCase.description}</p>
        </div>
      ))}
    </div>
  );
}

export function KeyFeatureCards({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border-[1.5px] border-slate-200 dark:border-slate-700 p-5"
        >
          <h3 className="font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
