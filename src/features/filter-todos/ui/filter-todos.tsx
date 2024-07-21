import { styled } from 'styled-components';
import { FilterButton } from './filter-button/filter-button';
import { useFilter } from '../hooks/useFilter';
import { BUTTONS } from '../model/constants';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FilterTodos = () => {
  const { activeFilter, handleFilter } = useFilter();

  return (
    <Wrapper onClick={handleFilter}>
      {BUTTONS.map((filterButton) => (
        <FilterButton
          key={filterButton.id}
          text={filterButton.text}
          isActive={activeFilter === filterButton.text}
        />
      ))}
    </Wrapper>
  );
};
