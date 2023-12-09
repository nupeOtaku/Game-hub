import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getGames = async () => {
    try {
      const res = await apiClient.get<FetchGamesResponse>('/games');

      const results = res.data.results;

      setGames(results);
      console.log(results);

      setIsLoading(false);
    } catch (err: never) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return <div></div>;
};

export default GameGrid;
