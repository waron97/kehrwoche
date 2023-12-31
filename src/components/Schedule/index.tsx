import classNames from 'classnames';
import { FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@theme';

import { Schedule as ScheduleType } from '../../hooks/useSchedule/schedule';
import CurrentWeek from './CurrentWeek';
import Planner from './Planner';

// ----------------------------------------------------------------------------

interface ScheduleProps {
  className?: string;
  schedule: ScheduleType;
}

const _Schedule: FC<ScheduleProps> = (props) => {
  // -------------------------------------
  // Props destructuring
  // -------------------------------------

  const { className, schedule } = props;

  // -------------------------------------
  // Hooks (e.g. useState, useMemo ...)
  // -------------------------------------

  // -------------------------------------
  // Effects
  // -------------------------------------

  // -------------------------------------
  // Component functions
  // -------------------------------------

  // -------------------------------------
  // Component local variables
  // -------------------------------------

  return (
    <div className={classNames([className])}>
      <CurrentWeek data={schedule.current} />
      <Planner data={schedule.planner} />
    </div>
  );
};

// ----------------------------------------------------------------------------

const Schedule = styled(_Schedule)<Theme>`
  & {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export default Schedule;
