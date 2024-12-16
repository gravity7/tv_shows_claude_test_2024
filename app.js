const MovieDatabase = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'ascending' });

  const movies = [
    {
      title: "A Bittersweet Life",
      country: "Korea",
      category: "Action",
      theme: "",
      imdb: "7.5",
      myRating: "",
      tags: "DNF - poor quality streaming",
      year: "2005",
      channel: "Prime IMDB SD"
    },
    // ... [all other movies] ...
  ];

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortedMovies = () => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (sortConfig.key === 'year' || sortConfig.key === 'imdb') {
        return sortConfig.direction === 'ascending' 
          ? parseFloat(a[sortConfig.key]) - parseFloat(b[sortConfig.key])
          : parseFloat(b[sortConfig.key]) - parseFloat(a[sortConfig.key]);
      }

      if (sortConfig.key === 'myRating') {
        const ratingOrder = { '*****': 5, '****': 4, '***': 3, '**': 2, '*': 1, '': 0 };
        return sortConfig.direction === 'ascending'
          ? ratingOrder[a[sortConfig.key]] - ratingOrder[b[sortConfig.key]]
          : ratingOrder[b[sortConfig.key]] - ratingOrder[a[sortConfig.key]];
      }

      return sortConfig.direction === 'ascending'
        ? (a[sortConfig.key] || '').localeCompare(b[sortConfig.key] || '')
        : (b[sortConfig.key] || '').localeCompare(a[sortConfig.key] || '');
    });

    return sortedMovies.filter(movie =>
      Object.values(movie).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Asian Cinema Database</h1>
        <h2 className="text-xl text-center text-gray-600 mb-6">Films from Korea, Japan, and Hong Kong</h2>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                {/* ... table headers ... */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {getSortedMovies().map((movie, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm font-medium text-gray-900">{movie.title}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.year}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.country}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.category}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.imdb}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.myRating}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 max-w-md">{movie.tags}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{movie.channel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<MovieDatabase />, document.getElementById('root'));