export const getRatingColor = rating => {
  if (rating >= 7) return '#778D45';
  if (rating >= 5 && rating < 7) return '#ffa902 ';

  return '#c41e3a';
};
