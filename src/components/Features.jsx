import { CreditCard, Store, BarChart3, Globe } from 'lucide-react';

const features = [
  {
    icon: Store,
    title: 'Point of Sale',
    desc: 'A modern POS that works online and offline with real-time inventory sync.'
  },
  {
    icon: CreditCard,
    title: 'Payments',
    desc: 'Accept cards, mobile money, and bank transfers with one simple integration.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Beautiful dashboards that turn your data into decisions.'
  },
  {
    icon: Globe,
    title: 'Online Ordering',
    desc: 'Launch your storefront, manage menus, and fulfil orders from anywhere.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">All the tools to run your business</h2>
          <p className="mt-3 text-gray-600">Everything is designed to work beautifully together so you can focus on growth.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
