import React from 'react';

const Groceries = ({ id, name, purchased, todoClick }) => (
  <li
    style={ purchased ? {...stylesb.groceries, ...stylesb.purchased } : stylesb.groceries }
    onClick={ () => todoClick(id) }
    >
      { name }
    </li>
);
// identfier styles has already been declared error when named styles
const stylesb = {
  groceries: { cursor: 'pointer' },
  purchased: { color: 'grey', textDecoration: 'line-through' },
};

export default Groceries;