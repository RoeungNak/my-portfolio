import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "../img/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center animate-scale-in">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-glow-secondary rounded-full blur-xl opacity-50 animate-glow-pulse" />
              <img
                src={profileImg}
                alt="John Doe"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary glow-effect transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>

          <div className="mb-6 space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              Hi, I'm <span className="text-gradient">Roeung Nak</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              API Developer Intern
            </p>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Building exceptional digital experiences with modern technologies.
              Passionate about clean code and innovative solutions.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-4 justify-center mb-8 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="glow-effect group hover:scale-105 transition-all duration-300"
            >
              <a href="#projects">View My Work</a>

              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="hover:scale-105 transition-all duration-300"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://github.com/RoeungNak?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-secondary rounded-full transition-all duration-300 glow-effect hover:scale-110 hover:-rotate-6"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/roeung-nak-492161331/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-secondary rounded-full transition-all duration-300 glow-effect hover:scale-110 hover:-rotate-6"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rouengnak.biu@gmail.com"
              className="p-3 bg-card hover:bg-secondary rounded-full transition-all duration-300 glow-effect hover:scale-110 hover:-rotate-6"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
