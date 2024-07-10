import ChevronDown from 'shared/assets/icons/chevron-down.svg';

export enum Icons {
  CHEVRON_DOWN = 'CHEVRON_DOWN',
}

export const ICONS: Record<Icons, SVGIcon> = {
  [Icons.CHEVRON_DOWN]: ChevronDown,
};
