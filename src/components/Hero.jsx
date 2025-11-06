import { Check, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              <Shield size={14} />
              Built for modern businesses
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Accept payments and grow with an all‑in‑one platform
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              Launch fast with a beautiful checkout, powerful dashboards, and flexible tools designed to scale with you.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800">
                Get a demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
                See features
              </a>
            </div>

            <ul className="mt-8 grid sm:grid-cols-3 gap-4 text-sm text-gray-700">
              {[
                ['Fast onboarding', Zap],
                ['Secure by default', Shield],
                ['24/7 support', Check],
              ].map(([label, Icon]) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                    <Icon size={16} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1554224155-3a589877462f?q=80&w=1200&auto=format&fit=crop"
                alt="Dashboard preview"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-8 -left-8 -right-8 -top-8 bg-gradient-to-br from-indigo-500/5 via-fuchsia-500/5 to-transparent blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
