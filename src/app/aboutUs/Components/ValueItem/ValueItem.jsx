import React from 'react';

const ValueItem = ({ icon, title, description }) => {
    return (
  <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex items-start space-x-4">
    <div className="flex-shrink-0 text-stone-600 text-3xl">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-1 text-sm">{description}</p>
    </div>
  </div>
    );
};

export default ValueItem;