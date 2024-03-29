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
  { id: '2019-0010', name: 'Emily Taylor', type: 'Student', number: '091234567890' },
  { id: '2019-0011', name: 'Emily Taylor', type: 'Student', number: '091234567890' },
  { id: '2019-0012', name: 'John Doe', type: 'Student', number: '091234567890' },
  { id: '2019-0013', name: 'Jane Doe', type: 'Staff', number: '091234567890' },
  { id: '2019-0014', name: 'Bob Smith', type: 'Student', number: '091234567890' },
  { id: '2019-0015', name: 'Alice Johnson', type: 'Faculty', number: '091234567890' },
  { id: '2019-0016', name: 'Tom Brown', type: 'Student', number: '091234567890' },
  { id: '2019-0017', name: 'Samantha Lee', type: 'Student', number: '091234567890' },
  { id: '2019-0018', name: 'David Williams', type: 'Student', number: '091234567890' },
  { id: '2019-0019', name: 'Mary Davis', type: 'Student', number: '091234567890' },
  { id: '2019-0020', name: 'Kevin Wilson', type: 'Student', number: '091234567890' },
  { id: '2019-0021', name: 'Emily Taylor', type: 'Student', number: '091234567890' },
  { id: '2019-0022', name: 'Emily Taylor', type: 'Student', number: '091234567890' },
  { id: '2019-0023', name: 'John Doe', type: 'Student', number: '091234567890' },
  { id: '2019-0024', name: 'Jane Doe', type: 'Staff', number: '091234567890' },
  { id: '2019-0025', name: 'Bob Smith', type: 'Student', number: '091234567890' },
  { id: '2019-0026', name: 'Alice Johnson', type: 'Faculty', number: '091234567890' },
  { id: '2019-0027', name: 'Tom Brown', type: 'Student', number: '091234567890' },
  { id: '2019-0028', name: 'Samantha Lee', type: 'Student', number: '091234567890' },
  { id: '2019-0029', name: 'David Williams', type: 'Student', number: '091234567890' },
  { id: '2019-0030', name: 'Mary Davis', type: 'Student', number: '091234567890' },
  { id: '2019-0031', name: 'Kevin Wilson', type: 'Student', number: '091234567890' },
  { id: '2019-0032', name: 'Emily Taylor', type: 'Student', number: '091234567890' },
  { id: '2019-0033', name: 'Emily Taylor', type: 'Student', number: '091234567890' },
  { id: '2019-0034', name: 'Kevin Wilson', type: 'Student', number: '091234567890' },

];

const DataGrid = () => {
  const [testdata, setdata] = useState(data);
  const [order, setOrder] = useState("ASC")
  const sorting =(col) =>{
    if (order === "ASC"){
      const sorted = [...testdata].sort((a,b)=>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setOrder("DSC");
    }
    if (order === "DSC"){
      const sorted = [...testdata].sort((a,b)=>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setOrder("ASC");
    }
  };
   
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const page = Array.from({ length: totalPages });
  const [Pagination, setPagination] = useState({from: 1, to: 5});
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePaginationBack = () => {
    if(Pagination.from > 1 && Pagination.to > 5){
      setPagination({from: --Pagination.from, to: --Pagination.to});
    } 
  }

  const handlePaginationNext = () => {
    if(Pagination.to < totalPages){
      setPagination({from: ++Pagination.from, to: ++Pagination.to});
    } 
  }
  return (
    <div className="w-full px-4 py-8">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th onClick={()=>sorting("id")} className="px-4 py-2">ID NUMBER</th>
            <th onClick={()=>sorting("name")} className="px-4 py-2">FULL NAME</th>
            <th onClick={()=>sorting("type")} className="px-4 py-2">PATIENT TYPE</th>
            <th onClick={()=>sorting("number")} className="px-4 py-2">CONTACT NUMBER</th>
            <th className="px-4 py-2">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map(row => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={row.id}>
              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.id}</td>
              <td className="px-6 py-4">{row.name}</td>
              <td className="px-6 py-4">{row.type}</td>
              <td className="px-6 py-4">{row.number}</td>
              <td className="px-6 py-4">{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex float-right mt-4">
        <button onClick={handlePaginationBack} className="h-12 border-2 border-r-0 border-indigo-600
               px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
         </button>
        
         {page.map((pageNum,i) => {
            
            if(i+1 >= Pagination.from && i+1 <= Pagination.to){
              return(
                <button
                  key={i}
                  className={`h-12 border-2 border-r-0 border-indigo-600
                  w-12 ${
                    currentPage === i + 1 ? 'bg-blue-500 text-white' : 'text-gray-700'
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              );
              
            }
            
          })}
        {/*Array.from({ length: totalPages }, (_, i) => (
          
          
        ))*/}
        <button onClick={handlePaginationNext} className="h-12 border-2  border-indigo-600
               px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
         </button>

      </div>
      <div className="flex float-left mt-4">
        <p className="text-sm text-gray-700">
          {currentPage} of {totalPages} pages ({data.length} entries)
        </p>
      </div>
    </div>
  );
};

export default DataGrid;
