import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.ContactItem}>
          <p className={s.ContactData}>
            {name}: {number}
          </p>
          <button
            onClick={() => onDeleteContact(id)}
            className={s.ContactDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
