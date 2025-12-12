import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/lucina-profile.webp";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="font-body text-muted text-sm tracking-widest uppercase mb-4 animate-fade-up opacity-0 stagger-1">
              Welcome to my portfolio
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6 animate-fade-up opacity-0 stagger-2">
              Hi, I'm <span className="text-gradient">Lucina Noel</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted leading-relaxed mb-8 animate-fade-up opacity-0 stagger-3">
              Aspiring real estate professional with hands-on experience in residential remodeling. 
              Currently studying at <strong className="text-primary">Thaddeus Stevens College</strong>, 
              building the skills to transform houses into homes.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                View My Work
                <ArrowDown size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-medium rounded-lg border border-border transition-all duration-300 hover:bg-accent hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-6 scale-105" />
              <div className="relative overflow-hidden rounded-2xl shadow-lg max-w-sm lg:max-w-md">
                <img
                  src={profileImage}
                  alt="Lucina Noel - Real Estate Professional"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full opacity-60 animate-float" />
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
