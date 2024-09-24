const API_URL = 'https://rickandmortyapi.com/api/character'; // Cambia esto a tu URL real

export const fetchRickAndMortyData = async () : Promise<any> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Error al obtener datos');
  }
  
  return response.json();
};
