import { useQuery } from '@tanstack/react-query';
import { fetchRickAndMortyData } from '../services/rickAndMortyService';

export const useFetchRickAndMorty = () => {
  return useQuery({
    queryKey: ['dataRickAndMorty'],
    queryFn: fetchRickAndMortyData
  });
};
