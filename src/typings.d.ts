declare module "box-react" {
  import { Properties } from "csstype";
  import { ComponentClass } from "react";

  type Falsey<T> = { [P in keyof T]?: T[P] | false | null };
  interface ExactCSSProperties extends Falsey<Properties<string | number>> {}
  interface CSSProperties extends ExactCSSProperties, Record<string, any> {}

  export const Box: ComponentClass<CSSProperties>;
  export const Block: ComponentClass<CSSProperties>;
  export const Flex: ComponentClass<CSSProperties>;
  export const Grid: ComponentClass<CSSProperties>;
  export const Inline: ComponentClass<CSSProperties>;

  export const InlineBlock: ComponentClass<CSSProperties>;
  export const InlineFlex: ComponentClass<CSSProperties>;

  export const factory: (displayName: string) => ComponentClass<CSSProperties>;
}
