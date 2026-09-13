type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTodos: Todo[] = [
  { id: 1, title: "Definir las prioridades del día", completed: true },
  { id: 2, title: "Revisar el diseño del proyecto", completed: false },
  { id: 3, title: "Preparar la reunión de mañana", completed: false },
];

const filters = [
  { label: "Todos", active: true },
  { label: "Pendientes", active: false },
  { label: "Completados", active: false },
];

const ViewState = () => {
  const todos = initialTodos;

  return (
    <main className="min-h-screen px-5 py-8 text-slate-900 sm:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
              Espacio personal
            </p>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Mis tareas
            </h1>
          </div>
          <p className="hidden text-right text-sm font-medium text-slate-500 sm:block">
            2 tareas pendientes
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(240px,0.78fr)_minmax(0,1.8fr)]">
          <aside className="rounded-4xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/10 sm:p-8 lg:min-h-140">
            <div className="flex h-full flex-col">
              <div>
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-2xl text-slate-950">
                  +
                </span>
                <h2 className="text-2xl font-bold">Una cosa a la vez.</h2>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                  Captura una tarea y deja que el resto de tu día encuentre su
                  lugar.
                </p>
              </div>

              <div className="mt-10">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-400"
                  htmlFor="new-todo"
                >
                  Nueva tarea
                </label>
                <div className="flex flex-col gap-3">
                  <input
                    id="new-todo"
                    placeholder="¿Qué necesitas hacer?"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                  />
                  <button
                    className="rounded-xl bg-emerald-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
                    type="submit"
                  >
                    Añadir tarea
                  </button>
                </div>
              </div>

              <nav
                className="mt-auto border-t border-slate-800 pt-6"
                aria-label="Filtrar tareas"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Mostrar
                </p>
                <div className="flex flex-wrap gap-2 lg:flex-col">
                  {filters.map((item) => (
                    <button
                      className={`rounded-lg px-3 py-2 text-left text-sm font-semibold transition ${item.active ? "bg-white text-slate-950" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}
                      key={item.label}
                      type="button"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </aside>

          <section
            className="rounded-4xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8"
            aria-labelledby="todo-list-title"
          >
            <div className="mb-7 flex items-start justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <p className="mb-1 text-sm font-semibold text-emerald-700">
                  Tu lista
                </p>
                <h2
                  className="text-2xl font-bold tracking-tight text-slate-950"
                  id="todo-list-title"
                >
                  Todas las tareas
                </h2>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">
                {todos.length}
              </span>
            </div>

            <div className="space-y-3">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <article
                    className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/40"
                    key={todo.id}
                  >
                    <button
                      aria-label={
                        todo.completed
                          ? `Marcar ${todo.title} como pendiente`
                          : `Completar ${todo.title}`
                      }
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-black transition ${todo.completed ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 text-transparent hover:border-emerald-500"}`}
                      type="button"
                    >
                      ✓
                    </button>
                    <span
                      className={`flex-1 text-sm font-semibold ${todo.completed ? "text-slate-400 line-through" : "text-slate-700"}`}
                    >
                      {todo.title}
                    </span>
                    <button
                      className="px-2 text-xs font-bold text-slate-300 opacity-0 transition hover:text-rose-500 group-hover:opacity-100"
                      type="button"
                    >
                      Eliminar
                    </button>
                  </article>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-200 px-6 py-14 text-center">
                  <p className="font-semibold text-slate-600">
                    No hay tareas en esta vista
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Prueba otro filtro o añade una nueva tarea.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ViewState;
