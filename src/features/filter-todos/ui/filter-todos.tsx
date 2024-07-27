import { styled } from 'styled-components';
import testUtils from 'shared/lib/test';
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
  const wrapperTestId = testUtils.getTestIdAttribute('filter', 'wrapper');

  return (
    <Wrapper onClick={handleFilter} {...wrapperTestId}>
      {BUTTONS.map((filterButton) => (
        <FilterButton
          key={filterButton.id}
          text={filterButton.text}
          isActive={activeFilter === filterButton.text}
          testId={filterButton.id}
        />
      ))}
    </Wrapper>
  );
};
