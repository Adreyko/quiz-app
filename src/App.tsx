import { useEffect } from 'react';
import AppRouter from './providers/Router/components/AppRouter';
import {
  questionListDE,
  questionListES,
  questionListEn,
  questionListFR,
} from './shared/lib/mocks/question';
import { setStorageData } from './shared/lib/helpers/setStorageData';
import { IQuestion } from './pages/types/question';
const initData = {
  English: questionListEn,
  French: questionListFR,
  German: questionListDE,
  Spanish: questionListES,
};
function App() {
  useEffect(() => {
    setStorageData<IQuestion[]>(initData);
  }, []);
  return (
    <div className='app min-h-[100vh] flex justify-center'>
      <AppRouter />
    </div>
  );
}

export default App;
