import { useForm, Controller } from 'react-hook-form';
import { styled } from 'styled-components';
import { Input } from 'shared/ui/input/ui/input';
import { TEXT } from '../model/constants';

const Container = styled.main`
  width: var(--base-width);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0 auto;
  font-family: var(--family);
  font-size: var(--fs-xxl);
  font-weight: var(--fw-300);
  line-height: var(--lh-xxl);
  color: var(--color-dark-green);
`;

export const Main = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      test: '',
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  return (
    <Container>
      <Title>{TEXT.title}</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='test'
          render={({ field }) => <Input type='text' {...field} placeholder={'some'} />}
        />
      </form>
    </Container>
  );
};
