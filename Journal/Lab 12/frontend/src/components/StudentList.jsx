import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => { fetchStudents(); }, []);

  const fetchStudents = () => {
    axios.get("http://localhost:5000/api/students")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/students", form)
      .then(() => { setForm({ name: "", email: "" }); fetchStudents(); })
      .catch(err => console.error(err));
  };

  return (
    <div className="max-w-md mx-auto card">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Enter name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="w-full border p-2 rounded" required />
        <input type="email" placeholder="Enter email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="w-full border p-2 rounded" required />
        <button className="bg-blue-600 text-white w-full py-2 rounded">Add Student</button>
      </form>
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">Students List</h2>
      <ul>
        {students.map(s => <li key={s.id} className="border-b py-1">{s.name} ({s.email})</li>)}
      </ul>
    </div>
  );
}
