import { forwardRef } from 'react';
import { styled } from 'styled-components';
import testUtils from 'shared/lib/test';

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  background-color: var(--color-very-light-grey);
  font-family: var(--family);
  font-size: var(--fs-m);
  font-weight: var(--fw-400);
  line-height: var(--lh-l);
  color: var(--color-black);
  &::placeholder {
    color: var(--color-dark-grey);
  }
`;

interface Props {
  type: string;
  name?: string;
  id?: string;
  placeholder?: string | undefined;
  maxLength?: number;
  disabled?: boolean;
  testId?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, name, placeholder, maxLength, disabled = false, testId, ...rest }, ref) => {
    const inputTestId = testUtils.getTestIdAttribute('input', testId);

    return (
      <InputField
        ref={ref}
        type={type}
        placeholder={placeholder}
        name={name}
        maxLength={maxLength}
        disabled={disabled}
        {...inputTestId}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';
