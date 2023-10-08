import classNames from 'classnames';
import moment from 'moment';
import { FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@theme';

import { ScheduleItem } from '../../../hooks/useSchedule/schedule';
import Card from '../../Card';
import Divider from '../../Divider';
import TaskBox from '../../TaskBox';

// ----------------------------------------------------------------------------

interface PlannerProps {
  className?: string;
  data: ScheduleItem[];
}

const _Planner: FC<PlannerProps> = (props) => {
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
    <Card className={classNames([className])}>
      <div className="items">
        {data.map((item) => {
          const { assignments, startDate } = item;
          return (
            <>
              <div className="item" key={moment(startDate).toISOString()}>
                <div className="week-title">
                  {moment(startDate).startOf('isoWeek').format('D MMM YYYY')}
                  {' - '}
                  {moment(startDate).endOf('isoWeek').format('D MMM YYYY')}
                </div>
                <div className="assignments">
                  {assignments.map((a) => (
                    <TaskBox
                      className="box"
                      key={`${a.task}-${a.assignedColor}`}
                      assignment={a}
                      size={'small'}
                    />
                  ))}
                </div>
              </div>
              <Divider />
            </>
          );
        })}
      </div>
    </Card>
  );
};

// ----------------------------------------------------------------------------

const Planner = styled(_Planner)<Theme>`
  & {
    .item {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .week-title {
        text-align: center;
        font-size: 14px;
        font-weight: 500;
      }

      .assignments {
        display: flex;
        gap: 12px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .box {
          flex-shrink: 0;
        }
      }
    }
  }
`;

export default Planner;
