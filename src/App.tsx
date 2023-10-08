import moment from 'moment';

import Schedule from './components/Schedule';
import useSchedule from './hooks/useSchedule';
import ThemeProvider from './theme/index.tsx';

const today = moment();
function App() {
  const schedule = useSchedule({
    date: today,
  });

  return (
    <ThemeProvider>
      <div className="p-3 py-4  min-h-[100vh]">
        <Schedule schedule={schedule} />
      </div>
    </ThemeProvider>
  );
}

export default App;
