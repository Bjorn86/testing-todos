import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { styled } from 'styled-components';
import { createTodo } from 'shared/api/firebase';
import { Icon, Icons } from 'shared/ui/icon';
import { Input } from 'shared/ui/input';
import { TEXT } from '../model/constants';
import { CreateTodoFormArguments } from '../model/types';

const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: var(--color-very-light-grey);
  border-bottom: 1px solid var(--color-light-grey);
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  padding: 15px;
`;

export const CreateTodo = () => {
  const { control, handleSubmit, reset } = useForm<CreateTodoFormArguments>({
    defaultValues: {
      todo: '',
    },
  });

  const onSubmit: SubmitHandler<CreateTodoFormArguments> = (data) => {
    createTodo(data.todo);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor='todo'>
        <IconWrapper>
          <Icon icon={Icons.CHEVRON_DOWN} width='24px' height='24px' />
        </IconWrapper>
        <Controller
          control={control}
          name='todo'
          render={({ field }) => (
            <Input
              type='text'
              id='todo'
              placeholder={TEXT.placeholder}
              maxLength={100}
              {...field}
            />
          )}
        />
      </Label>
    </Form>
  );
};
