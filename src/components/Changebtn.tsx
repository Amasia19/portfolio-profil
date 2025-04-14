import { useState, useEffect } from "react";

const colors = [
  { bg: " #cf7327", text: "text-white" },
  { bg: "bg-orange-500", text: "text-white" },
  { bg: "bg-white", text: "text-black border border-gray-300" },
];

const ChangingButton = ({ children }: { children: React.ReactNode }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <button className={`px-4 py-2 rounded transition-all duration-500 ${colors[index].bg} ${colors[index].text}`}>
      {children}
    </button>
  );
};

export default ChangingButton;
