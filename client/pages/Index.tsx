import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Code,
  Database,
  Globe,
  Server,
  Cpu,
  Brain,
} from "lucide-react";

export default function Index() {
  const skills = {
    backend: [
      "Python (3.x)",
      "Django",
      "Node.js",
      "Express",
      "Flask",
      "FastAPI",
      "RESTful APIs",
      "GraphQL",
      "Next.js",
    ],
    frontend: [
      "React.js",
      "Angular",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Bootstrap",
      "Tailwind CSS",
      "TypeScript",
    ],
    database: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"],
  };

  const workExperience = [
    {
      company: "Mayo Clinic",
      location: "Jacksonville, FL",
      period: "June 2024 - Present",
      role: "Python Full Stack Developer",
      description:
        "Working on healthcare technology solutions and scalable web applications.",
    },
    {
      company: "TCS",
      location: "Hyderabad, India",
      period: "Mar 2021 - Apr 2023",
      role: "Full Stack Developer",
      description:
        "Developed enterprise-level applications and AI/ML-powered systems.",
    },
    {
      company: "Lumen Technologies",
      location: "Hyderabad, India",
      period: "April 2019 - Feb 2021",
      role: "Software Developer",
      description:
        "Built scalable backend systems and REST APIs for telecommunications solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">
              Rohith Nayakar
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
              RN
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Rohith Nayakar
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
              Python Full Stack Developer & AI/ML Engineer
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Versatile and results-driven developer with 5+ years of experience
              in designing, developing, and deploying scalable web applications,
              REST/GraphQL APIs, and AI/ML-powered systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-slate-600">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm sm:text-base">
                  rohithnayakar1@gmail.com
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm sm:text-base">(205)-291-3138</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-600">
              Proficient in both frontend and backend technologies with hands-on
              expertise in GenAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-700">
                  <Server className="h-6 w-6" />
                  Backend Development
                </CardTitle>
                <CardDescription>
                  Server-side technologies and APIs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-700">
                  <Globe className="h-6 w-6" />
                  Frontend Development
                </CardTitle>
                <CardDescription>
                  User interface and experience technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-green-100 text-green-800 hover:bg-green-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-700">
                  <Database className="h-6 w-6" />
                  Database & Storage
                </CardTitle>
                <CardDescription>
                  Data management and storage solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-slate-600">
              Professional journey in software development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600"></div>

            <div className="space-y-8 md:space-y-12">
              {workExperience.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start gap-4 md:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto md:mx-0">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                      <Cpu className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 border-0 shadow-lg w-full">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg md:text-xl text-slate-900">
                            {exp.company}
                          </CardTitle>
                          <CardDescription className="text-blue-600 font-medium">
                            {exp.role}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-slate-600 self-start"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-sm md:text-base">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life with cutting-edge technology and
            innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
            >
              <Mail className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">rohithnayakar1@gmail.com</span>
              <span className="sm:hidden">Email Me</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 w-full sm:w-auto"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">(205)-291-3138</span>
              <span className="sm:hidden">Call Me</span>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Rohith Nayakar. Designed and built with React, TypeScript,
            and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
