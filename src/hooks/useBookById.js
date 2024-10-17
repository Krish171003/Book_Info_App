import { useEffect, useState } from "react";
import { fetchBookById } from "../api/bookService";

export const useBookById = (bookId) => {
    const [bookData, setBookData] = useState(null);
    const [bookError, setBookError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchBookById(bookId);
                setBookData(data);
            } catch (error) {
                setBookError(error);
            }
        }
        fetchData();
    }, [bookId]);

    return { bookData, bookError };
}
