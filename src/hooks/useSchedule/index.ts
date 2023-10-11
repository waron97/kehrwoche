import moment from 'moment';
import { useMemo, useState } from 'react';

import { colorSequence } from './colors';
import { Schedule, ScheduleItem, ScheduledTask } from './schedule';
import { TaskCode, tasks } from './tasks';

type Params = {
  date: moment.Moment;
};

export default function useSchedule(params: Params): Schedule {
  const [firstInstance] = useState(getFirstInstance());

  const schedule: Schedule = useMemo(() => {
    const diffWeeks = moment(params.date).diff(
      firstInstance.startDate,
      'weeks'
    );
    const current = getAssignmentsAfter(diffWeeks);
    const showWeeks = 8;
    const planner: ScheduleItem[] = [];
    for (let i = 1; i < showWeeks + 1; i++) {
      planner.push(getAssignmentsAfter(diffWeeks + i));
    }

    return {
      current,
      planner,
    };

    // eslint-disable-next-line
  }, [params.date.toISOString()]);

  function getAssignmentsAfter(iters: number): ScheduleItem {
    const numTasks = tasks.length;
    const shifts = iters % numTasks;
    let scheduleItem: ScheduleItem = firstInstance;
    for (let i = 0; i < shifts; i++) {
      scheduleItem = getNextAssignments(scheduleItem);
    }
    return {
      assignments: scheduleItem.assignments,
      startDate: moment(firstInstance.startDate).add(iters, 'weeks'),
    };
  }

  function getNextAssignments(item: ScheduleItem): ScheduleItem {
    const prevOrder = item.assignments.map((a) => a.assignedColor);
    const newOrder = [
      prevOrder[prevOrder.length - 1],
      ...prevOrder.slice(0, prevOrder.length - 1),
    ];
    const newAssignments: ScheduledTask[] = [];
    for (let i = 0; i < newOrder.length; i++) {
      const task = tasks[i].code;
      const assignedColor = newOrder[i];
      newAssignments.push({
        assignedColor,
        task,
      });
    }
    return {
      startDate: moment(item.startDate).add(1, 'week'),
      assignments: newAssignments,
    };
  }

  return schedule;
}

function getFirstInstance(): ScheduleItem {
  const assignments: ScheduledTask[] = [
    { task: TaskCode.Bathrooms, assignedColor: colorSequence.green },
    { task: TaskCode.Break, assignedColor: colorSequence.blue },
    { task: TaskCode.Kitchen, assignedColor: colorSequence.red },
    { task: TaskCode.Break, assignedColor: colorSequence.purple },
    { task: TaskCode.Floors, assignedColor: colorSequence.yellow },
  ];
  return {
    startDate: moment('2023-10-11').startOf('isoWeek'),
    assignments,
  };
}
