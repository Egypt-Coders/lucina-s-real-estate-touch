import { Building2, GraduationCap, Home, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Currently attending Thaddeus Stevens College of Technology",
    },
    {
      icon: Home,
      title: "Experience",
      description: "Hands-on residential remodeling and house renovation",
    },
    {
      icon: Building2,
      title: "Focus",
      description: "Real estate investment and property development",
    },
    {
      icon: Target,
      title: "Goal",
      description: "Licensed real estate agent & property investor",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-muted text-sm tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Story */}
          <div className="space-y-6">
            <p className="font-body text-lg text-muted leading-relaxed">
              My journey into real estate started with a passion for transforming spaces. 
              Currently, I work in <strong className="text-primary">residential remodeling</strong>, 
              where I've developed practical skills that give me a unique perspective on property value.
            </p>
            <p className="font-body text-lg text-muted leading-relaxed">
              As a student at <strong className="text-primary">Thaddeus Stevens College</strong>, 
              I'm building a strong foundation in the trades while working toward my goal of becoming 
              a licensed real estate agent. My hands-on experience with renovations positions me to 
              identify properties with potential and understand the work needed to maximize their value.
            </p>
            <p className="font-body text-lg text-muted leading-relaxed">
              My vision is to combine my remodeling expertise with real estate investing—buying 
              properties, renovating them, and either selling or renting for profit. I believe 
              understanding construction gives me a competitive edge in the market.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-background rounded-xl border border-border card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
