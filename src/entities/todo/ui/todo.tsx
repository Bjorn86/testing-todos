import { styled } from 'styled-components';

const TodoText = styled.p<{ $completed: boolean }>`
  width: 100%;
  padding: 15px;
  font-family: var(--family);
  font-size: var(--fs-m);
  font-weight: var(--fw-400);
  line-height: var(--lh-l);
  text-decoration: ${(props) => (props.$completed ? 'line-through' : 'none')};
  word-wrap: break-word;
`;

interface Props {
  completed: boolean;
  value: string;
}

export const Todo = ({ completed, value }: Props) => {
  return <TodoText $completed={completed}>{value}</TodoText>;
};
