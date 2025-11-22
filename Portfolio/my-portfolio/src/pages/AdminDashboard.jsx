import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "", link: "" });

  useEffect(() => {
    fetch("https://your-backend-url/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleAddProject = async (e) => {
    e.preventDefault();
    const res = await fetch("https://your-backend-url/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
      body: JSON.stringify(formData),
    });
    const newProject = await res.json();
    setProjects([...projects, newProject]);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      
      <form onSubmit={handleAddProject} className="mb-6">
        <input type="text" name="title" placeholder="Project Title" className="p-2 border" onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
        <input type="text" name="description" placeholder="Description" className="p-2 border" onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
        <input type="url" name="link" placeholder="Project Link" className="p-2 border" onChange={(e) => setFormData({ ...formData, link: e.target.value })} required />
        <button type="submit" className="bg-blue-500 text-white p-2">Add Project</button>
      </form>

      <h3 className="text-xl font-semibold">Existing Projects</h3>
      {projects.map((project) => (
        <div key={project._id} className="p-4 border mb-2">
          <h4 className="text-lg">{project.title}</h4>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Project</a>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
