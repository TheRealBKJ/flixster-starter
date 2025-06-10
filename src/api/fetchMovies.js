const API_KEY = import.meta.env.VITE_API_KEY;

//I put this function in a singular file so i can make edits and use it for other functions easier 
export async function fetchMovies(page = 1, urlSearch) {
    const url = `${urlSearch}${page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    //using try catch block because of quickness and cleanliness
    try{
        const response = await fetch(url,options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error){
        console.error('failed to fetch movies',error);
        throw error;
    }
}

