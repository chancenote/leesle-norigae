declare module "react-simple-maps" {
  import { ComponentType, CSSProperties, ReactNode } from "react";

  interface ProjectionConfig {
    rotate?: [number, number, number];
    scale?: number;
    center?: [number, number];
  }

  interface ComposableMapProps {
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: CSSProperties;
    children?: ReactNode;
    projection?: string;
  }

  interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    children?: ReactNode;
    onMoveStart?: (position: { coordinates: [number, number]; zoom: number }) => void;
    onMove?: (position: { coordinates: [number, number]; zoom: number }) => void;
    onMoveEnd?: (position: { coordinates: [number, number]; zoom: number }) => void;
    minZoom?: number;
    maxZoom?: number;
  }

  interface GeographiesChildrenArgs {
    geographies: Array<{
      rsmKey: string;
      id: string;
      properties: Record<string, string>;
    }>;
  }

  interface GeographiesProps {
    geography: string | object;
    children: (args: GeographiesChildrenArgs) => ReactNode;
  }

  interface GeographyStyleProps {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    outline?: string;
    transition?: string;
    cursor?: string;
  }

  interface GeographyProps {
    geography: object;
    key?: string;
    style?: {
      default?: GeographyStyleProps;
      hover?: GeographyStyleProps;
      pressed?: GeographyStyleProps;
    };
    onMouseEnter?: (event: object) => void;
    onMouseMove?: (event: object) => void;
    onMouseLeave?: (event: object) => void;
    onClick?: (event: object) => void;
    "aria-label"?: string;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
}
