import { useContext, useEffect, useState, MouseEvent } from 'react';
import { filterLSApi, FilterLSKeys } from 'shared/api/browser-storage';
import { TodosContext } from 'shared/api/context';
import { filterTodos } from '../lib/filterTodos/filterTodos';
import { FILTER } from '../model/constants';

export const useFilter = () => {
  const [activeFilter, setActiveFilter] = useState<string>(FILTER.ALL);
  const { todos, setFilteredTodos } = useContext(TodosContext);

  useEffect(() => {
    const filter = filterLSApi.getValue<string>(FilterLSKeys.FILTER);

    if (!filter) filterLSApi.setValue<string>(FilterLSKeys.FILTER, FILTER.ALL);
    if (filter && filter !== FILTER.ALL) {
      setActiveFilter(filter);
    }
  }, []);

  useEffect(() => {
    activeFilter === FILTER.ALL
      ? setFilteredTodos(todos)
      : setFilteredTodos(filterTodos(todos, activeFilter));
  }, [activeFilter, todos]);

  const handleFilter = (e: MouseEvent<HTMLDivElement>) => {
    const buttonText = (e.target as HTMLButtonElement).textContent;

    switch (buttonText) {
      case FILTER.ALL:
        setActiveFilter(FILTER.ALL);
        filterLSApi.setValue<string>(FilterLSKeys.FILTER, FILTER.ALL);
        break;
      case FILTER.ACTIVE:
        setActiveFilter(FILTER.ACTIVE);
        filterLSApi.setValue<string>(FilterLSKeys.FILTER, FILTER.ACTIVE);
        break;
      case FILTER.COMPLETED:
        setActiveFilter(FILTER.COMPLETED);
        filterLSApi.setValue<string>(FilterLSKeys.FILTER, FILTER.COMPLETED);
        break;
      default:
        break;
    }
  };

  return { activeFilter, handleFilter };
};
