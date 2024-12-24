import { Link } from "react-router-dom";

const Booktable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-red-600 text-white">
            <th className="px-6 py-3 text-center text-sm font-bold uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-center text-sm font-bold uppercase tracking-wider">Title</th>
          </tr>
        </thead>
        <tbody className="bg-black divide-y divide-gray-700">
          {data.map((book) => (
            <tr key={book.id} className="hover:bg-gray-800 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap w-20 text-red-300 font-bold">{book.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/books/${book.id}`} className="text-red-400 hover:underline">
                  {book.title}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booktable;
