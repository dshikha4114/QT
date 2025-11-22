const About = () => {
    return (
      <section id="about" className="py-16 bg-gray-900 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
          <p className="text-lg mb-4">
            I am a passionate <span className="text-blue-300">MERN Stack Developer</span> with experience in building 
            high-quality web applications. I specialize in developing full-stack applications with modern UI/UX and 
            optimized backend solutions.
          </p>
          <p className="text-lg">
            My goal is to create efficient, scalable, and maintainable web solutions that provide a seamless 
            user experience.
          </p>
  
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-500 rounded-lg shadow-md">React.js</span>
              <span className="px-4 py-2 bg-blue-500 rounded-lg shadow-md">Node.js</span>
              <span className="px-4 py-2 bg-blue-500 rounded-lg shadow-md">MongoDB</span>
              <span className="px-4 py-2 bg-blue-500 rounded-lg shadow-md">Express.js</span>
              <span className="px-4 py-2 bg-blue-500 rounded-lg shadow-md">JavaScript</span>
              <span className="px-4 py-2 bg-blue-500 rounded-lg shadow-md">Tailwind CSS</span>
              <span className="px-4 py-2 bg-blue-500 rounded-lg shadow-md">Git & GitHub</span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  