import moment from 'moment';

import { Week } from '../../hooks/useSchedule';

interface SummaryProps {
  schedule: Week[];
  className?: string;
}

export default function Summary(props: SummaryProps) {
  const week = props.schedule[0];
  console.log(week);

  const format = 'D MMMM';

  function renderWeek(week: Week, text: string) {
    const firstDay = moment(week.date).startOf('isoWeek').format(format);
    const lastDay = moment(week.date).endOf('isoWeek').format(format);
    return (
      <div className="flex flex-row items-center">
        <span>
          {text} ({firstDay} - {lastDay}):
        </span>
        <div
          className=" ml-2 w-[20px] h-[20px] rounded-full"
          style={{ background: week.color }}
        />
      </div>
    );
  }

  return (
    <div
      className={`${props.className} w-full flex flex-col gap-1 rounded shadow-lg p-2 bg-white`}
    >
      {renderWeek(week, 'This week')}
      {renderWeek(props.schedule[1], 'Next week')}
    </div>
  );
}
