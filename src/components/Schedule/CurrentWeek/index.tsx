import classNames from 'classnames';
import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Theme } from '@theme';

import { ScheduleItem } from '../../../hooks/useSchedule/schedule';
import { TaskCode } from '../../../hooks/useSchedule/tasks';
import Card from '../../Card';
import Divider from '../../Divider';
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

  const [vw, setVW] = useState(window.innerWidth);

  // -------------------------------------
  // Effects
  // -------------------------------------

  useEffect(() => {
    const handleResize = () => setVW(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // -------------------------------------
  // Component functions
  // -------------------------------------

  function renderDesktop() {
    return (
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
    );
  }

  function renderMobile() {
    return (
      <div className="assignments">
        <div className="assignments-inactive">
          {data.assignments
            .filter((a) => {
              return a.task === TaskCode.Break;
            })
            .map((a) => {
              return (
                <TaskBox
                  className="box"
                  key={`${a.task}-${a.assignedColor}`}
                  assignment={a}
                  size={'small'}
                />
              );
            })}
        </div>
        <Divider margin="24px" />
        <div className="assignments-active">
          {data.assignments
            .filter((a) => {
              return a.task !== TaskCode.Break;
            })
            .map((a) => {
              return (
                <TaskBox
                  className="box"
                  key={`${a.task}-${a.assignedColor}`}
                  assignment={a}
                  size={'large'}
                />
              );
            })}
        </div>
      </div>
    );
  }

  // -------------------------------------
  // Component local variables
  // -------------------------------------

  const isMobile = vw <= 576;

  return (
    <div className={classNames([className])}>
      <Card>
        <h2 className="title">
          {moment().startOf('isoWeek').format('D MMM YYYY')} -{' '}
          {moment().endOf('isoWeek').format('D MMM YYYY')}
        </h2>
        {isMobile ? renderMobile() : renderDesktop()}
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

    @media (max-width: 576px) {
      .assignments {
        flex-direction: column;
        gap: 0;
        .assignments-active,
        .assignments-inactive {
          display: flex;
          align-items: center;
          gap: 12px;
        }
      }
    }
  }
`;

export default CurrentWeek;
