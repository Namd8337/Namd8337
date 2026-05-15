import React from 'react';

const MucSidebar = ({ Icon, nhan, kichHoat = false }) => {
  return (
    <div className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
      kichHoat ? 'bg-blue-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
    }`}>
      <Icon size={20} />
      <span className="font-medium">{nhan}</span>
    </div>
  );
};

export default MucSidebar;
