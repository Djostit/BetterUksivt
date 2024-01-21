import { useState, useEffect } from "react";

const BtnScroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled >= 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${
        visible ? "block" : "hidden"
      } transition-all ease-linear fixed bottom-5 right-5 rounded-full px-4 py-2`}
    >
      <div className="transition-all ease-linear animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6 text-sky-500"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path>
        </svg>
      </div>
    </button>
  );
};

export default BtnScroll;
