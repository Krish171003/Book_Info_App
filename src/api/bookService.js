const API_URL = "https://softwium.com/api/"

const fetchFromAPI = async (endpoint) => {
    const res = await fetch(`${API_URL}${endpoint}`);
    const data = await res.json();
    return data;
}

export const fetchAllBooks = () => fetchFromAPI(`/books`)
export const fetchBookById = (id) => fetchFromAPI(`/books/${id}`)
