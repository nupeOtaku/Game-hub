import ms from 'ms';
import APIClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import { Screenshot } from '../entities/Screenshot';

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useScreenshots;
