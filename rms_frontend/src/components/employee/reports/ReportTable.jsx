function ReportTable({ headers, data }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
      <table className="w-full text-sm text-left">

        <thead>
          <tr className="border-b text-gray-600">
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b hover:bg-gray-50">
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex} className="py-2 px-4">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default ReportTable;