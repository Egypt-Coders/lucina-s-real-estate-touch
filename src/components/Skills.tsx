import { Hammer, Zap, PaintBucket, Ruler, Wrench, Home } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Hammer,
      category: "Carpentry",
      items: ["Framing", "Trim Work", "Cabinetry", "Structural Repairs"],
    },
    {
      icon: Zap,
      category: "Electrical",
      items: ["Running Wire", "Switch Installation", "Outlet Setup", "Basic Wiring"],
    },
    {
      icon: PaintBucket,
      category: "Drywall & Finishing",
      items: ["Drywall Installation", "Taping & Mudding", "Texturing", "Patching"],
    },
    {
      icon: Ruler,
      category: "Measurements & Planning",
      items: ["Blueprint Reading", "Material Estimation", "Project Planning", "Layout Design"],
    },
    {
      icon: Wrench,
      category: "General Construction",
      items: ["Tool Operation", "Safety Protocols", "Material Handling", "Quality Control"],
    },
    {
      icon: Home,
      category: "Real Estate Knowledge",
      items: ["Property Valuation", "Market Analysis", "Investment Strategy", "Renovation ROI"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-muted text-sm tracking-widest uppercase mb-3">
            What I bring to the table
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group p-8 bg-secondary/50 rounded-2xl border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <skill.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-sm text-muted flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
