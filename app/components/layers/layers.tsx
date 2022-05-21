import clsx from 'clsx';

interface LayersProps {
  children: React.ReactNode;
}

export const Layers = (props: LayersProps) => <ol {...props} className="layers" />;

interface LayersItemProps {
  layerId?: number;
  active?: boolean;
  children: React.ReactNode;
}

export const LayersItem = ({ layerId, active = false, children }: LayersItemProps) => (
  <li className="layers__item">
    <a
      href={`/${layerId}`}
      className={clsx('layers__trigger', active && 'layers__trigger--active')}
    >
      {children}
    </a>
  </li>
);
