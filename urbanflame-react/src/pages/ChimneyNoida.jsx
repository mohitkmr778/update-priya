import { Helmet } from "react-helmet-async";

export default function ChimneyNoida() {
  return (
    <>
      <Helmet>
        <title>Chimney Repair Service in Noida | Priya Chimney</title>
        <meta
          name="description"
          content="Best kitchen chimney repair service in Noida. Motor repair, cleaning, installation & maintenance with doorstep support."
        />
      </Helmet>

      {/* HERO */}
      <section className="h-[280px] relative">
        <img src="/images/slide2.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Chimney Repair Service in Noida
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-gray-700">
        <h2 className="text-2xl font-bold text-cyan-600 mb-4">
          Expert Kitchen Chimney Repair in Noida
        </h2>

        <p className="leading-7 mb-6">
          Priya Chimney provides professional kitchen chimney repair services
          in Noida. We fix low suction, motor issues, oil blockage, noise
          problems, and electrical faults for all brands and models.
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Chimney Cleaning & Servicing</li>
          <li>Motor Repair & Replacement</li>
          <li>Filter Cleaning & Replacement</li>
          <li>Installation & Uninstallation</li>
        </ul>

        <p className="leading-7 mb-8">
          Our trained technicians ensure same-day doorstep service with
          genuine spare parts and affordable pricing.
        </p>

        <a
          href="tel:+917417210241"
          className="inline-block bg-cyan-600 text-white px-6 py-3 rounded"
        >
          📞 Call Now for Chimney Repair
        </a>
      </section>
    </>
  );
}