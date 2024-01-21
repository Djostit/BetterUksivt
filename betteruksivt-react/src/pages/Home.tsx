import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="mb-20">
      <main className="px-4 sm:px-6 md:px-8">
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <header className="relative min-h-screen">
            <h1 className="transition-all ease-linear text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
              Лучший учебный опыт с{" "}
              <span className="text-sky-500 bg-none">BetterUksivt</span>
            </h1>
            <p className="transition-all ease-linear mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
              Легко перемещайтесь по заменам, расписаниям и многому другому, все
              это из одной удобной платформы, которая предоставляет вам
              возможность эффективного образования прямо под вашими кончиками
              пальцев.
            </p>
            <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="transition-all ease-linear bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto cursor-pointer dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
              >
                Начнем знакомство
              </Link>
              <Link
                to="#"
                className="transition-all ease-linear hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 cursor-pointer dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="flex-none text-slate-300"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
                <span className="flex-auto">Быстрый поиск...</span>
                <kbd className="font-sans font-medium">
                  <abbr title="Control" className="no-underline text-slate-300">
                    Ctrl{" "}
                  </abbr>{" "}
                  F
                </kbd>
              </Link>
            </div>
          </header>
          <section
            id="section1"
            className="text-center px-8 mb-20 sm:mb-32 md:mb-40"
          >
            <h2 className="text-slate-900 text-3xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
              “Мой путь” к совершенствованию студенческого опыта
            </h2>
            <blockquote>
              <p className="mt-6 max-w-3xl mx-auto text-lg dark:text-slate-400">
                Утомленный бесконечным мониторингом расписаний и поисками замен,
                я осознал, что многие студенты сталкиваются с этой проблемой.
                Это стало источником вдохновения для создания{" "}
                <span className="text-sky-500 dark:text-sky-400">
                  BetterUksivt - инновационного решения
                </span>
                , которое делает процесс обучения более удобным и эффективным.
                Присоединяйтесь к улучшенному учебному опыту!
              </p>
            </blockquote>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
