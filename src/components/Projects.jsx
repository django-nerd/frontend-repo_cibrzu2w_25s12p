import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Realtime Metrics Service',
    description:
      'Ingests application metrics and exposes rollups via a low-latency API. Horizontally scalable with Redis streams and worker pool.',
    stack: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
    link: '#',
  },
  {
    name: 'Auth & Identity Platform',
    description:
      'Token-based auth service with RBAC, JWT rotation, and audit logging. Focus on security and DX.',
    stack: ['Go', 'PostgreSQL', 'OpenTelemetry'],
    link: '#',
  },
  {
    name: 'Data Pipeline Orchestrator',
    description:
      'Resilient job orchestration with backoff, idempotency keys, and dead-letter queues.',
    stack: ['Python', 'Kafka', 'ClickHouse'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
          <Code2 className="h-5 w-5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Projects</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.name} className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700">{p.name}</h3>
            <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{s}</span>
              ))}
            </div>
            <a href={p.link} className="mt-4 inline-flex items-center gap-1 text-indigo-700 text-sm font-medium hover:underline">
              Explore <ExternalLink className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
