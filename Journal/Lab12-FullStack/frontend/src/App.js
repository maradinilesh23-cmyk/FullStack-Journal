import React from "react";
import StudentList from "./components/StudentList";

export default function App(){
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Student Management Portal</h1>
      <StudentList />
    </div>
  );
}
