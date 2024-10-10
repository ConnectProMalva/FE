import React from 'react';


const Tab = ({ label, Icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center  py-2 text-sm font-medium leading-5 text-gray-700 ${
        isActive ? ' text-purple-700' : 'hover:bg-gray-200'
      }`}
    >
      {Icon && <Icon className="mr-2" />}
      {label}
    </button>
  );
};

export default Tab;
