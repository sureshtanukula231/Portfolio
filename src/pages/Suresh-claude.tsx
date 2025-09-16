import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Mail, Phone, MapPin, Briefcase, GraduationCap, Code,
  Database, Package, Sparkles, Github, Linkedin,
  Download, ExternalLink, Calendar, Award, Zap, Target, Users,
  TrendingUp, Star, ChevronDown, Menu, X
} from "lucide-react";

// ---- Enhanced Animation Variants ----

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring" } }
} as const;

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring" } }
} as const;

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6,
      type: "spring",
      stiffness: 100
    } 
  }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
} as const;



// ---- Enhanced Data ----
const DATA = {
  name: "Tanukula Suresh",
  title: "Senior .NET Developer",
  subtitle: "Full-Stack Developer",
  location: "Mogaltur, Andhra Pradesh, India",
  phone: "+91 8096326535",
  email: "tanukulasuresh31@gmail.com",
  github: "",
  linkedin: "www.linkedin.com/in/suresh-tanukula-11a85b1b6",
  summary: "Passionate .NET architect with 5.8+ years of experience building scalable enterprise applications. I transform complex business requirements into elegant, high-performance solutions that drive business growth.",
  objective: "To lead innovative development teams in creating next-generation enterprise applications that exceed expectations and deliver measurable business value.",
  stats: [
    { label: "Years Experience", value: "5+", icon: Calendar },
    { label: "Projects Delivered", value: "5+", icon: Award },
    { label: "Code Quality Score", value: "98%", icon: Star },
    { label: "Team Members Mentored", value: "5+", icon: Users }
  ],
  experience: [
    {
      company: "RP Web Apps Pvt Ltd",
      role: "Senior Software Developer",
      start: "Jan 2025", 
      end: "Present",
      location: "On-site",
      type: "Full-time",
      bullets: [
        "Architected and delivered web applications using ASP.NET Core/MVC",
        "Led a team of 4 developers, improving overall productivity",
        "Mentored junior developers, achieving 25% improvement in code quality metrics"
      ],
      technologies: ["ASP.NET Core", "SQL Server", "Azure", "Docker"]
    },
    {
      company: "CTE Web Apps Pvt Ltd",
      role: "Software Developer",
      start: "Jul 2023", 
      end: "Dec 2024",
      location: "On-site",
      type: "Full-time",
      bullets: [
        "Optimized database queries resulting performance improvement",
        "Implemted RESTful Web APIs using ASP.NET Core "
      ],
      technologies: ["ASP.NET MVC", "ASP.NET Core", "Entity Framework", "SQL Server"]
    },
    {
      company: "AppShark Software Pvt Ltd",
      role: "Full-Stack Developer",
      start: "Jun 2022", 
      end: "Jun 2023",
      location: "On-site",
      type: "Full-time",
      bullets: [
        "Built responsive web applications serving 5000+ daily active users",
        "Collaborated with UX/UI teams to implement pixel-perfect designs"
      ],
      technologies: ["ASP.NET", "ASP.NET MVC", "ASP.NET Core", "Entity Framework", "SQL Server"]
    },
    {
      company: "TATA Communications",
      role: "NOC Engineer",
      start: "Mar 2021", 
      end: "Jun 2022",
      location: "On-site",
      type: "Full-time",
      bullets: [
        "Monitored critical infrastructure maintaining 99.9% uptime"
      ],
      technologies: ["Network Monitoring", "Incident Management"]
    },
    {
      company: "Cybilltech Technologies Pvt Ltd",
      role: "Soft Developer",
      start: "Jan 2020", 
      end: "Mar 2021",
      location: "On-site",
      type: "Full-time",
      bullets: [
        "Built responsive web applications.",
        "Collaborated with UX/UI teams to implement pixel-perfect designs"
      ],
      technologies: ["ASP.NET", "ASP.NET MVC", "SQL Server"]
    }
  ],
  projects: [
    {
      name: "RAKNOC Enterprise Platform",
      role: "Lead Developer",
      stack: ["C#", "ASP.NET Core", "SQL Server",],
      description: "High-performance enterprise management system handling complex workflows and real-time data processing.",
      highlights: ["99.9% uptime", "Real-time processing"],
      code: "",
      demo: "#"
    },
    {
      name: "Curvature Applications",
      role: "Full-Stack Developer",
      stack: ["C#", "ASP.NET Core", ".Net Framework", "SQL Server", "TFS"],
      description: "Scalable multi-tenant platform serving 50+ enterprise clients with customizable workflows and advanced analytics dashboard.Resolve any issues that may arise a ticket regarding any issue or new changes that including troubleshooting and "
      + "debugging based on client requirement",
      highlights: ["Custom workflows", "Advanced analytics"],
      code: "",
      demo: "#"
    },
    {
      name: "SxeConsoleApplication",
      role: ".Net Developer",
      stack: ["C#", "ASP.NET Core", "MS SQL Server"],
      description: "It mainly works on getting data from Square Table and sending it to SXE after integrating with the SXE API.Involved in each phase of the project, taking requirements from clients and developing the application.",
      highlights: ["Real-time updates","Automated reports"],
      code: "",
      demo: "#"
    },
    {
      name: "TfsRemainderMails",
      role: ".Net Developer",
      stack: ["C#", ".Net Framework","MS SQL Server", "Task Scheduler"],
      description: "Our system sends reminder emails when resources fail to fill timesheets. The emails are triggered every week start day.",
      highlights: ["Real-time updates","Automated reports"],
      code: "",
      demo: "#"
    },
    {
      name: "HR-Portal",
      role: "Full-Stack Developer",
      stack: ["C#","VB.NET", ".Net Framework", "SQL Server", "SVN"],
      description: "Responsible for the day-to-day maintenance and upkeep of the company’s HR portal. This includes troubleshoot technical issues related to the HR portal and making necessary changes to the "
      + "contentand design",
      highlights: ["Custom workflows", "Advanced analytics"],
      code: "",
      demo: "#"
    }
  ],
  skills: {
    backend: ["C#", ".NET", "ASP.NET Core", "ASP.NET MVC", "Entity Framework", "Web APIs"],
    frontend: ["Angular", "React", "JavaScript", "TypeScript", "jQuery", "HTML5", "CSS3"],
    database: ["SQL Server", "PostgreSQL"],
    cloud: ["Azure"],
    tools: ["Visual Studio", "Git", "GitHub", "TFS", "SVN", "Postman"],
    soft: ["Team Leadership", "Agile/Scrum", "Code Review", "Mentoring", "Problem Solving"]
  },
  education: [
    { 
      school: "Swarnandhra Institute of Engineering and Technology", 
      degree: "Bachelor of Technology in Electrical & Electronics", 
      year: "2019", 
      score: "60%",
      location: "Andhra Pradesh"
    },
    { 
      school: "Swarnandhra College of Engineering and Technology", 
      degree: "Diploma in Electrical & Electronics Engineering", 
      year: "2016", 
      score: "70%",
      location: "Andhra Pradesh"
    }
  ],
  // certifications: [
  //   "Microsoft Certified: Azure Developer Associate",
  //   "ASP.NET Core Certification",
  //   "Agile Project Management"
  // ],
  languages: ["English (Fluent)", "Telugu (Native)", "Hindi (Conversational)"]
};

// ---- Enhanced Components ----
const GlassCard: React.FC<{ children: React.ReactNode; className?: string; hover?: boolean }> = ({ 
  children, 
  className = "", 
  hover = true 
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={scaleIn}
    whileHover={hover ? { 
      scale: 1.02, 
      boxShadow: "0 20px 40px rgba(168, 85, 247, 0.1)",
      transition: { duration: 0.3 }
    } : {}}
    className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-50" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const AnimatedCounter: React.FC<{ value: string; label: string; icon: React.ElementType }> = ({ value, label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = numericValue / 50;
      const interval = setInterval(() => {
        setCount(prev => {
          const next = prev + increment;
          if (next >= numericValue) {
            clearInterval(interval);
            return numericValue;
          }
          return next;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, [numericValue]);

  return (
    <motion.div
      variants={scaleIn}
      className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-300/30"
    >
      <Icon className="w-8 h-8 mx-auto mb-2 text-purple-300" />
      <motion.div 
        className="text-2xl font-bold text-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        {value.includes('+') ? `${Math.round(count)}+` : Math.round(count)}
        {value.includes('%') && '%'}
      </motion.div>
      <div className="text-sm text-slate-300">{label}</div>
    </motion.div>
  );
};

const SkillPill: React.FC<{ skill: string; index: number; category: string }> = ({ skill, index, category }) => {
  const colors = {
    backend: "from-purple-500/30 to-pink-500/30 border-purple-400/50 text-purple-200",
    frontend: "from-blue-500/30 to-cyan-500/30 border-blue-400/50 text-blue-200",
    database: "from-green-500/30 to-emerald-500/30 border-green-400/50 text-green-200",
    cloud: "from-orange-500/30 to-red-500/30 border-orange-400/50 text-orange-200",
    tools: "from-indigo-500/30 to-purple-500/30 border-indigo-400/50 text-indigo-200",
    soft: "from-pink-500/30 to-rose-500/30 border-pink-400/50 text-pink-200"
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }}
      whileHover={{ scale: 1.1, y: -2 }}
      className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${colors[category as keyof typeof colors] || colors.backend} border backdrop-blur-sm transition-all duration-200 cursor-default`}
    >
      {skill}
    </motion.span>
  );
};

const ProjectCard: React.FC<{ project: typeof DATA.projects[0]; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
  >
    <GlassCard className="h-full group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {project.name}
          </h3>
          <p className="text-purple-300 text-sm font-medium">{project.role}</p>
        </div>
        <div className="flex gap-2">
          {project.code && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-purple-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          Key Highlights
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-2 py-1 rounded-md text-xs bg-yellow-500/20 border border-yellow-400/30 text-yellow-200"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  </motion.div>
);

const ExperienceCard: React.FC<{ job: typeof DATA.experience[0]; index: number }> = ({ job, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
    className="relative"
  >
    <GlassCard>
      <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-2 border-white/20 shadow-lg" />
      
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{job.role}</h3>
          <p className="text-purple-300 font-medium">{job.company}</p>
          <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-3 h-3" />
              {job.type}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-purple-300">{job.start} — {job.end}</p>
          <div className="flex flex-wrap gap-1 mt-2 justify-end">
            {job.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-200 border border-blue-400/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ul className="space-y-2 text-slate-300">
        {job.bullets.map((bullet, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="flex items-start gap-3"
          >
            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-sm leading-relaxed">{bullet}</span>
          </motion.li>
        ))}
      </ul>
    </GlassCard>
  </motion.div>
);

// ---- Enhanced Aurora Background ----
const Aurora: React.FC = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ duration: 2 }}
      className="absolute -top-40 -left-40 w-[60rem] h-[60rem] rounded-full blur-3xl"
      style={{ 
        background: "radial-gradient(closest-side, rgba(168,85,247,0.3), rgba(99,102,241,0.2), transparent)" 
      }}
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="absolute top-20 right-[-15rem] w-[50rem] h-[50rem] rounded-full blur-3xl"
      style={{ 
        background: "radial-gradient(closest-side, rgba(56,189,248,0.25), rgba(147,51,234,0.2), transparent)" 
      }}
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="absolute bottom-[-20rem] left-1/2 w-[45rem] h-[45rem] rounded-full blur-3xl"
      style={{ 
        background: "radial-gradient(closest-side, rgba(236,72,153,0.2), rgba(59,130,246,0.15), transparent)" 
      }}
    />
  </div>
);

// ---- Main Portfolio Component ----
const SureshClaudePortfolio: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  // const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-slate-100 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 relative overflow-x-hidden">
      <Aurora />
      
      {/* Enhanced Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur-md bg-slate-900/80"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  TS
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 blur opacity-50 -z-10" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{DATA.name}</h1>
                <p className="text-sm text-purple-300">{DATA.title}</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-6"
            >
              {['home', 'about', 'experience', 'projects', 'skills'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === item
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-400/50'
                      : 'hover:bg-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </motion.nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 space-y-2"
              >
                {['home', 'about', 'experience', 'projects', 'skills'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div
          style={{ y: y1 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          {/* <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative inline-block mb-6"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">TS</span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/30"
            />
          </motion.div> */}

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {DATA.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-purple-300 font-medium mb-2"
          >
            {DATA.title}
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-slate-300 mb-8"
          >
            {DATA.subtitle}
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(40, 107, 239, 0.3)", color: "rgb(244, 234, 234)" }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${DATA.email}`}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <Mail className="w-5 h-5 text-white" />
              Get In Touch
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="src\pages\Files\ResumeSuresh.pdf"
              download
              className="px-8 py-4 border-2 border-purple-400/50 rounded-full font-semibold text-purple-300 hover:bg-purple-400/10 transition-all duration-300 flex items-center gap-2 justify-center backdrop-blur-sm"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {DATA.stats.map((stat, index) => (
              <AnimatedCounter key={index} {...stat} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-slate-400 cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlassCard>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30">
                    <Target className="w-8 h-8 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">My Mission</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {DATA.summary}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-purple-300" />
                    <span className="text-slate-300">{DATA.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-300" />
                    <a href={`mailto:${DATA.email}`} className="text-blue-300 hover:text-blue-200 transition-colors">
                      {DATA.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-300" />
                    <a href={`tel:${DATA.phone}`} className="text-green-300 hover:text-green-200 transition-colors">
                      {DATA.phone}
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <GlassCard>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  Objective
                </h3>
                <p className="text-slate-300 leading-relaxed">{DATA.objective}</p>
              </GlassCard>

              <GlassCard>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-400" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {DATA.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-purple-200 text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </GlassCard>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 flex items-center gap-3 text-white"
                >
                  <Github className="w-6 h-6" />
                  <span className="font-medium">GitHub</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 flex items-center gap-3 text-white"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500" />
            <div className="space-y-8 pl-12">
              {DATA.experience.map((job, index) => (
                <ExperienceCard key={job.company} job={job} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATA.projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(DATA.skills).map(([category, skills]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard>
                  <h3 className="text-xl font-bold text-white mb-6 capitalize flex items-center gap-2">
                    {category === 'backend' && <Database className="w-6 h-6 text-purple-400" />}
                    {category === 'frontend' && <Code className="w-6 h-6 text-blue-400" />}
                    {category === 'database' && <Package className="w-6 h-6 text-green-400" />}
                    {category === 'cloud' && <Sparkles className="w-6 h-6 text-orange-400" />}
                    {category === 'tools' && <Briefcase className="w-6 h-6 text-indigo-400" />}
                    {category === 'soft' && <Users className="w-6 h-6 text-pink-400" />}
                    {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <SkillPill key={skill} skill={skill} index={index} category={category} />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {DATA.education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <GlassCard>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">{edu.school}</h3>
                      <p className="text-purple-300 font-medium mb-2">{edu.degree}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>Class of {edu.year}</span>
                        <span>•</span>
                        <span>{edu.score}</span>
                      </div>
                      <p className="text-slate-400 text-sm mt-1">{edu.location}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Ready to build something amazing? I'm always open to discussing new opportunities and exciting projects.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168,85,247,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${DATA.email}`}
                  className="p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-xl hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center gap-3"
                >
                  <Mail className="w-8 h-8 text-purple-300" />
                  <span className="font-semibold text-white">Send Email</span>
                  <span className="text-sm text-slate-300">{DATA.email}</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34,197,94,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href={`tel:${DATA.phone}`}
                  className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl hover:border-green-400/50 transition-all duration-300 flex flex-col items-center gap-3"
                >
                  <Phone className="w-8 h-8 text-green-300" />
                  <span className="font-semibold text-white">Call Me</span>
                  <span className="text-sm text-slate-300">{DATA.phone}</span>
                </motion.a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex justify-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-white/10 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-slate-400"
          >
            <p className="mb-2">
              © {new Date().getFullYear()} {DATA.name}. Built with React, Framer Motion & Tailwind CSS.
            </p>
            <p className="text-sm">
              Designed with passion for creating exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default SureshClaudePortfolio;