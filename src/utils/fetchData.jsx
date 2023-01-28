export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com',
      'X-RapidAPI-Key': "00f9d43d4msh37d9cfff6dedf68p1fdbefjsn",
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '500f9d43d4msh37d9cfff6dedf68p1fdbefjsn',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };