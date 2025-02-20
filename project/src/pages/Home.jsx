// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';
// import {
//   Github,
//   Linkedin,
//   Twitter,
//   Mail,
//   ArrowRight,
//   Edit2,
//   Code2,
//   Terminal,
//   Rocket,
//   Sparkles,
// } from 'lucide-react';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from '@/components/ui/dialog';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';
// import axios from 'axios';
// import { setUser } from '@/store/slices/authSlice';

// const technologies = [
//   { name: 'React', icon: '⚛️' },
//   { name: 'Node.js', icon: '🟢' },
//   { name: 'MongoDB', icon: '🍃' },
//   { name: 'Express', icon: '⚡' },
//   { name: 'TypeScript', icon: '📘' },
//   { name: 'Tailwind CSS', icon: '🎨' },
// ];

// function AboutDialog({ open, onOpenChange, about, isEditable }) {
//   const [formData, setFormData] = useState(about || {});
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);
//   const { toast } = useToast();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `${import.meta.env.VITE_API_URL}/about`,
//         formData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       dispatch(setUser({ about: response.data }));
//       toast({
//         title: 'Success',
//         description: 'About section updated successfully',
//       });
//       onOpenChange(false);
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: error.response?.data?.message || 'Update failed',
//         variant: 'destructive',
//       });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes('.')) {
//       const [parent, child] = name.split('.');
//       setFormData((prev) => ({
//         ...prev,
//         [parent]: { ...prev[parent], [child]: value },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-[600px]">
//         <DialogHeader>
//           <DialogTitle>About Me</DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="title">Title</Label>
//             <Input
//               id="title"
//               name="title"
//               value={formData.title || ''}
//               onChange={handleChange}
//               readOnly={!isEditable}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="bio">Bio</Label>
//             <Textarea
//               id="bio"
//               name="bio"
//               value={formData.bio || ''}
//               onChange={handleChange}
//               readOnly={!isEditable}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="location">Location</Label>
//             <Input
//               id="location"
//               name="location"
//               value={formData.location || ''}
//               onChange={handleChange}
//               readOnly={!isEditable}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="socialLinks.github">GitHub URL</Label>
//             <Input
//               id="socialLinks.github"
//               name="socialLinks.github"
//               value={formData.socialLinks?.github || ''}
//               onChange={handleChange}
//               readOnly={!isEditable}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="socialLinks.linkedin">LinkedIn URL</Label>
//             <Input
//               id="socialLinks.linkedin"
//               name="socialLinks.linkedin"
//               value={formData.socialLinks?.linkedin || ''}
//               onChange={handleChange}
//               readOnly={!isEditable}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="socialLinks.twitter">Twitter URL</Label>
//             <Input
//               id="socialLinks.twitter"
//               name="socialLinks.twitter"
//               value={formData.socialLinks?.twitter || ''}
//               onChange={handleChange}
//               readOnly={!isEditable}
//             />
//           </div>
//           {isEditable && (
//             <div className="flex justify-end">
//               <Button type="submit">Save Changes</Button>
//             </div>
//           )}
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

// function Home() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const { user, isAuthenticated } = useSelector((state) => state.auth);
//   const about = user?.about || {
//     title: 'Full Stack Developer',
//     bio: 'I build exceptional and accessible digital experiences for the web.',
//   };

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="min-h-[calc(100vh-4rem)]">
//       {/* Hero Section */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center space-y-8">
//           <div className="relative mb-8 inline-block">
//             <h1
//               className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 transition-all duration-1000 ${
//                 isVisible
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-10'
//               }`}
//             >
//               {about.title}
//             </h1>
//             {isAuthenticated && (
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute -right-12 top-0"
//                 onClick={() => setIsDialogOpen(true)}
//               >
//                 <Edit2 className="h-4 w-4" />
//               </Button>
//             )}
//           </div>
//           <p
//             className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
//               isVisible
//                 ? 'opacity-100 translate-y-0'
//                 : 'opacity-0 translate-y-10'
//             }`}
//           >
//             {about.bio}
//           </p>
//           {about.location && (
//             <p
//               className={`text-lg text-muted-foreground transition-all duration-1000 delay-500 ${
//                 isVisible
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-10'
//               }`}
//             >
//               📍 {about.location}
//             </p>
//           )}
//           <div
//             className={`flex justify-center gap-4 transition-all duration-1000 delay-700 ${
//               isVisible
//                 ? 'opacity-100 translate-y-0'
//                 : 'opacity-0 translate-y-10'
//             }`}
//           >
//             <Button size="lg" asChild>
//               <Link to="/projects" className="group">
//                 View Projects
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Link>
//             </Button>
//             <Button variant="outline" size="lg" asChild>
//               <a href="mailto:your.email@example.com" className="group">
//                 Contact Me
//                 <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-[-2px]" />
//               </a>
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-muted/50 py-20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div
//               className={`p-6 rounded-lg bg-background shadow-lg transition-all duration-1000 delay-[800ms] ${
//                 isVisible
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-10'
//               }`}
//             >
//               <Code2 className="h-12 w-12 mb-4 text-primary" />
//               <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
//               <p className="text-muted-foreground">
//                 Writing clean, maintainable, and scalable code is my top
//                 priority.
//               </p>
//             </div>
//             <div
//               className={`p-6 rounded-lg bg-background shadow-lg transition-all duration-1000 delay-[1000ms] ${
//                 isVisible
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-10'
//               }`}
//             >
//               <Terminal className="h-12 w-12 mb-4 text-primary" />
//               <h3 className="text-xl font-semibold mb-2">Modern Stack</h3>
//               <p className="text-muted-foreground">
//                 Using the latest technologies to build fast and responsive
//                 applications.
//               </p>
//             </div>
//             <div
//               className={`p-6 rounded-lg bg-background shadow-lg transition-all duration-1000 delay-[1200ms] ${
//                 isVisible
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-10'
//               }`}
//             >
//               <Rocket className="h-12 w-12 mb-4 text-primary" />
//               <h3 className="text-xl font-semibold mb-2">Performance</h3>
//               <p className="text-muted-foreground">
//                 Optimizing for the best possible user experience and
//                 performance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Technologies Section */}
//       <div className="py-20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">
//               Technologies I Work With
//             </h2>
//             <p className="text-muted-foreground">
//               My favorite tools for building amazing web applications
//             </p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//             {technologies.map((tech, index) => (
//               <div
//                 key={tech.name}
//                 className={`p-4 rounded-lg bg-muted/50 text-center transition-all duration-700 hover:scale-105 ${
//                   isVisible
//                     ? 'opacity-100 translate-y-0'
//                     : 'opacity-0 translate-y-10'
//                 }`}
//                 style={{ transitionDelay: `${1400 + index * 100}ms` }}
//               >
//                 <div className="text-3xl mb-2">{tech.icon}</div>
//                 <div className="font-medium">{tech.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Social Links */}
//       <div className="py-12 border-t">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className={`flex justify-center gap-6 transition-all duration-1000 delay-[2000ms] ${
//               isVisible
//                 ? 'opacity-100 translate-y-0'
//                 : 'opacity-0 translate-y-10'
//             }`}
//           >
//             {about.socialLinks?.github && (
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 asChild
//                 className="hover:scale-110 transition-transform"
//               >
//                 <a
//                   href={about.socialLinks.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Github className="h-5 w-5" />
//                 </a>
//               </Button>
//             )}
//             {about.socialLinks?.linkedin && (
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 asChild
//                 className="hover:scale-110 transition-transform"
//               >
//                 <a
//                   href={about.socialLinks.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//               </Button>
//             )}
//             {about.socialLinks?.twitter && (
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 asChild
//                 className="hover:scale-110 transition-transform"
//               >
//                 <a
//                   href={about.socialLinks.twitter}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Twitter className="h-5 w-5" />
//                 </a>
//               </Button>
//             )}
//             <Button
//               variant="ghost"
//               size="icon"
//               asChild
//               className="hover:scale-110 transition-transform"
//             >
//               <a href="mailto:your.email@example.com">
//                 <Mail className="h-5 w-5" />
//               </a>
//             </Button>
//           </div>
//         </div>
//       </div>

//       <AboutDialog
//         open={isDialogOpen}
//         onOpenChange={setIsDialogOpen}
//         about={about}
//         isEditable={isAuthenticated}
//       />
//     </div>
//   );
// }

// export default Home;

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Terminal,
  Database,
  Server,
  Layout,
  Code2,
  Brain,
  Rocket,
  Globe,
  Monitor,
  Coffee,
  Award,
  BookOpen,
  Star,
  Users,
  Moon,
  Sun,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import { setUser } from '@/store/slices/authSlice';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '⚡' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind CSS', icon: '🎨' },
];

function AboutDialog({ open, onOpenChange, about, isEditable }) {
  const [formData, setFormData] = useState(about || {});
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/auth/about`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(setUser({ about: response.data }));
      toast({
        title: 'Success',
        description: 'About section updated successfully',
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Update failed',
        variant: 'destructive',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>About Me</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title || ''}
              onChange={handleChange}
              readOnly={!isEditable}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio || ''}
              onChange={handleChange}
              readOnly={!isEditable}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location || ''}
              onChange={handleChange}
              readOnly={!isEditable}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="socialLinks.github">GitHub URL</Label>
            <Input
              id="socialLinks.github"
              name="socialLinks.github"
              value={formData.socialLinks?.github || ''}
              onChange={handleChange}
              readOnly={!isEditable}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="socialLinks.linkedin">LinkedIn URL</Label>
            <Input
              id="socialLinks.linkedin"
              name="socialLinks.linkedin"
              value={formData.socialLinks?.linkedin || ''}
              onChange={handleChange}
              readOnly={!isEditable}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="socialLinks.twitter">Twitter URL</Label>
            <Input
              id="socialLinks.twitter"
              name="socialLinks.twitter"
              value={formData.socialLinks?.twitter || ''}
              onChange={handleChange}
              readOnly={!isEditable}
            />
          </div>
          {isEditable && (
            <div className="flex justify-end">
              <Button type="submit">Save Changes</Button>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const about = user?.about || {
    title: 'Full Stack Developer',
    bio: 'I build exceptional and accessible digital experiences for the web.',
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack MERN application with Redux state management and Stripe payment integration',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'Stripe'],
      link: '#',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Task Management System',
      description:
        'Real-time collaborative task manager with WebSocket integration and JWT authentication',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
      link: '#',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard with data visualization using Chart.js and REST API integration',
      tech: [
        'React',
        'Express',
        'MongoDB',
        'Chart.js',
        'Material-UI',
        'Node.js',
      ],
      link: '#',
      image: '/api/placeholder/600/400',
    },
  ];

  const skills = [
    {
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      title: 'Frontend',
      items: ['React', 'Redux', 'Tailwind CSS', 'JavaScript ES6+'],
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: 'Backend',
      items: ['Node.js', 'Express', 'REST APIs'],
    },
    {
      icon: <Database className="w-6 h-6 text-purple-500" />,
      title: 'Database',
      items: ['MongoDB', 'Mongoose', 'SQL', 'Redis'],
    },
    {
      icon: <Terminal className="w-6 h-6 text-pink-500" />,
      title: 'Tools',
      items: ['Git', 'Docker', 'AWS', 'Jest'],
    },
  ];

  const stats = [
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      value: '5+',
      label: 'Years Experience',
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      value: '50+',
      label: 'Projects Completed',
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      value: '30+',
      label: 'Happy Clients',
    },
    {
      icon: <Coffee className="w-6 h-6 text-orange-500" />,
      value: '∞',
      label: 'Coffee Cups',
    },
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Web Development',
      description: 'Full-stack web applications with modern technologies',
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'API Development',
      description: 'RESTful API design and implementation',
    },
    {
      icon: <Monitor className="w-8 h-8 text-green-500" />,
      title: 'UI/UX Design',
      description: 'Responsive and intuitive user interfaces',
    },
    {
      icon: <Rocket className="w-8 h-8 text-red-500" />,
      title: 'Cloud Deployment',
      description: 'AWS and Docker deployment solutions',
    },
  ];
  const fadeInUpClass = 'opacity-0 translate-y-8 animate-fade-in-up';
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Theme Toggle Button - Fixed Position */}

      {/* Rest of the JSX remains similar but with added animation classes */}
      <header className="container mx-auto px-4 pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02] animate-fade-in" />
        <div className="relative text-center">
          <div className="inline-block mb-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-fade-in-down">
            <img
              src="/api/placeholder/150/150"
              alt="Profile"
              className="w-32 h-32 rounded-full animate-fade-in"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-fade-in-up">
            John Doe
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up animation-delay-100">
            MERN Stack Developer
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Building scalable web applications with MongoDB, Express, React, and
            Node.js. Passionate about creating efficient, user-friendly
            solutions.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform group"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />{' '}
              Contact Me
            </Button>
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-transform"
            >
              View Resume
            </Button>
          </div>
          <div className="flex justify-center gap-4 mt-6 animate-fade-in-up animation-delay-400">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:scale-110 transition-transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:scale-110 transition-transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Add the following CSS to your global styles or Tailwind config */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Add smooth transitions for theme changes */
        * {
          transition-property: color, background-color, border-color;
          transition-duration: 300ms;
        }
      `}</style>

      {/* Rest of the sections with added animation classes */}
      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-shadow ${fadeInUpClass}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                {stat.icon}
                <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 ${fadeInUpClass}`}
        >
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${fadeInUpClass}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-block p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 bg-white dark:bg-gray-800 rounded-3xl my-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:translate-x-1 transition-transform"
                >
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-16">
        <Card className="border-none shadow-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas
              to life using the latest web technologies.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="hover:scale-105 transition-transform"
            >
              Get In Touch
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default Home;
