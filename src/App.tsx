import Schedule from './components/Schedule';
import Summary from './components/Summary';
import useSchedule from './hooks/useSchedule';

function App() {
  const { schedule } = useSchedule();

  return (
    <div className="p-3 py-4  min-h-[100vh]">
      <Summary schedule={schedule} className="mb-2" />
      <Schedule schedule={schedule} />
    </div>
  );
}

export default App;
