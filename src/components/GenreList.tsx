import useGenre from '../hooks/useGenre';

const GenreList = () => {
  const { genre, error, isLoading } = useGenre();

  console.log(genre);

  return (
    <ul>
      {genre?.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
