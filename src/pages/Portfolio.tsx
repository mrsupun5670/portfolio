import React, { useEffect, useState, useRef } from 'react';
import { GravityScene } from '../components/GravityScene';
import { GlassCard } from '../components/ui/GlassCard';
import { Server, Cpu, Globe, Terminal, ExternalLink, Github, Linkedin, Mail, Download, MapPin, Phone, Send, Facebook } from 'lucide-react';
// --- DATA ---
const SKILLS_DATA = {
  frontend: [{
    name: 'React',
    level: 95
  }, {
    name: 'Next.js',
    level: 90
  }, {
    name: 'TypeScript',
    level: 92
  }, {
    name: 'Tailwind',
    level: 95
  }],
  backend: [{
    name: 'Node.js',
    level: 90
  }, {
    name: 'PHP',
    level: 88
  }, {
    name: 'Laravel',
    level: 88
  }, {
    name: 'MySQL',
    level: 90
  }],
  tools: [{
    name: 'Firebase',
    level: 92
  }, {
    name: 'Git',
    level: 93
  }, {
    name: 'Hostinger',
    level: 88
  }, {
    name: 'Porkbun',
    level: 85
  }]
};
const PROJECTS_DATA = [{
  title: 'Rasilco Bakers',
  category: 'Fullstack',
  desc: 'Complete e-commerce platform for bakery products with online ordering, payment integration, and inventory management.',
  tags: ['React', 'PHP', 'MySQL', 'Hostinger'],
  link: 'https://rasilcobakers.lk/',
  github: 'https://github.com/mrsupun5670'
}, {
  title: 'Nayagara LK',
  category: 'Fullstack',
  desc: 'Dynamic e-commerce website with modern UI/UX, Firebase authentication, and seamless shopping experience.',
  tags: ['React', 'Firebase', 'MySQL'],
  link: 'https://nayagara.lk/',
  github: 'https://github.com/mrsupun5670'
}, {
  title: 'Redragon Colombo',
  category: 'Fullstack',
  desc: 'Official e-commerce site for gaming peripherals with product catalog, cart system, and payment gateway.',
  tags: ['Next.js', 'PHP', 'MySQL'],
  link: 'https://www.redragoncolombo.lk/',
  github: 'https://github.com/mrsupun5670'
}, {
  title: 'Neptune Mobile POS',
  category: 'Backend',
  desc: 'Desktop POS application for mobile retail store with inventory tracking, sales management, and reporting.',
  tags: ['Electron', 'Node.js', 'MySQL'],
  link: '#',
  github: 'https://github.com/mrsupun5670'
}, {
  title: 'Dennep POS',
  category: 'Fullstack',
  desc: 'Full-featured desktop POS system for clothing retail with size/color variants, invoice printing, and stock management.',
  tags: ['Electron', 'React', 'MySQL'],
  link: '#',
  github: 'https://github.com/mrsupun5670'
}, {
  title: 'Top Foods POS',
  category: 'Fullstack',
  desc: 'Restaurant POS application with table management, order tracking, and kitchen display system.',
  tags: ['Electron', 'Node.js', 'MySQL'],
  link: '#',
  github: 'https://github.com/mrsupun5670'
}, {
  title: 'Gunarathna Super POS',
  category: 'Fullstack',
  desc: 'Retail store POS system with barcode scanning, inventory management, and sales analytics.',
  tags: ['Electron', 'React', 'MySQL'],
  link: '#',
  github: 'https://github.com/mrsupun5670'
}, {
  title: 'E-commerce Sites',
  category: 'Frontend',
  desc: 'Multiple static and dynamic e-commerce websites with premium UI/UX designs and responsive layouts.',
  tags: ['React', 'Next.js', 'Tailwind'],
  link: '#',
  github: 'https://github.com/mrsupun5670'
}, {
  title: 'Custom Web Solutions',
  category: 'Backend',
  desc: 'Various custom web applications including CMS, dashboards, and business management systems.',
  tags: ['Laravel', 'PHP', 'MySQL'],
  link: '#',
  github: 'https://github.com/mrsupun5670'
}];
const EXPERIENCE_DATA = [{
  role: 'Co-Founder & Director, Fullstack Software Engineer',
  company: 'ZipZipy Pvt Ltd',
  period: 'June 2025 - Present',
  desc: 'Leading the company as Co-Founder and Director while serving as the lead Fullstack Software Engineer. Architecting and developing cutting-edge web applications and desktop solutions with premium UI/UX designs.',
  tags: ['React', 'Node.js', 'MySQL', 'Firebase'],
  achievements: ['Co-founded and established ZipZipy Pvt Ltd', 'Developed 9+ production-ready applications', 'Served 10+ clients with custom software solutions', 'Implemented full-stack solutions with modern tech stack']
}];
// --- COMPONENTS ---
export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('home');
  
  // Typewriter Effect State
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = 'Supun Gunasinghe';
  const [delta, setDelta] = useState(150);
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);
  
  const tick = () => {
    let fullText = toRotate;
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta(prev => prev / 2); // Speed up deleting
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setDelta(150); // Reset typing speed
    } else if (!isDeleting && updatedText !== fullText) {
      setDelta(150); // Normal typing speed
    }
  };

  // Active Section Tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contact Form State
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [messageLength, setMessageLength] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'message') {
      setMessageLength(value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus('idle');

    try {
      // Using FormSubmit.co - No setup required!
      const response = await fetch('https://formsubmit.co/supun9402@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSendStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setMessageLength(0);
        setTimeout(() => setSendStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSendStatus('error');
      setTimeout(() => setSendStatus('idle'), 5000);
    } finally {
      setIsSending(false);
    }
  };

  const filteredProjects = activeFilter === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === activeFilter);
  return <div className="relative min-h-screen w-full text-white font-sans selection:bg-cyan-500/30">
      <GravityScene />

      <div className="relative z-10 w-full overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/5">
          <div className="text-xl font-bold tracking-widest text-cyan-400 flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            <span>
              SUPUN<span className="text-white">.DEV</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map(item => <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`hover:text-cyan-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-cyan-400 font-bold' : ''}`}
              >
                  {item}
                </a>)}
          </div>
          <a href="#contact" className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all text-sm font-bold">
            Hire Me
          </a>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative">
          <div className="max-w-5xl w-full text-center space-y-8">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl md:text-2xl font-medium text-gray-400">
                Hello, I'm
              </span>
              <div className="h-12 md:h-16 flex items-center justify-center">
                <span className="text-4xl md:text-6xl font-mono font-bold text-cyan-400 tracking-tight">
                  {text}
                  <span className="animate-pulse text-white ml-1">|</span>
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                FULLSTACK
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                SOFTWARE ENGINEER
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
              Frontend & Backend Developer
            </p>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto py-4">
              {['React', 'Node.js', 'Next.js', 'Laravel', 'PHP', 'MySQL', 'Firebase', 'Electron'].map(tech => <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  {tech}
                </span>)}
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 pt-8">
              <GlassCard className="px-8 py-4 cursor-pointer bg-cyan-500/20 border-cyan-500/50 hover:bg-cyan-500/30 group" hoverEffect>
                <span className="font-bold text-cyan-300 flex items-center gap-2">
                  View Projects{' '}
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </GlassCard>
              <GlassCard className="px-8 py-4 cursor-pointer hover:bg-white/10 group" hoverEffect>
                <span className="font-bold flex items-center gap-2">
                  Download CV{' '}
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </GlassCard>
            </div>
          </div>

          <div className="absolute bottom-10 animate-bounce text-gray-500 flex flex-col items-center">
            <div className="text-xs tracking-widest uppercase mb-2">Scroll</div>
            <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
          </div>
        </section>

        {/* About & Stats Section */}
        <section id="about" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">
                  <span className="text-cyan-400">About</span> Me
                </h2>
                <h3 className="text-2xl font-semibold text-gray-200">
                  Crafting Digital Experiences
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Hey! I'm a fullstack developer and co-founder at ZipZipy Pvt Ltd. 
                  I love building e-commerce platforms, POS systems, and web apps that 
                  actually solve real problems for businesses.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My work ranges from designing sleek user interfaces to building solid 
                  backends. I'm comfortable with React, Node.js, PHP, Laravel, and MySQL. 
                  For hosting I usually go with Hostinger, grab domains from Porkbun, 
                  and use Firebase when I need quick authentication.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I've built sites like Rasilco Bakers and Redragon Colombo, plus several 
                  desktop POS apps for retail stores and restaurants. Always trying to 
                  make things look good while keeping the code clean.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[{
                label: 'Years Experience',
                value: '1+'
              }, {
                label: 'Projects Completed',
                value: '9+'
              }, {
                label: 'Technologies',
                value: '15+'
              }, {
                label: 'Happy Clients',
                value: '10+'
              }].map((stat, idx) => <GlassCard key={idx} tiltEffect className="p-6 flex flex-col items-center justify-center text-center aspect-square md:aspect-auto md:h-40">
                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">
                      {stat.label}
                    </div>
                  </GlassCard>)}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center animate-on-scroll">
              Vision & <span className="text-cyan-400">Mission</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard className="p-8 animate-on-scroll animate-delay-1" tiltEffect>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-cyan-500/20">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Vision</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  To build software that makes a real difference. I want to create tools 
                  that help businesses grow and make people's work easier. Whether it's 
                  a small shop or a growing company, good software should be accessible 
                  to everyone.
                </p>
              </GlassCard>

              <GlassCard className="p-8 animate-on-scroll animate-delay-2" tiltEffect>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-purple-500/20">
                    <Terminal className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Mission</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Keep learning, keep building. I focus on writing clean code, designing 
                  intuitive interfaces, and delivering projects that actually work. My goal 
                  is to help clients succeed with reliable, well-built solutions that solve 
                  their specific problems.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Featured <span className="text-cyan-400">Projects</span>
              </h2>
              <p className="text-gray-400">
                Showcasing fullstack development expertise across various
                technologies
              </p>

              <div className="flex justify-center gap-2 mt-8 flex-wrap">
                {['All', 'Frontend', 'Backend', 'Fullstack'].map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                    {filter}
                  </button>)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => <GlassCard key={idx} tiltEffect className={`flex flex-col h-full group animate-on-scroll animate-delay-${Math.min(idx % 4 + 1, 4)}`}>
                  <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden group">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="text-2xl font-bold text-white">
                        {project.title}
                      </div>
                      <div className="flex gap-2">
                        <a href={project.github} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" title="GitHub">
                          <Github className="w-4 h-4" />
                        </a>
                        <a href={project.link} className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400 transition-colors" title="Live Demo">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">
                      {project.category}
                    </div>
                    <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </GlassCard>)}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">
              Technical <span className="text-cyan-400">Arsenal</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend */}
              <GlassCard className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" /> Frontend
                </h3>
                <div className="space-y-6">
                  {SKILLS_DATA.frontend.map(skill => <div key={skill.name}>
                      <div className="flex justify-between mb-2 text-sm">
                        <span className="font-medium text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{
                      width: `${skill.level}%`
                    }} />
                      </div>
                    </div>)}
                </div>
              </GlassCard>

              {/* Backend */}
              <GlassCard className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Server className="w-5 h-5 text-purple-400" /> Backend
                </h3>
                <div className="space-y-6">
                  {SKILLS_DATA.backend.map(skill => <div key={skill.name}>
                      <div className="flex justify-between mb-2 text-sm">
                        <span className="font-medium text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{
                      width: `${skill.level}%`
                    }} />
                      </div>
                    </div>)}
                </div>
              </GlassCard>

              {/* Tools */}
              <GlassCard className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-green-400" /> Tools & DevOps
                </h3>
                <div className="space-y-6">
                  {SKILLS_DATA.tools.map(skill => <div key={skill.name}>
                      <div className="flex justify-between mb-2 text-sm">
                        <span className="font-medium text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-green-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{
                      width: `${skill.level}%`
                    }} />
                      </div>
                    </div>)}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4 bg-black/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">
              Professional <span className="text-cyan-400">Journey</span>
            </h2>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500/30 before:to-transparent">
              {EXPERIENCE_DATA.map((job, idx) => <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500/30 bg-black shadow-[0_0_10px_rgba(6,182,212,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                  </div>

                  {/* Content */}
                  <GlassCard className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8" tiltEffect>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                      <div>
                        <h3 className="font-bold text-xl text-white">
                          {job.role}
                        </h3>
                        <div className="text-cyan-400 font-medium">
                          {job.company}
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {job.desc}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {job.achievements.map((item, i) => <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-cyan-500 mt-1">▹</span> {item}
                        </li>)}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {job.tags.map(tag => <span key={tag} className="text-xs text-gray-500 font-mono">
                          #{tag}
                        </span>)}
                    </div>
                  </GlassCard>
                </div>)}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4">
                    Let's Build Something <br />
                    <span className="text-cyan-400">Together</span>
                  </h2>
                  <p className="text-gray-400 text-lg">
                    Have a project in mind or want to collaborate? I'm always
                    open to discussing new opportunities and innovative ideas.
                  </p>
                </div>

                <div className="space-y-6">
                  <GlassCard className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">
                        Email
                      </div>
                      <div className="text-lg font-medium">
                        supun9402@gmail.com
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">
                        Phone
                      </div>
                      <div className="text-lg font-medium">
                        +94 77 20 10 915
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">
                        Location
                      </div>
                      <div className="text-lg font-medium">
                        Zipzipy Pvt Ltd, Nikaweratiya, Kurunegala
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>

              {/* Contact Form */}
              <GlassCard className="p-8 md:p-10">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" 
                        placeholder="Supun Gunasinghe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" 
                        placeholder="your@email.com" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" 
                      placeholder="Project Inquiry" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Your Message
                    </label>
                    <textarea 
                      rows={5} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      maxLength={500}
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none" 
                      placeholder="Tell me about your project..." 
                    />
                    <div className="text-right text-xs text-gray-500">
                      {messageLength}/500
                    </div>
                  </div>

                  {sendStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-sm">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {sendStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
                      ✗ Failed to send message. Please try again or email me directly at supun9402@gmail.com
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSending}
                    className={`w-full py-4 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSending ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                  </button>
                </form>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-white/5 bg-black/60 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold tracking-widest text-cyan-400 mb-6 flex items-center gap-2">
                <Terminal className="w-8 h-8" />
                <span>
                  SUPUN<span className="text-white">.DEV</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-sm mb-8">
                Fullstack developer who loves building cool stuff. 
                Always learning, always coding.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/mrsupun5670" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all" title="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://web.facebook.com/mrsupungunasinghe" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all" title="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all" title="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:supun9402@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all" title="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Navigation</h4>
              <ul className="space-y-3 text-gray-400">
                {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map(item => <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                      {item}
                    </a>
                  </li>)}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                {['Blog', 'Documentation', 'Case Studies', 'Open Source'].map(item => <li key={item}>
                      <a href="#" className="hover:text-cyan-400 transition-colors">
                        {item}
                      </a>
                    </li>)}
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>© 2025 Supun Gunasinghe. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>;
}