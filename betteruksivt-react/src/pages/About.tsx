import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mb-20">
      <main className="relative max-w-5xl mx-auto min-h-screen">
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Информация о нас
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-slate-400">
              Личные данные и описание.
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Полное имя
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-400">
                  Зверев Никита
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Приложение
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-400">
                  Инновационное решение для студентов
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Эл. почта
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-400">
                  help@betteruksivt.com
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Описание
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-400">
                  Откройте для себя новые горизонты в области образования с
                  нашей инновационной платформой. Управляйте легко заменами,
                  расписаниями и многим другим, всё это в одном удобном месте.
                  Наши возможности обеспечивают эффективное обучение, всегда под
                  рукой. Погрузитесь в современное образовательное пространство,
                  где знания становятся легкодоступными - это ваш шанс обучаться
                  эффективно и с удовольствием, прямо у вас на экране.
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Документы
                </dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center dark:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                          />
                        </svg>
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            договор_на_разработку.docx
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            2.4mb
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <Link
                          to="/"
                          className="font-medium text-sky-600 hover:text-sky-500"
                        >
                          Скачать
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center dark:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                          />
                        </svg>
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            техническое_задание.docx
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            4.5mb
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <Link
                          to="/"
                          className="font-medium text-sky-600 hover:text-sky-500"
                        >
                          Скачать
                        </Link>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
