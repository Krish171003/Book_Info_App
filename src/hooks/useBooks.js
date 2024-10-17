import { useState, useEffect } from "react";
import { fetchAllBooks } from "../api/bookService";

export const useBooks = () => {
    const [booksData, setBooksData] = useState(null);
    const [booksError, setBooksError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchAllBooks();
                setBooksData(data);
            } catch (error) {
                setBooksError(error);
            }
        }
        fetchData();
    }, []);

    return { booksData, booksError };
}
