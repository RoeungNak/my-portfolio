import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import imageEcommerce from "../img/ecommerce.png";
import imageSinglecard from "../img/siglecardd.png";
import imagePayment from "../img/payment.png";
import imageOrder from "../img/order.png";
import imageProductAll from "../img/productcardall.png";
import imagedashboard from "../img/dashborad.png";
import imageProduct from "../img/product.png";
import imageCard from "../img/card.png";
import imageExpense from "../img/expense.png";
import imagePOScomputer from "../img/pos_computer.png";
import imageKHQR from "../img/khqr.png";
import imageStore from "../img/store.png";
import imageCart from "../img/cart.png";
import imageKHQRPayment from "../img/khqrpayment.png";
import imageSuccess from "../img/success.png";
import { Carousel, Flex, Image, Select } from "antd";
import { useState, useMemo } from "react";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedTech, setSelectedTech] = useState<string>("All");

  const projects = useMemo(
    () => [
      {
        title: "POS System Computer",
        description: (
          <>
            <p>
              A comprehensive Point of Sale system with inventory, employee,
              expense, report, and customer management.Includes real-time sales
              tracking, payroll, and role-based access control.
            </p>

            {/* <Flex gap={5}>
              <div className="border p-5 mt-5 rounded-sm">
                <p className="text-green-500 font-semibold mt-2">
                  Login admin Account Permission Roles
                </p>
                <p className="text-red-500 font-semibold mt-2">
                  Email: admin@gmail.com
                </p>
                <p className="text-red-500 font-semibold mt-2">
                  Password: 123456
                </p>
              </div>
              <div className="border p-5 mt-5 rounded-sm">
                <p className="text-green-500 font-semibold mt-2">
                  Login Cashier Account Permission Roles
                </p>
                <p className="text-red-500 font-semibold mt-2">
                  Email: cashier@gmail.com
                </p>
                <p className="text-red-500 font-semibold mt-2">
                  Password: 123456
                </p>
              </div>
            </Flex> */}
          </>
        ),
        features: [
          "Dashboard Analytics",
          "POS Interface",
          "Inventory Management",
          "Customer Management",
          "Employee & Payroll",
          "Sales Reporting",
          "Purchase Management",
          "Using Ant Design Component library (90%)",
          "Zustand State Management (Global)",
          "Protected API Routes",
          "Permission Roles",
          "Eloquent ORM",
          "Responsive Design (Supports All Devices)",
          "Generate QR Code Payment Popup QR",
          "Payment Method Bank and Cash",
        ],
        tech: ["React + Vite", "Laravel", "Tailwind CSS", "MySQL"],
        images: [
          imagedashboard,
          imagePOScomputer,
          imageProduct,
          imageCard,
          imageExpense,
        ],
        github: "https://github.com/RoeungNak?tab=repositories",
        live: "#",
        accentColor: "from-blue-500 to-purple-600",
      },
      {
        title: "E-Commerce Platform",
        description:
          "A full-featured e-commerce platform with secure payment, admin dashboard, and responsive design. Includes product management, order processing, and customer analytics.",
        features: [
          "Product Catalog",
          "Shopping Cart",
          "Payment Integration",
          "Admin Dashboard",
          "Order Management",
          "User Authentication",
          "Responsive Design",
        ],
        tech: ["React + Vite", "Laravel", "Tailwind CSS", "MySQL"],
        images: [
          imageEcommerce,
          imageSinglecard,
          imagePayment,
          imageOrder,
          imageProductAll,
        ],
        github: "https://github.com/RoeungNak?tab=repositories",
        live: "#",
        accentColor: "from-orange-500 to-pink-600",
      },
    ],
    [],
  );

  const allTechs = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech)))],
    [projects],
  );

  // Filter projects based on selected tech
  const filteredProjects = useMemo(
    () =>
      selectedTech === "All"
        ? projects
        : projects.filter((p) => p.tech.includes(selectedTech)),
    [projects, selectedTech],
  );

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-background to-secondary/5"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              My Work
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Featured{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects showcasing my full-stack
              skills
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-2 transition-all duration-700 transform group hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${
                  hoveredIndex === index
                    ? "border-primary/20 shadow-xl"
                    : "border-transparent"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}

                <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-gray-900 to-black">
                  <Carousel
                    arrows
                    prevArrow={<span className="text-white text-2xl">‹</span>}
                    nextArrow={<span className="text-white text-2xl">›</span>}
                  >
                    {project.images.map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt={`${project.title} image ${i + 1}`}
                        preview={{
                          mask: (
                            <div className="flex items-center justify-center gap-2">
                              <Eye className="h-5 w-5" />
                              <span className="font-medium">Preview</span>
                            </div>
                          ),
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
                        placeholder={
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
                        }
                      />
                    ))}
                  </Carousel>
                </div>
                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                      FEATURES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                      TECH STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r ${project.accentColor} hover:scale-105 transition-transform duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 gap-2 hover:scale-105 transition-all duration-300 hover:border-primary"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>

                    <Button
                      className={`flex-1 gap-2 hover:scale-105 transition-all duration-300 bg-gradient-to-r ${project.accentColor}`}
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
