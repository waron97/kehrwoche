import moment from 'moment';

import { TaskCode } from './tasks';

export type ScheduledTask = {
  task: TaskCode;
  assignedColor: string;
};

export type ScheduleItem = {
  assignments: ScheduledTask[];
  startDate: moment.Moment;
};

export type Schedule = {
  current: ScheduleItem;
  planner: ScheduleItem[];
};
