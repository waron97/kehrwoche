import classNames from 'classnames';
import moment from 'moment';
import { FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@theme';

import { ScheduleItem } from '../../../hooks/useSchedule/schedule';
import Card from '../../Card';
import TaskBox from '../../TaskBox';

// ----------------------------------------------------------------------------

interface CurrentWeekProps {
  className?: string;
  data: ScheduleItem;
}

const _CurrentWeek: FC<CurrentWeekProps> = (props) => {
  // -------------------------------------
  // Props destructuring
  // -------------------------------------

  const { className, data } = props;

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
      <Card>
        <h2 className="title">
          {moment().startOf('isoWeek').format('D MMM YYYY')} -{' '}
          {moment().endOf('isoWeek').format('D MMM YYYY')}
        </h2>
        <div className="assignments">
          {data.assignments.map((a) => (
            <TaskBox
              className="box"
              key={`${a.task}-${a.assignedColor}`}
              assignment={a}
              size={'large'}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

// ----------------------------------------------------------------------------

const CurrentWeek = styled(_CurrentWeek)<Theme>`
  & {
    .title {
      text-align: center;
      margin-bottom: 24px;
      font-size: 18px;
      font-weight: 500;
    }

    .assignments {
      display: flex;
      gap: 24px;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .box {
        flex-shrink: 0;
      }
    }
  }
`;

export default CurrentWeek;
