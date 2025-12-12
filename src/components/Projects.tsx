import { Plus, ExternalLink } from "lucide-react";

const Projects = () => {
  // Placeholder projects - user will add their own
  const projects = [
    {
      id: 1,
      title: "Coming Soon",
      category: "Remodeling Project",
      description: "Your first project showcase will appear here. Share your renovation work, before & after photos, and project details.",
      placeholder: true,
    },
    {
      id: 2,
      title: "Coming Soon",
      category: "Real Estate Project",
      description: "Document your real estate journey. Add property flips, investment projects, and success stories.",
      placeholder: true,
    },
    {
      id: 3,
      title: "Coming Soon",
      category: "Construction Work",
      description: "Showcase your carpentry, electrical, or drywall work. Build your professional portfolio.",
      placeholder: true,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-muted text-sm tracking-widest uppercase mb-3">
            My work
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Projects
          </h2>
          <p className="font-body text-muted mt-4 max-w-2xl mx-auto">
            Showcasing my remodeling work and real estate ventures. More projects coming soon!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-background rounded-2xl border border-border overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder Image Area */}
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                {project.placeholder ? (
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Plus className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-body text-sm text-muted">
                      Project image coming soon
                    </p>
                  </div>
                ) : (
                  <img
                    src=""
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="font-body text-xs tracking-wider uppercase text-muted">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-primary mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {project.description}
                </p>
                
                {!project.placeholder && (
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 mt-4 font-body text-sm font-medium text-primary hover:underline"
                  >
                    View Details
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted">
            Have a project in mind?{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Let's connect
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
