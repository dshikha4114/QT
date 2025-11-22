import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     alert("Message sent successfully!");
//     setFormData({ name: "", email: "", message: "" });
//   };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Error sending message");
    }
  };







 

 


  



















  return (
    <section className="py-10 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">{/* <form onSubmit={handleSubmit} className="max-w-lg mx-auto"> */}
        <div className="mb-4">
          {/* <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg text-gray-900"
            required
          /> */}
              <input type="text" name="name" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-lg" required />


        </div>
        <div className="mb-4">
          {/* <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg text-gray-900"
            required
          /> */}
            <input type="email" name="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-lg" required />
            
        </div>
        <div className="mb-4">
          {/* <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-32 rounded-lg text-gray-900"
            required
          /> */}
          <textarea name="message" placeholder="Your Message" className="w-full p-3 h-32 mb-4 border rounded-lg" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">Send Message</button>
        {/* <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"> */}
          {/* Send Message
        </button>
      </form> */}
      </form>
    </section>
  );
};

export default Contact;
