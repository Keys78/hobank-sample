import { useState } from 'react';
import { questions } from '../utils/data';

interface IProps {
    isDarkMode: boolean,
}

const RandomQuestionGenerator = ({ isDarkMode }: IProps) => {
    const [randomQuestion, setRandomQuestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const generateRandomQuestion = () => {
        setIsLoading(true);
        setRandomQuestion('');
    
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * questions.length);
          const selectedQuestion = questions[randomIndex];
          setRandomQuestion(selectedQuestion);
          setIsLoading(false);
        }, 1000);
      };

    return (
        <div className='flex items-center w-full justify-center sm:mt-[200px] mt-[150px]'>
            <div className='w-full'>
                <div className='flex items-center justify-center'>
                    <button
                        className='bg-[#606564] text-white rounded flex items-center justify-center h-[40px] w-[150px] mb-3'
                        onClick={generateRandomQuestion}>
                        {isLoading ? <img className='w-[20px] h-[20px]' src="/assets/loading_gif2.gif" /> : 'Generate Test'}
                    </button>
                </div>

                <div 
                className={`w-full sm:max-w-[500px] max-w-[350px] min-h-[120px] mx-auto rounded px-3 py-2 border question-box ${isDarkMode ? 'question-box-dark' : 'question-box-light'}`}>
                    {randomQuestion && <p>{randomQuestion}</p>}
                </div>
            </div>
        </div>
    );
};

export default RandomQuestionGenerator;