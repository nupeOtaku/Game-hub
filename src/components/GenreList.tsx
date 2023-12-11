import useGenre from '../hooks/useGenre';

const GenreList = () => {
  const { data } = useGenre();

  console.log(data);

  return (
    <ul>
      {data?.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
