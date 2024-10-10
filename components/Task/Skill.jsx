import React from 'react';
import { FaHome, FaBroom, FaWrench, FaHammer, FaBolt, FaShoppingCart, FaCar, FaPaintRoller, FaFire, FaTshirt } from 'react-icons/fa';

const tasks = [
  { name: 'Household Chores', icon: FaHome },
  { name: 'Cleaning', icon: FaBroom },
  { name: 'Plumbing', icon: FaWrench },
  { name: 'Carpentry', icon: FaHammer },
  { name: 'Electrical Work', icon: FaBolt },
  { name: 'Grocery Shopping', icon: FaShoppingCart },
  { name: 'Driving and Errands', icon: FaCar },
  { name: 'Painting', icon: FaPaintRoller },
  { name: 'Welding', icon: FaFire },
  { name: 'Dry Cleaning', icon: FaTshirt },
  { name: 'Car Wash', icon: FaCar },
];

const TaskList = () => {
  return (
    <div className="flex justify-center px-4 md:px-0">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-6 md:gap-[2rem]">
        {tasks.map((task, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center p-4 border border-[#5900D9] w-full bg-white rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-[#5900D9] hover:text-white group"
          >
            <task.icon className="text-3xl text-[#5900D9] mr-3 group-hover:text-white transition-colors duration-300" />
            <span className="text-gray-800 group-hover:text-white transition-colors duration-300">{task.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
