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
        <h2 class="title">About Me</h2>
        <p>
          I'm a student at Cal State University of San Marcos.
          I am looking to gain experience through internships and work my way to successful career.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 class="title">Projects</h2>

        <div className="projects-grid">
          <ProjectCard
            title="Scary Maze"
            desc="A cool reimplementation of the iconic scary maze that was popular years ago."
            href="https://github.com/mgrassa14/HW4-scary-maze-MariaGrassa"
          />
          <ProjectCard
            title="Med Tracker App"
            desc="A user friendly app for user's to keep track of the medication they take."
            href="https://github.com/mgrassa14/meds"
          />
          <ProjectCard
            title="Recipe Book"
            desc="An application that allows you to create and save recipes when you login using google."
            href="https://github.com/mgrassa14/Recipe-Book-Project2"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 class="title">Skills</h2>
        <div class="skills-container">
          <span class="skill-pill">HTML</span>
          <span class="skill-pill">CSS</span>
          <span class="skill-pill">Tailwind</span>
          <span class="skill-pill">BootStrap</span>
          <span class="skill-pill">JavaScript</span>
          <span class="skill-pill">React</span>
          <span class="skill-pill">Python</span>
          <span class="skill-pill">C++</span>
          <span class="skill-pill">Flask</span>
          <span class="skill-pill">Docker</span>
          <span class="skill-pill">Git</span>
          <span class="skill-pill">Google Cloud</span>
          <span class="skill-pill">Agile Basics</span>
          <span class="skill-pill">SQL</span>
          <span class="skill-pill">Node.js</span>
          <span class="skill-pill">Express</span>
          <span class="skill-pill">Communication</span>
          <span class="skill-pill">Team Collaboration</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 class="title">Contact</h2>
        <div id="contact-links">
          <a className="icon" href="mailto:mgrassa00@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/gmail.png" alt="Email icon" />
          </a>
          <a className="icon" href="https://github.com/mgrassa14" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/github.png" alt="GitHub icon" />
          </a>
          <a className="icon" href="https://www.linkedin.com/in/maria-grassa/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/linkedin.png" alt="LinkedIn icon" />
          </a>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-card"
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </a>
  );
}


export default Home;