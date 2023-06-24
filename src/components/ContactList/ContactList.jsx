import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {selectFilteredContacts} from "../../redux/selectors";
import {deleteContact} from "../../operations/operations";

import {StyledList} from './styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <StyledList>
      {filteredContacts.map(({ id, name, number }) => (
        <li className='list-item' key={id}>
          <p>{name}</p>
          <span>{number}</span>
          <button
            type='button'
            className='delete-button'
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </StyledList>
  );
};

