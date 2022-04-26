import CSS from 'csstype';

export interface AdditionalComponentProps {
  cursor?: CSS.Properties['cursor'];
  opacity?: CSS.Properties['opacity'];
  overflow?: CSS.Properties['overflow'];
  className?: string;
  disableDefaultStyles?: boolean;
}
