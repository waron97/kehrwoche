import moment from 'moment';

import { Week as WeekType } from '../../hooks/useSchedule';

interface WeekProps {
  className?: string;
  week: WeekType;
}

export default function Week(props: WeekProps) {
  const format = 'D MMMM';
  const start = moment(props.week.date).startOf('isoWeek').format(format);
  const end = moment(props.week.date).endOf('isoWeek').format(format);

  return (
    <div
      className={`${props.className} border-b-[1px] rounded p-2 flex items-center`}
      style={{ background: props.week.color }}
    >
      {/* <div
        className="w-[8px] h-[40px] rounded"
        style={{ background: props.week.color }}
      /> */}
      <span className="block font-medium text-sm text-black flex-1 ">
        {start} - {end}
      </span>
    </div>
  );
}
