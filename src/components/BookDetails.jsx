const BookDetails = ({ id, title, isbn, pageCount, authors }) => {
    return (
        <div className="max-w-md mx-auto bg-black text-red-400 shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-red-600 text-white">
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            <div className="px-6 py-4">
                <p className="text-red-300"><span className="font-semibold">ID:</span> {id}</p>
                <p className="text-red-300"><span className="font-semibold">ISBN:</span> {isbn}</p>
                <p className="text-red-300"><span className="font-semibold">Page Count:</span> {pageCount}</p>
                <p className="text-red-300"><span className="font-semibold">Authors:</span> {authors.join(', ')}</p>
            </div>
        </div>
    )
}

export default BookDetails
