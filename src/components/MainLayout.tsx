import type { Technology } from "../types";

import Sidebar from "./Sidebar";
import TechList from "./TechList";

interface MainLayoutProps {
  technologies: Technology[];
  stack: Technology[];
   loading: boolean;
  error: string | null;

  handleAddToStack: (tech: Technology) => void;
  handleRemoveFromStack: (id: string) =>void;
  handleRemoveAll: () => void;
}

const MainLayout = ({
  technologies,
  stack,
  loading,
  error,
  handleAddToStack,
  handleRemoveFromStack,
  handleRemoveAll,
}: MainLayoutProps) =>{
  return (
    <section
      id="technologies"
      className="bg-slate-50/70 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
            Technology Library
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore the Technologies
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Pick the technologies that match your project and build
            your ideal development stack.
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="w-full min-w-0 flex-1">
            {loading ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-violet-600" />

                <p className="mt-4 text-sm font-semibold text-slate-600">
                  Loading technologies...
                </p>
              </div>
            ) : error ? (
              <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-red-100 bg-white p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl text-red-500">
                  !
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Unable to load technologies
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  {error}
                </p>
              </div>
            ) : technologies.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
                <p className="font-semibold text-slate-600">
                  No technologies found.
                </p>
              </div>
            ) : (
              <TechList
                technologies={technologies}
                stack={stack}
                handleAddToStack={handleAddToStack}
              />
            )}
          </div>

          <div className="w-full lg:w-[280px] lg:shrink-0">
            <Sidebar
              stack={stack}
              handleRemoveFromStack={
                handleRemoveFromStack
              }
               handleRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainLayout;