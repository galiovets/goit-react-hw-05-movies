import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Form, FormInput, Button } from './Searchbar.styled';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter your request', {
        duration: 3000,
        style: {
          borderRadius: '10px',
          background: 'white',
          color: 'black',
          padding: '10px',
          textAlign: 'center',
        },
      });
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput type="text" placeholder="Search movies" value={query} onChange={handleChange} />
      <Button type="submit">Search</Button>
    </Form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
