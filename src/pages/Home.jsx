function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Maria</h1>
        <p>Aspiring Software Engineer</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a student at Cal State University of San Marcos.
          I am looking to gain experience through internships and work my way to successful career.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects-grid">
          <ProjectCard
            title="Project 1"
            desc="A cool web app built with React."
          />
          <ProjectCard
            title="Project 2"
            desc="An Express API for managing tasks."
          />
          <ProjectCard
            title="Project 3"
            desc="A portfolio website (this one!)."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: mgrassa00@gmail.com</p>
        <p>GitHub: https://github.com/mgrassa14</p>
        <p>Linkedin: https://www.linkedin.com/in/maria-grassa/</p>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Home;