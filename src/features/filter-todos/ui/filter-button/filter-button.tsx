import { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import testUtils from 'shared/lib/test';

const Button = styled.button<{ $isActive: boolean }>`
  padding: 5px 8px;
  background-color: transparent;
  border: ${(props) =>
    props.$isActive ? '1px solid var(--color-dark-green)' : '1px solid transparent'};
  border-radius: var(--br-m);
  font-family: var(--family);
  font-size: var(--fs-s);
  font-weight: var(--fw-300);
  line-height: var(--lh-s);
  color: var(--color-black);
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isActive: boolean;
  testId?: string;
}

export const FilterButton = ({ text, isActive, testId }: Props) => {
  const filterBtnTestId = testUtils.getTestIdAttribute('filter-btn', testId);

  return (
    <Button type='button' $isActive={isActive} {...filterBtnTestId}>
      {text}
    </Button>
  );
};
