import { Github, Linkedin, Mail, Server } from 'lucide-react';

export default function HeaderHero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 text-indigo-700 font-medium bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
              <Server className="h-4 w-4" /> Backend Software Engineer
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              I design and build reliable APIs and systems
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl">
              Focused on performance, scalability, and developer experience. I love turning complex requirements into clean, maintainable services.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">
                View Projects
              </a>
              <a href="mailto:you@example.com" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 shadow-sm transition">
                <Mail className="h-5 w-5 mr-2" /> Email Me
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-4 py-3 rounded-md bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 shadow-sm transition">
                <Github className="h-5 w-5 mr-2" /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-4 py-3 rounded-md bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 shadow-sm transition">
                <Linkedin className="h-5 w-5 mr-2" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative bg-white/80 backdrop-blur rounded-2xl border border-gray-100 p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Python', value: 'FastAPI, Django' },
                  { label: 'Node.js', value: 'Express, Nest' },
                  { label: 'Databases', value: 'Postgres, MongoDB' },
                  { label: 'Messaging', value: 'Redis, Kafka' },
                  { label: 'Cloud', value: 'AWS, Docker' },
                  { label: 'Observability', value: 'OpenTelemetry' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-gray-100 p-4 bg-gradient-to-br from-gray-50 to-white">
                    <p className="text-xs uppercase tracking-wider text-gray-500">{item.label}</p>
                    <p className="mt-1 text-gray-900 font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Strong foundation in system design, testing, CI/CD, and performance tuning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
