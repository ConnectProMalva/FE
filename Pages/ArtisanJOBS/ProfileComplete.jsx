import React from 'react';

const ProfileCompletion = () => {
  const completionPercentage = 23;
  const circumference = 2 * Math.PI * 45; // 45 is the radius of our circle
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (completionPercentage / 100) * circumference;

  return (

    <section className="bg-white mt-[4rem]">


    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="10"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 50 50)"
          />
          {/* Percentage text */}
          <text
            x="50"
            y="50"
            fontFamily="Arial"
            fontSize="20"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#333"
          >
            {completionPercentage}%
          </text>
        </svg>
      </div>
      <p className="mt-4 text-lg font-semibold text-gray-700">
        Your profile is not complete
      </p>
    </div>

        </section>
  );
};

export default ProfileCompletion;