const { VITE_GEO_API_URL, VITE_GEO_API_KEY, VITE_GEO_HOST } = import.meta.env;

export const getCities = async (input: string) => {
  try {
    const response = await fetch(
      `${VITE_GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': VITE_GEO_API_KEY || '',
          'X-RapidAPI-Host': VITE_GEO_HOST || '',
        },
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      return data.data;
    }
    return [];
  } catch (error) {
    return [];
  }
};
