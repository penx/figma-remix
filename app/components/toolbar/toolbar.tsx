interface ToolbarProps {
  children: React.ReactNode;
}

export const Toolbar = (props: ToolbarProps) => (
  <form {...props} className="toolbar" action="/new/#shape" />
);

interface ToolbarItemProps {
  type: 'circle' | 'rect';
  children: React.ReactNode;
}

export const ToolbarItem = ({ type, children }: ToolbarItemProps) => (
  <button name="shape" value={type} className={`toolbar__button toolbar__button--${type}`}>
    {children}
    <span className="toolbar__icon" />
  </button>
);
