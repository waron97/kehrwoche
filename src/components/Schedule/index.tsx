import { Week as WeekType } from '../../hooks/useSchedule';
import Week from '../Week';

interface ScheduleProps {
  schedule: WeekType[];
  className?: string;
}

export default function Schedule(props: ScheduleProps) {
  return (
    <div className="w-full flex flex-col gap-3 rounded shadow-lg p-2 bg-white">
      {props.schedule.map((week: WeekType) => {
        return <Week week={week} key={week.date.toISOString()} />;
      })}
    </div>
  );
}
