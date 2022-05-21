interface ConfigProps {
  children: React.ReactNode;
}

export const Config = (props: ConfigProps) => <form {...props} className="config" method="post" />;

interface ConfigPanelProps {
  children: React.ReactNode;
}

export const ConfigPanel = (props: ConfigPanelProps) => (
  <fieldset {...props} className="config__panel" />
);

interface ConfigFieldProps extends React.ComponentProps<'input'> {
  label: string;
  name: string;
  defaultValue?: number | string;
}

export const ConfigField = ({ label, ...props }: ConfigFieldProps) => (
  <label>
    {label}
    <input {...props} autoComplete="off" />
  </label>
);

interface ConfigFooterProps {
  children: React.ReactNode;
}

export const ConfigFooter = (props: ConfigFooterProps) => (
  <div {...props} className="config__footer" />
);
