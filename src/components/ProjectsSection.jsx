import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
  {
    id: 2,
    title: "Commercial Website",
    description:
      "A commercial website built with Html and Css.",
    image: "/projects/project2.png",
    tags: ["Javascript", "Html", "CSS"],
    demoUrl: "https://vistavault.pages.dev/",
    githubUrl: "https://github.com/OmarFaroukDahmani/VistaVault",
  },
  {
    id: 3,
    title: "Universtiy Club Website",
    description:
      "A university club website built with React.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://edujoy.pages.dev/",
    githubUrl: "https://github.com/OmarFaroukDahmani/Edujoy-Alliance",
  },
    {
    id: 4,
    title: "E-learning Platform",
    description:
      "A Platform for e-learning built with React (Vite).",
    image: "/projects/project4.png",
    tags: ["React" ],
    demoUrl: "https://pizone.pages.dev/",
    githubUrl: "https://github.com/OmarFaroukDahmani/pizone",
  },
    {
    id: 5,
    title: "AI Meal Maker",
    description:
      "An AI-powered recipe guide that creates meal ideas from any ingredients you have on hand.",
    image: "/projects/project5.png",
    tags: ["React"],
    demoUrl: "https://sekachef.netlify.app/",
    githubUrl: "https://github.com/OmarFaroukDahmani/sekaChef",
  },
      {
    id: 6,
    title: "Driving School Mangment App",
    description:
      "AutoTimeTN is a Driving School Management Web App that helps driving schools manage their daily operations efficiently.",
    image: "/projects/project6.png",
    tags: ["React", "ExpressJs","MySQL"],
    demoUrl: "https://autotimetn.pages.dev/",
    githubUrl: "https://github.com/OmarFaroukDahmani/AutoEcole-time-managment",
  },
        {
    id: 7,
    title: "Cargo Mangment App",
    description:
      "Manage your daily cargo with ease — CargoDo simplifies logistics for your business.",
    image: "/projects/project7.png",
    tags: ["React", "ExpressJs","MySQL"],
    demoUrl: "https://cargodo.pages.dev/",
    githubUrl: "https://github.com/OmarFaroukDahmani/Cargo-Manager",
  }
];



export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/OmarFaroukDahmani"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
