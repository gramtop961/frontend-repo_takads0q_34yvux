import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Zatiq Easy</h3>
            <p className="mt-2 text-sm text-gray-600">The simple way to run, grow, and get paid.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@zatiqeasy.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Remote-first
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Newsletter</h4>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
                aria-label="Email"
              />
              <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Zatiq Easy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
