import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pb-16 text-sm leading-6 mt-auto">
      <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
        <div className="flex">
          <div className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Начало работы
              </h2>
              <ul className="mt-3 space-y-2">
                {[
                  ["Установка", "/"],
                  ["Что-то еще", "/"],
                ].map(([title, url]) => (
                  <li>
                    <Link
                      to={url}
                      className="transition-all ease-linear hover:text-slate-900 dark:hover:text-slate-300"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Начало работы
              </h2>
              <ul className="mt-3 space-y-2">
                {[
                  ["Установка", "/"],
                  ["Что-то еще", "/"],
                ].map(([title, url]) => (
                  <li>
                    <Link
                      to={url}
                      className="transition-all ease-linear hover:text-slate-900 dark:hover:text-slate-300"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Сообщество
              </h2>
              <ul className="mt-3 space-y-2">
                {[
                  ["Website", "/"],
                  ["Vk", "/"],
                  ["Instagram", "/"],
                  ["Telegram", "/"],
                ].map(([title, url]) => (
                  <li>
                    <Link
                      to={url}
                      className="transition-all ease-linear hover:text-slate-900 dark:hover:text-slate-300"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Сообщество
              </h2>
              <ul className="mt-3 space-y-2">
                {[
                  ["Website", "/"],
                  ["Vk", "/"],
                  ["Instagram", "/"],
                  ["Telegram", "/"],
                ].map(([title, url]) => (
                  <li>
                    <Link
                      to={url}
                      className="transition-all ease-linear hover:text-slate-900 dark:hover:text-slate-300"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-10">
          <p className="text-2xl">Better - значит лучше.</p>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
