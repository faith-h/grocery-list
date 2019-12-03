import React from 'react';

// a little fuzzy on the details here
// especially in const Footer

const styles = {
  link: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',
    marginLeft: '5px',
    marginRight: '5px',
  }
};

const filterLink = (current, name, setFilter) => {
  if (current === name)
  return <span>{name}</span>
  else
  return <span style={styles.link} onClick={() => setFilter(name) }>{name}</span>
};

const Footer = ({filter, setFilter}) => (
  <div>
    { ['All', 'Active', 'Purchased'].map( f => filterLink(filter, f, setFilter) ) }
  </div>
);

export default Footer;