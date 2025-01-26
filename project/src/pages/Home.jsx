import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Full Stack Developer
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          I build exceptional and accessible digital experiences for the web.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <Button asChild>
            <Link to="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:6326vivekgangani@gmail.com">Contact Me</a>
          </Button>
        </div>
        <div className="flex justify-center gap-6">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:6326vivekgangani@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
