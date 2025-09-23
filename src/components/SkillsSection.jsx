import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML", category: "Programming Languages" },
  { name: "CSS", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },
  { name: "Python", category: "Programming Languages" },
  { name: "C++", category: "Programming Languages" },

  { name: "React", category: "Frameworks & Libraries" },
  { name: "Express.js", category: "Frameworks & Libraries" },
  { name: "Node.js", category: "Frameworks & Libraries" },

  { name: "Netlify", category: "Hosting & Cloud Deployment" },

  { name: "MySql", category: "Databases" },

  { name: "Git", category: "Tools" },
  { name: "Github", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "npm", category: "Tools" },
];

const categories = [
  "All",
  "Programming Languages",
  "Frameworks & Libraries",
  "Databases",
  "Hosting & Cloud Deployment",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-14 text-center">
          My <span className="text-primary text-glow">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cosmic-button",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-secondary/70 text-foreground hover:bg-primary/20"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 shadow-md 
                         card-hover animate-fade-in hover:shadow-primary/30 transition-all"
            >
              <h3 className="font-semibold text-lg text-center text-glow">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
