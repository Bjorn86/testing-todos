import CheckCircle from 'shared/assets/icons/check-circle.svg';
import ChevronDown from 'shared/assets/icons/chevron-down.svg';
import Circle from 'shared/assets/icons/circle.svg';
import Spinner from 'shared/assets/icons/preloader.svg';

export enum Icons {
  CHEVRON_DOWN = 'CHEVRON_DOWN',
  CHECK_CIRCLE = 'CHECK_CIRCLE',
  CIRCLE = 'CIRCLE',
  SPINNER = 'SPINNER',
}

export const ICONS: Record<Icons, SVGIcon> = {
  [Icons.CHEVRON_DOWN]: ChevronDown,
  [Icons.CHECK_CIRCLE]: CheckCircle,
  [Icons.CIRCLE]: Circle,
  [Icons.SPINNER]: Spinner,
};
