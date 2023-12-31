import classNames from 'classnames';
import { FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@theme';

// ----------------------------------------------------------------------------

interface DividerProps {
  className?: string;
  margin?: string;
}

const _Divider: FC<DividerProps> = (props) => {
  // -------------------------------------
  // Props destructuring
  // -------------------------------------

  const { className } = props;

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
    <div
      className={classNames([className])}
      style={{
        margin: `${props.margin || '24px'} 0px`,
      }}
    />
  );
};

// ----------------------------------------------------------------------------

const Divider = styled(_Divider)<Theme>`
  & {
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export default Divider;
