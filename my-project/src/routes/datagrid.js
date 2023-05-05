import React, { useState } from 'react';

const data = [
  { id: '2019-0001', name: 'John Doe', type: 'Student', number: '091234567890' },
  { id: '2019-0002', name: 'Jane Doe', type: 'Staff', number: '091234567890' },
  { id: '2019-0003', name: 'Bob Smith', type: 'Student', number: '091234567890' },
  { id: '2019-0004', name: 'Alice Johnson', type: 'Faculty', number: '091234567890' },
  { id: '2019-0005', name: 'Tom Brown', type: 'Student', number: '091234567890' },
  { id: '2019-0006', name: 'Samantha Lee', type: 'Student', number: '091234567890' },
  { id: '2019-0007', name: 'David Williams', type: 'Student', number: '091234567890' },
  { id: '2019-0008', name: 'Mary Davis', type: 'Student', number: '091234567890' },
  { id: '2019-0009', name: 'Kevin Wilson', type: 'Student', number: '091234567890' },
  { id: '2019-0010', name: 'Emily Taylor', type: 'Student', number: '091234567890' }
];

const DataGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full px-4 py-8">
      <table className="table-auto w-full">
        <thead className='bg-gray-200'>
          <tr>
            <th className="px-4 py-2">ID NUMBER</th>
            <th className="px-4 py-2">FULL NAME</th>
            <th className="px-4 py-2">PATIENT TYPE</th>
            <th className="px-4 py-2">CONTACT NUMBER</th>
            <th className="px-4 py-2">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map(row => (
            <tr key={row.id}>
              <td className="border px-4 py-2">{row.id}</td>
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.type}</td>
              <td className="border px-4 py-2">{row.number}</td>
              <td className="border px-4 py-2">{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`mx-2 px-3 py-1 rounded-full ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DataGrid;
