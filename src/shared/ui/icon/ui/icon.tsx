import { CSSProperties } from 'react';
import testUtils from 'shared/lib/test';
import { ICONS, Icons } from '../model/constants';

interface Props {
  icon: Icons;
  width: string;
  height: string;
  style?: CSSProperties;
  testId?: string;
}

export const Icon = ({ icon, width, height, testId, ...rest }: Props) => {
  const Icon = ICONS[icon];
  const iconTestId = testUtils.getTestIdAttribute('icon', testId);

  return <Icon width={width} height={height} {...iconTestId} {...rest} />;
};
