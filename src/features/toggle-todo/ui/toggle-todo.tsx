import { styled } from 'styled-components';
import { updateTodoStatus } from 'shared/api/firebase';
import testUtils from 'shared/lib/test';
import { Icon, Icons } from 'shared/ui/icon';
import { TEXT } from '../model/constants';

const Switcher = styled.button`
  width: 54px;
  padding: 15px;
  align-self: center;
  background-color: var(--color-white);
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;

interface Props {
  completed: boolean;
  id: string;
}

export const ToggleTodo = ({ completed, id }: Props) => {
  const switcherTestId = testUtils.getTestIdAttribute('switcher', 'todo');

  const handleClick = () => {
    updateTodoStatus(id, !completed);
  };

  return (
    <Switcher
      type='button'
      onClick={handleClick}
      aria-label={completed ? TEXT.completed : TEXT.uncompleted}
      {...switcherTestId}
    >
      {completed ? (
        <Icon icon={Icons.CHECK_CIRCLE} width='24px' height='24px' testId={'completed'} />
      ) : (
        <Icon icon={Icons.CIRCLE} width='24px' height='24px' testId={'uncompleted'} />
      )}
    </Switcher>
  );
};
