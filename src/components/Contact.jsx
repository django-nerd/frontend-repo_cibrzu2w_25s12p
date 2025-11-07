import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
          <Mail className="h-5 w-5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Get in touch</h2>
      </div>

      <form onSubmit={onSubmit} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        {sent ? (
          <p className="text-green-700 bg-green-50 border border-green-100 p-3 rounded-md">
            Thanks! Your message has been noted.
          </p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  className="mt-1 w-full rounded-md border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  className="mt-1 w-full rounded-md border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="mt-1 w-full rounded-md border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                rows="5"
                name="message"
                value={form.message}
                onChange={onChange}
                required
              />
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">
                <Send className="h-5 w-5" /> Send Message
              </button>
            </div>
          </>
        )}
      </form>
    </section>
  );
}
