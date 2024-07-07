declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare type SVGIcon = React.VFC<React.SVGProps<SVGSVGElement>>;

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  const SVG: SVGIcon;
  export default SVG;
}

declare const __MODE__: 'production' | 'development';
