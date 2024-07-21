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
declare const __API_KEY__: string;
declare const __AUTH_DOMAIN__: string;
declare const __PROJECT_ID__: string;
declare const __STORAGE_BUCKET__: string;
declare const __MESSAGING_SENDER_ID__: string;
declare const __APP_ID__: string;
