import { ComponentType } from 'react';

type EnhancedProps = {
  color: string;
};

export function colored<BaseProps>(BaseComponent: ComponentType<BaseProps>) {
  function EnhancedComponent({ color, ...baseProps }: BaseProps & EnhancedProps) {
    return (
      <div style={{ color: color }}>
        <BaseComponent {...baseProps as unknown as BaseProps} />
      </div>
    );
  }

  EnhancedComponent.displayName = `colored(${BaseComponent.displayName ?? BaseComponent.name})`;

  return EnhancedComponent;
}
