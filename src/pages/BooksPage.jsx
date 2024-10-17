import { useParams } from 'react-router-dom';
import { useBookById } from '../hooks/useBookById.js';
import BookDetails from '../components/BookDetails.jsx';

const BooksPage = () => {
    const { bookId } = useParams();
    const { bookData, bookError } = useBookById(bookId);

    if (bookError) {
        return <div className="flex justify-center items-center h-screen bg-red-200">
            <div className="text-red-600 text-lg">Error: {bookError.message}</div>
        </div>
    }

    if (bookData) {
        return (
            <div>
                <h1 className="text-3xl font-bold text-center text-red-600 my-6">Book Information</h1>
                <BookDetails
                    id={bookData.id}
                    title={bookData.title}
                    isbn={bookData.isbn}
                    pageCount={bookData.pageCount}
                    authors={bookData.authors}
                />
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center h-screen bg-red-200">
            <div className="text-red-600 text-lg">Loading...</div>
        </div>
    )
}

export default BooksPage
