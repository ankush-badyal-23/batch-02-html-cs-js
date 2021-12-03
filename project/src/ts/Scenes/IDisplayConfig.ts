import { ISkeletonData } from "@pixi-spine/base";
import { ITextStyle } from "@pixi/text";
import { IBitmapTextStyle } from "@pixi/text-bitmap";

export interface IDisplayConfig {
  name: string;
  view: TViewConfig;
}

export type TViewConfig = { [key: string]: IComponentConfig };

export interface IComponentConfig {
  type: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  scaleX?: number;
  scaleY?: number;
  rotation?: number;
  alpha?: number;
  anchorX?: number;
  anchorY?: number;
  visible?: boolean;
  interactive?: boolean;
  buttonMode?: boolean;
  children?: TViewConfig;
  name: string;
  texture?: string;
  textures?: string | string[];
  loop?: boolean;
  animationSpeed?: number;
  alignCenter?: boolean;
  text?: string;
  style?: Partial<ITextStyle | IBitmapTextStyle>;
  skeletonData?: ISkeletonData;
}
