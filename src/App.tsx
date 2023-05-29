import { useEffect, useState } from 'react';
import RandomQuestionGenerator from './components/Randomize'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => {
      const storedDarkMode = localStorage.getItem('darkMode');
      return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    }
  );

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);



  const toggleDarkMode = () => {
    setIsDarkMode((prevMode: any) => !prevMode);
  };

  return (
    <main className={`w-full max-w-[1920px] mx-auto ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
      <div className={`flex items-center justify-between w-full shadow-main sm:px-[80px] px-[16px] ${isDarkMode && 'border-btm'}`}>
        <h1>StudyMe</h1>
        <div className={`rounded flex p-4 w-[150px] space-x-6 justify-center items-center`} >
          <img src="/assets/icon-light-theme.svg" alt="Sun" height={18} width={18} />
          <label htmlFor="default-toggle" className="w-16 inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" className="sr-only peer" onChange={toggleDarkMode} checked={isDarkMode} />
            <div className="w-10 h-5 bg-mainPurpleHover rounded-full peer peer-checked:after:translate-x-5 dark:bg-mainPurpleHover  peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-mainPurple"></div>
          </label>
          <img src="/assets/icon-dark-theme.svg" alt="Moon" height={15} width={15} />
        </div>
      </div>
      <section className='sm:px-[80px] px-[16px] w-full'>
        <RandomQuestionGenerator isDarkMode={isDarkMode} />
      </section>
    </main>
  )
}

export default App