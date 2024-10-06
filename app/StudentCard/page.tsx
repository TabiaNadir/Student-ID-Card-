import React from "react";

const StudentCard =({ student }) => {
    console.log(student); //Check student object
    return(
        <div className="bg-slate-400 rounded-lg p-6 max-w-sm mx-auto my-4">
            {student.picture && ( // This line cheak if picture exist
               <img  
               src={student.picture}
               alt={`${student.name}'s profile`} 
               className=" w-full h-32 rounded-full mx-auto mb-4"
            /> 
           
        )}   
        <h1 className="text-xl font-bold text-center">{student.name}</h1>
        <p className="text-gray-700 text-center">Age:{student.age} </p>
        <p className="text-gray-700 text-center">Roll Number: {student.rollNumber}</p>
        <p className="text-gray-700 text-center">Class: {student.className}</p>
        </div>
    );
};

export default StudentCard;




function App() {
    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                { students.map((student)=> (
                    <StudentCard key={student.rollNumber} student={student} />
                
                ))}
            </div>
        </div>
    );
};
