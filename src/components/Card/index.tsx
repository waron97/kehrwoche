import classNames from 'classnames';
import { FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@theme';

// ----------------------------------------------------------------------------

interface CardProps {
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

const _Card: FC<CardProps> = (props) => {
  // -------------------------------------
  // Props destructuring
  // -------------------------------------

  const { className, contentClassName, children } = props;

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
      <div className={classNames([contentClassName, 'card-content'])}>
        {children}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------------

const Card = styled(_Card)<Theme>`
  & {
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

export default Card;
