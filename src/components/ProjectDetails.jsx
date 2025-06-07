import { useParams } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { StarBackground } from "./StarBackground";



const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description: "A beautiful portfolio using React and Tailwind.",
    image: ["/projects/project1.png", "/projects/my_portfolio/aboutme.png", "/projects/my_portfolio/myskills.png", "/projects/my_portfolio/projects.png", "/projects/my_portfolio/contact.png"],
    tags: ["React", "TailwindCSS", "JSX"],
    githubUrl: "https://github.com/OmarFaroukDahmani",
  },
  {
    id: 2,
    title: "Commercial Website",
    description:
      "A commercial website built with PHP and MySQL, featuring a dynamic product catalog.",
    image: ["/projects/project2.png", "/projects/commercial_website/home.png", "/projects/commercial_website/footer.png", "/projects/commercial_website/login.png", "/projects/commercial_website/signin.png"],
    tags: ["Php", "SQL", "Javascript", "Html & CSS"],
    githubUrl: "https://github.com/OmarFaroukDahmani",
  },
  {
    id: 3,
    title: "University Club Website",
    description:
      "A university club website built with React, featuring a registration system using Php.",
    image: ["/projects/project3.png", "/projects/EduJoy/about.png", "/projects/EduJoy/team.png", "/projects/EduJoy/events.png", "/projects/EduJoy/contact.png" ],
    tags: ["React", "Jsx", "Php", "MySQL"],
    githubUrl: "https://github.com/OmarFaroukDahmani",
  },
];


export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));



  if (!project) {
    return <div className="text-center mt-20 text-red-500">Project Not Found</div>;
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="text-muted-foreground mb-6">{project.description}</p>
      <img src={project.image[0]} alt={project.title} className="rounded-lg mb-6" />
      <img src={project.image[1]} alt={project.title} className="rounded-lg mb-6" />
      <img src={project.image[2]} alt={project.title} className="rounded-lg mb-6" />
      <img src={project.image[3]} alt={project.title} className="rounded-lg mb-6" />
      <img src={project.image[4]} alt={project.title} className="rounded-lg mb-6" />

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.githubUrl}
        target="_blank"
        className="cosmic-button inline-block"
      >
        View on GitHub
      </a>
    </div>
  );
};


<ProjectDetails>
  <ThemeToggle />
  <StarBackground />
  <ProjectDetails />
</ProjectDetails>


