import React from 'react';

const data = [
  { id: 1, email: 'john@example.com', fullName: 'John Doe', role: 'admin', dateCreated: '2022-01-01' },
  { id: 2, email: 'jane@example.com', fullName: 'Jane Smith', role: 'user', dateCreated: '2022-02-01' },
  { id: 3, email: 'jim@example.com', fullName: 'Jim Johnson', role: 'user', dateCreated: '2022-03-01' },
  { id: 4, email: 'jill@example.com', fullName: 'Jill Jackson', role: 'user', dateCreated: '2022-04-01' },
  { id: 5, email: 'jack@example.com', fullName: 'Jack Johnson', role: 'user', dateCreated: '2022-05-01' },
  { id: 6, email: 'judy@example.com', fullName: 'Judy Jackson', role: 'user', dateCreated: '2022-06-01' },
  { id: 7, email: 'joe@example.com', fullName: 'Joe Jackson', role: 'user', dateCreated: '2022-07-01' },
  { id: 8, email: 'joe@example.com', fullName: 'Joe Jackson', role: 'user', dateCreated: '2022-07-01' },

  // Add more data as needed
];

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'email', name: 'Email' },
  { key: 'fullName', name: 'Full Name' },
  { key: 'role', name: 'Role' },
  { key: 'dateCreated', name: 'Date Created' },
];

const TestingCode = () => {
  return (
    <div className="flex flex-col h-full">
      <div className={`flex-grow ${data.length > 5 ? 'overflow-y-auto' : ''}`}>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item.id}>
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                      {item[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TestingCode;
