import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactListItem.module.css';
import { changeFilter } from 'redux/filterReducer';

const { contact_item, contact_info, remove_button } = css;

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const onRemoveBtnClick = () => {
    removeContactFromList(id);
  };

  const removeContactFromList = id => {
    dispatch(deleteContact(id));
    dispatch(changeFilter(''));
  };

  return (
    <li className={contact_item}>
      <p className={contact_info}>
        {name}: {phone}
      </p>
      <button
        type="button"
        className={remove_button}
        aria-label="Remove contact"
        onClick={onRemoveBtnClick}
      >
        Remove
      </button>
    </li>
  );
};

export default ContactListItem;
