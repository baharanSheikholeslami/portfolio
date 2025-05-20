import Image from "next/image";

const ProjectsPageModule = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <p>PROJECTS</p>
        </div>
        <div className="projects-section">
          <div className="project-grid">
            <div className="project-row">
              {/* Project 1 */}
              <div className="project-card">
                <p className="project-title">
                  <span>P</span>roject 1
                </p>
                <Image
                  priority
                  src="/portfolio/assets/hamrahtel.svg"
                  alt="Hamrahtel Logo"
                  width={100}
                  height={60}
                />
                <p className="project-name-hamrahtel">HAMRAHTEL</p>
                <p>
                  One of the projects I’ve worked on is the front-end
                  development of the Hamrahtel website, an online platform for
                  selling mobile phones and accessories. My role was to help
                  build a smooth, user-friendly interface that makes browsing
                  and shopping easy and intuitive. I worked with technologies
                  like HTML, CSS, JavaScript, and React to create responsive
                  layouts and interactive components. A big focus of the project
                  was making the user experience seamless across different
                  devices, and I also paid close attention to design consistency
                  and performance optimization. It was a great opportunity to
                  apply my skills in a real-world e-commerce project and
                  collaborate with a team of developers and designers.
                </p>
                <a
                  href="https://hamrahtel.com/"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>visit: </span>Hamrahtel
                </a>
              </div>

              {/* Project 2 */}
              <div className="project-card">
                <p className="project-title">
                  <span>P</span>roject 2
                </p>
                <Image
                  priority
                  src="/portfolio/assets/GSM.png"
                  alt="GSM Logo"
                  width={100}
                  height={60}
                />
                <p className="project-name-gsm">GSM</p>
                <p>
                  I’ve also been involved in the front-end development of
                  GSM.ir, a well-known tech news and product review website in
                  Iran. My main goal was to help improve the user interface and
                  make the site more modern, responsive, and easy to navigate. I
                  worked with React and styled-components to build reusable UI
                  elements and ensure consistency across pages. Since GSM.ir has
                  a lot of content—like articles, product comparisons, and
                  specs—I focused on creating clean layouts and enhancing
                  readability on both desktop and mobile. It was a challenging
                  but really rewarding experience, especially working on
                  performance improvements and implementing features that make
                  the site more interactive and engaging for users.
                </p>
                <a
                  href="https://gsm.ir/"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>visit: </span>GSM
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-row">
              <div className="project-card">
                <p className="project-title">
                  <span>P</span>roject 3
                </p>
                <Image
                  priority
                  src="/portfolio/assets/product-plan.png"
                  alt="Product Plan Logo"
                  width={100}
                  height={60}
                />
                <p className="project-name-productplan">PRODUCT PLAN</p>
                <p>
                  I recently did an internship as a product designer, which gave
                  me a great opportunity to explore the design side of tech more
                  deeply. During the internship, I worked closely with both
                  developers and product managers to design user-centered
                  solutions—from wireframes to high-fidelity mockups. I learned
                  a lot about user research, UI/UX principles, and how to think
                  critically about product features and user flows. Tools like
                  Figma became part of my daily workflow, and I really enjoyed
                  the creative process of turning ideas into intuitive designs.
                  It was a valuable experience that helped me better understand
                  the full product development cycle and how design plays a key
                  role in shaping digital experiences.
                </p>
                <a
                  href="https://productplan.ir/"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>visit: </span>Product-plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageModule;
