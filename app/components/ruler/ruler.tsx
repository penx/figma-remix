import clsx from 'clsx';

interface RulerProps {
  orientation: 'horizontal' | 'vertical';
}

export const Ruler = ({ orientation }: RulerProps) => (
  <ul className={clsx('ruler', `ruler--${orientation === 'horizontal' ? 'x' : 'y'}`)}>
    {Array.from({ length: 343 }).map((_, index) => (
      <li key={index} />
    ))}
  </ul>
);
