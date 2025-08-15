import React from 'react';

const TeamMemberCard = ({ name, title, imageUrl, bio }) => {
    return (
  <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <img
      src={imageUrl}
      alt={name}
      className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-stone-200"
    />
    <h3 className="text-xl font-semibold text-gray-900 text-center">{name}</h3>
    <p className="text-stone-600 text-center mb-3">{title}</p>
    <p className="text-gray-600 text-center text-sm">{bio}</p>
  </div>
    );
};

export default TeamMemberCard;