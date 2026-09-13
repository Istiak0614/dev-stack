import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

const TechCard = ({
  tech,
  stack,
  handleAddToStack,
}: TechCardProps) => {
  const isAdded = stack.some(
    (item) => item.id === tech.id
  );

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg">

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-2.5">
          <img
            src={tech.icon}
            alt={`${tech.name} logo`}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
          {tech.badge}
        </span>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-xl font-bold text-slate-900">
          {tech.name}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
          {tech.description}
        </p>

        <div className="mt-4">
          <span className="inline-flex rounded-md bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
            {tech.category}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-xs font-medium text-slate-500 sm:text-sm">
            {tech.difficulty}
          </span>

          <div className="flex items-center gap-1">
            <span
              className="text-amber-400"
              aria-hidden="true"
            >
              ★
            </span>

            <span className="text-sm font-bold text-slate-800">
              {tech.rating.toFixed(1)}
            </span>
          </div>
        </div>
        <button
          type="button"
          disabled={isAdded}
          onClick={() => handleAddToStack(tech)}
          className={`mt-5 min-h-11 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 ${
            isAdded
              ? "cursor-not-allowed bg-slate-100 text-slate-500"
              : "brand-gradient text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg"
          }`}
        >
          {isAdded
            ? "✓ Added to Stack"
            : "Add to Stack"}
        </button>
      </div>
    </article>
  );
};

export default TechCard;