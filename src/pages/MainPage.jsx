import BooksTable from "../components/BooksTable.jsx";
import { useBooks } from "../hooks/useBooks.js";

const MainPage = () => {
    const { booksData, booksError } = useBooks();

    if (booksError) {
        return <div className="flex justify-center items-center h-screen bg-red-200">
            <div className="text-red-600 text-lg">Error: {booksError.message}</div>
        </div>
    }

    if (booksData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black">
                <h1 className="text-3xl font-bold mb-8 text-red-600">Book List</h1>
                <BooksTable data={booksData} />
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center h-screen bg-red-200">
            <div className="text-red-600 text-lg">Loading...</div>
        </div>
    )
}

export default MainPage
