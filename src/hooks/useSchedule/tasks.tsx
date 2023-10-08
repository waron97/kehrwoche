import { ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';
import { FaBed, FaBroomBall, FaKitchenSet } from 'react-icons/fa6';
import { LiaToiletPaperSolid } from 'react-icons/lia';

export enum TaskCode {
  Bathrooms = 'bathrooms',
  Kitchen = 'kitchen',
  Floors = 'floors',
  Break = 'break',
}

export type Task = {
  code: TaskCode;
  icon: (props?: IconBaseProps) => ReactNode;
  name: string;
};

export const tasks: Task[] = [
  {
    code: TaskCode.Bathrooms,
    icon: (props) => <LiaToiletPaperSolid {...props} />,
    name: 'Bathrooms',
  },
  {
    code: TaskCode.Break,
    icon: (props) => <FaBed {...props} />,
    name: 'Break',
  },
  {
    code: TaskCode.Kitchen,
    icon: (props) => <FaKitchenSet {...props} />,
    name: 'Kitchen',
  },
  {
    code: TaskCode.Break,
    icon: (props) => <FaBed {...props} />,
    name: 'Break',
  },
  {
    code: TaskCode.Floors,
    icon: (props) => <FaBroomBall {...props} />,
    name: 'Floors',
  },
];
