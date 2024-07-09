import { forwardRef } from 'react';
import { styled } from 'styled-components';

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  background-color: var(--color-light-grey);
  font-family: var(--family);
  font-size: var(--fs-m);
  font-weight: var(--fw-400);
  line-height: var(--lh-l);
  &:disabled {
    background-color: var(--color-grey);
  }
`;

interface Props {
  type: string;
  name?: string;
  placeholder?: string | undefined;
  maxLength?: number;
  disabled?: boolean;
  testId?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, name, placeholder, maxLength, disabled = false, testId, ...rest }, ref) => {
    return (
      <InputField
        ref={ref}
        type={type}
        placeholder={placeholder}
        name={name}
        maxLength={maxLength}
        disabled={disabled}
        data-testid={testId}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';
