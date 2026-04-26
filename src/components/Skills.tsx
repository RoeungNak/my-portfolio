import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "React",
        "vite",
        "Tailwind CSS",
        "Typescript",
      ],
    },
    {
      title: "Backend",
      skills: [
        "PHP",
        "JavaScript",
        "Laravel",
        "C#",
        "SQL Server",
        "MySql",
        "Node.js / Express js",

        "REST APIs",
      ],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Git Hub", "VS Code", "Figma", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`p-6 hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary group-hover:scale-105 transition-transform duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-110 hover:rotate-3"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
