import css from "./Contact.module.css";
import { FaUserSecret } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contact, onDelete, txtBtn }) => {
  const { id, name, number } = contact;
  return (
    <>
      <li id={id} className={css.item}>
        <div>
          <p>
            <FaUserSecret />
            {name}
          </p>
          <p>
            <FaPhone />
            {number}
          </p>
        </div>
        <button
          className={css.button}
          onClick={() => {
            onDelete(id);
          }}
        >
          {txtBtn}
        </button>
      </li>
    </>
  );
};

export default Contact;
