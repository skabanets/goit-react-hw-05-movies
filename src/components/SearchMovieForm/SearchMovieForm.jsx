import { useState } from 'react';
import {
  MovieForm,
  MovieFormInput,
  MovieFormSubmitBtn,
} from './SearchMovieForm.styled';

export const SearchMovieForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query.trim().toLowerCase());
    setQuery('');
  };

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <MovieForm onSubmit={handleSubmit}>
      <MovieFormInput
        type="text"
        name="name"
        value={query}
        onChange={handleChange}
        required
      />
      <MovieFormSubmitBtn type="submit">Search</MovieFormSubmitBtn>
    </MovieForm>
  );
};
