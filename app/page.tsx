import React from "react";
import StudentCard from "./StudentCard/page";

type studentType = {
  name: string;
  age: number;
  rollNumber: string;
  className: string;
  picture: string;
}


 const students: studentType[] =[
    { 
      name: 'Tabia Nadir', 
      age: 16,
      rollNumber: '479',
      className: '1st year',
      picture: "https://via.placeholder.com/150",
    },

    { 
      name: 'Ajwa Fatima', 
      age: 14,
      rollNumber: '863',
      className: '9th Class',
      picture:  "https://via.placeholder.com/150",
    },

    {
      name: 'Munazza Fatima',
      age: 16,
      rollNumber: '525',
      className: '3rd Class',
      picture: "https://via.placeholder.com/150",
    },
  ];  

 

 const App =() => { 
  return (
    <div className="bg-slate-500 min-h-screen flex flex-col items-center justify-center">
       <h1 className="text-white text2x1 mb-4">Student ID Cards</h1>
       <div className="flex flex-col items-center"> {/*change here to flex-col*/}
      { students.map((student) => (
         <StudentCard key={student.rollNumber} student={student} />
      ))}
       
       </div>
     </div>
  );

};

export default App; 