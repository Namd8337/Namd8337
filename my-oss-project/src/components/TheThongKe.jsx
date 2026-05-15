import React from 'react';

const TheThongKe = ({ tieuDe, conSo, mauSac }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
      <p className="text-sm text-gray-500 font-semibold uppercase">{tieuDe}</p>
      <h3 className={`text-3xl font-bold mt-2 ${mauSac}`}>{conSo}</h3>
    </div>
  );
};

export default TheThongKe;
