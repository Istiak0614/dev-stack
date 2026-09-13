import type { Technology } from "../types";

interface SidebarProps{
  stack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const Sidebar= ({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}: SidebarProps) =>{
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {stack.length}{" "}
          {stack.length === 1
            ? "Technology Selected"
            : "Technologies Selected"}
        </p>
      </div>

      <div className="mt-5">
        {stack.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
              +
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-700">
              Your stack is empty.
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Add technologies from the cards to start building your
              development stack.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-sm">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-800">
                    {tech.name}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-slate-500">
                    {tech.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleRemoveFromStack(tech.id)
                  }
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${tech.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {stack.length > 0 && (
        <button
          type="button"
          onClick={handleRemoveAll}
          className="mt-5 w-full rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
        Remove All
        </button>
      )}
    </aside>
  );
};
export default Sidebar;