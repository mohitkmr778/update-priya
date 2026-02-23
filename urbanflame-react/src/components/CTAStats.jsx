import { useEffect, useState } from "react";

function CTAStats() {
  const [counts, setCounts] = useState({
    clients: 0,
    ro: 0,
    chimney: 0,
    gas: 0,
  });

  useEffect(() => {
    const targets = {
      clients: 2500,
      ro: 1800,
      chimney: 2100,
      gas: 1200,
    };

    const interval = setInterval(() => {
      setCounts(prev => ({
        clients: prev.clients < targets.clients ? prev.clients + 25 : targets.clients,
        ro: prev.ro < targets.ro ? prev.ro + 20 : targets.ro,
        chimney: prev.chimney < targets.chimney ? prev.chimney + 20 : targets.chimney,
        gas: prev.gas < targets.gas ? prev.gas + 15 : targets.gas,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-20"
      style={{ backgroundImage: "url('/images/cta.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted Appliance Service Experts
        </h2>

        <p className="mb-10 text-gray-300">
          Thousands of happy customers across chimney, RO & gas stove services
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBox number={counts.clients} label="Happy Clients" />
          <StatBox number={counts.ro} label="RO Services" />
          <StatBox number={counts.chimney} label="Chimney Services" />
          <StatBox number={counts.gas} label="Gas Stove Services" />
        </div>

        <a
          href="tel:+917417210241"
          className="inline-block mt-12 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full text-lg font-semibold"
        >
          📞 Call Now for Service
        </a>
      </div>
    </section>
  );
}

const StatBox = ({ number, label }) => (
  <div>
    <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
      {number}+
    </h3>
    <p className="mt-2 text-gray-200">{label}</p>
  </div>
);

export default CTAStats;