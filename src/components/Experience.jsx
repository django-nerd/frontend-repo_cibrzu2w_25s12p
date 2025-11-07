import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Backend Software Engineer',
    company: 'Acme Corp',
    period: '2022 — Present',
    points: [
      'Designed RESTful APIs serving millions of requests per day',
      'Drove performance improvements reducing p95 latency by 40%',
      'Implemented observability with tracing and metrics',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Tech Labs',
    period: '2020 — 2022',
    points: [
      'Built data pipelines and ETL jobs for analytics',
      'Led migration from monolith to microservices',
      'Set up CI/CD with automated testing and deployments',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
          <Briefcase className="h-5 w-5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Experience</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="rounded-xl border border-gray-100 p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p className="text-gray-600 mt-1">{exp.company}</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
