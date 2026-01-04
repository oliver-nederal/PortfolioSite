import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col justify-end pt-[100px] pb-[20px] px-[20px] min-h-screen items-start overflow-hidden relative">
      <ul className="flex flex-col text-neutral-600 dark:text-neutral-300 sm:text-[35px] md:text-[40px] text-[25px]">
        <li className="flex items-center">
          <h2>CS Student @ Delft University of Technology (TU Delft)</h2>
        </li>
        <li>
          <h2>👨‍💻 Full-Stack Developer</h2>
        </li>
        <li>
          <h2>Entrepreneur 💡</h2>
        </li>
      </ul>
      <ul className="flex animate-infinitescroll whitespace-nowrap text-neutral-800 dark:text-neutral-200 mix-blend-difference text-[120px] sm:text-[180px]">
        {[...Array(2)].map((_, i) => (
          <div className="flex" key={i}>
            <li className="flex flex-row">
              <h1 className="px-4">Oliver</h1>
              <h1 className="px-4 font-medium">Nederal</h1>
            </li>
            <li>
              <h1 className="px-4">⎯</h1>
            </li>
            <li className="flex flex-row">
              <h1 className="px-4">Oliver</h1>
              <h1 className="px-4 font-medium">Nederal</h1>
            </li>
            <li>
              <h1 className="px-4">⎯</h1>
            </li>
          </div>
        ))}
      </ul>
    </main>
  );
};

export default Home;
