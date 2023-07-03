import moment from 'moment';
import { useMemo, useState } from 'react';

import { colorAfterIters } from './colors';
import { start } from './start';

const now = moment().startOf('isoWeek');
const then = moment(start.date).startOf('isoWeek');

export interface Week {
  date: moment.Moment;
  color: string;
}

type Ret = { schedule: Week[] };

export default function useSchedule(): Ret {
  const [weeksToShow, setWeeksToShow] = useState(20);

  const thisWeekColor = useMemo(() => {
    const diff = now.diff(then, 'weeks');
    return colorAfterIters(diff, start.color);
    // eslint-disable-next-line
  }, []);

  const schedule = useMemo(() => {
    const ret = [];
    for (let i = 0; i < weeksToShow; i++) {
      const date = moment(now).add(i, 'weeks');
      const color = colorAfterIters(i, thisWeekColor);
      ret.push({ date, color });
    }
    return ret;
  }, [weeksToShow, thisWeekColor]);

  return { schedule };
}
