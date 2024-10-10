export const Data = [
  {
    paragraph: 'Top ranking job in relevant searches',
  },
  {
    paragraph: 'Available feature number one',
  },
  {
    paragraph: 'Available feature number three',
  },
];

const UpgradeData = () => {
  return (
    <ul className="mt-4">
      {Data.map((paragraph, index) => (
        <li key={index} className="flex items-center mb-3">
          <svg
            className="w-6 h-6 text-white bg-strokeBg rounded-full px-1 py-2 mr-2"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {paragraph.paragraph} 
        </li>
      ))}
    </ul>
  );
};

export default UpgradeData;