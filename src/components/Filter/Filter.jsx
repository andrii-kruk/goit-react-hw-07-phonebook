import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterReducer';

import css from './Filter.module.css';

const { filter_wrapper, filter_input, filter_button } = css;

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = ({ target }) => {
    dispatch(changeFilter(target.value));
  };

  const onFilterButtonClick = () => {
    dispatch(changeFilter(''));
  };
  return (
    <div className={filter_wrapper}>
      <input
        type="text"
        id="filter"
        name="filter"
        className={filter_input}
        placeholder="Search contacts..."
        onChange={filterContacts}
        value={filter}
      />
      <button
        className={filter_button}
        type="button"
        onClick={onFilterButtonClick}
      >
        &#10006;
      </button>
    </div>
  );
};
