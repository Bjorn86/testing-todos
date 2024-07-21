import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { ROUTE_PATHS } from 'shared/model/constants/paths';
import { TEXT } from '../model/constants';

const Wrapper = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Title = styled.h1`
  font-family: var(--family);
  font-size: var(--fs-xl);
  font-weight: var(--fw-400);
  line-height: var(--lh-l);
  color: var(--color-dark-green);
`;

const Info = styled.p`
  font-family: var(--family);
  font-size: var(--fs-xxl);
  font-weight: var(--fw-500);
  line-height: var(--lh-xl);
  color: var(--color-black);
`;

const StyledLink = styled(Link)`
  font-family: var(--family);
  font-size: var(--fs-l);
  font-weight: var(--fw-300);
  line-height: var(--lh-m);
  color: var(--color-black);
  text-decoration: none;
  transition: opacity 0.5s;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.6;
  }
`;

export const NotFound = () => {
  return (
    <Wrapper>
      <Info>{TEXT.code}</Info>
      <Title>{TEXT.title}</Title>
      <StyledLink to={ROUTE_PATHS.MAIN}>{TEXT.link}</StyledLink>
    </Wrapper>
  );
};
