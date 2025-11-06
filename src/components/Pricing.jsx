import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    features: [
      'Basic POS',
      'Online orders (10/mo)',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$29/mo',
    features: [
      'Advanced POS',
      'Unlimited online orders',
      'Priority support',
      'Team accounts',
    ],
  },
  {
    name: 'Scale',
    price: 'Custom',
    features: [
      'Multi-location',
      'Dedicated manager',
      'Custom integrations',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Upgrade when you’re ready.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">{tier.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
