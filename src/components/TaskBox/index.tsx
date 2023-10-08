import classNames from 'classnames';
import { FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@theme';

import { ScheduledTask } from '../../hooks/useSchedule/schedule';
import { Task, tasks } from '../../hooks/useSchedule/tasks';

// ----------------------------------------------------------------------------

interface TaskBoxProps {
  className?: string;
  assignment: ScheduledTask;
  size?: 'large' | 'small';
}

const _TaskBox: FC<TaskBoxProps> = (props) => {
  // -------------------------------------
  // Props destructuring
  // -------------------------------------

  const { className, assignment, size = 'large' } = props;

  // -------------------------------------
  // Hooks (e.g. useState, useMemo ...)
  // -------------------------------------

  const task = tasks.find((t) => t.code === assignment.task) as Task;

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
    <div
      className={classNames([className])}
      style={{
        backgroundColor: assignment.assignedColor,
        width: dim(size),
        height: dim(size),
      }}
    >
      <task.icon
        style={{
          width: dimSvg(size),
          height: dimSvg(size),
        }}
        width={dimSvg(size)}
        height={dimSvg(size)}
      />
      {size === 'large' && <div className="task-name">{task.name}</div>}
    </div>
  );
};

// ----------------------------------------------------------------------------

const dim = (size: 'large' | 'small') => (size === 'large' ? 100 : 40);
const dimSvg = (size: 'large' | 'small') => (size === 'large' ? 50 : 20);

const TaskBox = styled(_TaskBox)<Theme>`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    gap: 12px;

    svg {
    }

    .task-name {
      font-size: 15px;
      font-weight: 500;
    }
  }
`;

export default TaskBox;
