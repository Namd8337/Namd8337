import React from 'react';

const MucSidebar = ({ Icon, nhan, kichHoat = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all text-left ${
        kichHoat ? 'bg-blue-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{nhan}</span>
    </button>
  );
};

export default MucSidebar;
