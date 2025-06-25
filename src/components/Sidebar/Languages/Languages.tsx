import React, { useEffect, useState } from "react";

const languagesData = [
  { name: "Ukrainian", level: "Native", proficiency: 100 },
  { name: "Russian", level: "C2", proficiency: 90 },
  { name: "English", level: "A2", proficiency: 60 },
  { name: "Polish", level: "Basic", proficiency: 40 },
];

const Languages = () => {
  const [prog, setProg] = useState<number[]>(languagesData.map(() => 0));
  useEffect(() => {
    setTimeout(() => setProg(languagesData.map((l) => l.proficiency)), 200);
  }, []);
  return (
    <div className="space-y-4">
      {languagesData.map((l, i) => (
        <div key={l.name}>
          <div className="flex justify-between mb-1">
            <span className="text-white">{l.name}</span>
            <span className="text-secondaryText">{l.level}</span>
          </div>
          <div className="w-full bg-[#1c302b] rounded-full h-2">
            <div
              className="h-2 rounded-full"
              style={{
                width: `${prog[i]}%`,
                background: "linear-gradient(90deg, #2cd2a9, #1c9c7c)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Languages;
