import { Card } from "@/components/ui/card";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  UserRound,
  UserCircle2,
  UserCircle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Profile = () => {
  const { ref, isVisible } = useScrollAnimation();

  const aboutMe = [
    {
      title: "My Profile",
      fullname: "ROEUNG NAK",
      address: "Sankat Stoeng Meanchey,Khan Meanchey,Phnom Penh",
      nationality: "Khmer",
      gender: "Male",
      marital_status: "Male",
      date_of_birth: "07 June 2003",
      health: "Good",
      weight_hight: "1.70cm",
      status: "61 Kg",
      pob: "Prey Tompoung Village,Kanhcham Commune, Pecarang Dirstrict, Prey Veng Province",
    },
  ];
  const experiences = [
    {
      title: "IT Support",
      company: "Company: Safe Home Technology",
      period: "2024 - 2025",
      achievements: [
        "Servicing a client outside",
        "Service CCTV Installing and Check Problem",
        "Check problem Computer",
        "Configure router unifi",
      ],
    },
  ];

  const education = [
    {
      degree: "I gaduated National Baccalaurceate",
      institution: "At Prey Pnov High School",
      period: "2022 - 2023",
    },
    {
      degree: "Bachelor of Software Engineering Year 4 Semester 1",
      institution: "BELTEI UNIVERSITY",
      period: "2023 - present",
    },
  ];

  return (
    <section id="profile" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Professional <span className="text-gradient">Profile</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My career journey, education, and professional achievements
          </p>

          {/* Experience Section */}
          <div
            className={`mb-12 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 mb-6 group">
              <UserCircle className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold">About Me</h3>
            </div>
            <div className="space-y-6">
              {aboutMe.map((exp, index) => (
                <Card
                  key={index}
                  className={`p-6 hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        {exp.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Full Name : {exp.fullname}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Adress : {exp.address}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Nationality : {exp.nationality}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Gender : {exp.gender}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Date of Birth : {exp.date_of_birth}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Health : {exp.health}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Weight Hight : {exp.weight_hight}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Status : {exp.status}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Place of Birth : {exp.pob}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div
            className={`mb-12 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 mb-6 group">
              <Briefcase className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className={`p-6 hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div
            className={`mb-12 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 mb-6 group">
              <GraduationCap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
