declare module 'box-react' {
  import { ComponentClass, CSSProperties, DOMAttributes } from 'react';

  export interface BoxProps
    extends CSSProperties,
      DOMAttributes<HTMLElement>,
      Record<string, any> {
    is?: keyof JSX.IntrinsicElements;
  }

  type IntrinsicComponentClass = ComponentClass<BoxProps>;

  export const Text: IntrinsicComponentClass;
  export const Box: IntrinsicComponentClass;
  export const Block: IntrinsicComponentClass;
  export const Flex: IntrinsicComponentClass;
  export const Grid: IntrinsicComponentClass;
  export const Inline: IntrinsicComponentClass;

  export const InlineBlock: IntrinsicComponentClass;
  export const InlineFlex: IntrinsicComponentClass;

  export const factory: (
    displayName: string,
    defaultProps?: BoxProps
  ) => IntrinsicComponentClass;
}
