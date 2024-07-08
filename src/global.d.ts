declare type SVGIcon = React.VFC<React.SVGProps<SVGSVGElement>>;

declare module '*.woff';
declare module '*.woff2';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  const SVG: SVGIcon;
  export default SVG;
}

declare const __MODE__: 'production' | 'development';
