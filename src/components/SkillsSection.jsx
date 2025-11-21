import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaNodeJs, FaGithub, FaGitAlt
} from "react-icons/fa";
import { SiCplusplus, SiExpress, SiMysql, SiNetlify, SiNpm } from "react-icons/si";

const skills = [
  { name: "HTML", category: "Programming Languages", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", category: "Programming Languages", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", category: "Programming Languages", icon: <FaJs className="text-yellow-400" /> },
  { name: "Python", category: "Programming Languages", icon: <FaPython className="text-green-400" /> },
  { name: "C++", category: "Programming Languages", icon: <SiCplusplus className="text-blue-400" /> },

  { name: "React", category: "Frameworks & Libraries", icon: <FaReact className="text-cyan-400" /> },
  { name: "Express.js", category: "Frameworks & Libraries", icon: <SiExpress className="text-gray-300" /> },
  { name: "Node.js", category: "Frameworks & Libraries", icon: <FaNodeJs className="text-green-500" /> },

  { name: "Netlify", category: "Hosting & Cloud Deployment", icon: <SiNetlify className="text-teal-400" /> },

  { name: "MySql", category: "Databases", icon: <SiMysql className="text-blue-500" /> },

  { name: "Git", category: "Tools", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Github", category: "Tools", icon: <FaGithub className="text-gray-200" /> },
  { name: "npm", category: "Tools", icon: <SiNpm className="text-red-500" /> },
];

const categories = [
  "All",
  "Tools",
  "Databases",
  "Programming Languages",
  "Frameworks & Libraries",
  "Hosting & Cloud Deployment",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-14 text-center">
          My <span className="text-primary text-glow">Skills</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-primary/20"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={cn(
            "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6",
            filteredSkills.length === 1 && "justify-center"
          )}
        >
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="flex flex-col sm:flex-row items-center sm:items-center gap-3 p-4 
                         rounded-xl bg-card/80 backdrop-blur-md border border-border 
                         shadow-md hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="font-semibold text-lg text-center sm:text-left">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
