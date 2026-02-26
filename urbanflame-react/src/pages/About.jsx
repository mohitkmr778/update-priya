import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          About Priya Chimney | Chimney & RO Repair Service in Ghaziabad, Delhi, Noida
        </title>
        <meta
          name="description"
          content="Priya Chimney offers professional kitchen chimney repair, RO water purifier service and gas stove repair in Ghaziabad, Delhi, Noida & Greater Noida with fast doorstep support."
        />
        <meta
          name="keywords"
          content="chimney repair Ghaziabad, RO repair Ghaziabad, chimney service Delhi, RO service Noida, chimney repair Greater Noida"
        />
      </Helmet>

      {/* HERO */}
      <section className="h-[300px] relative">
        <img src="/images/g2.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            About Priya Chimney
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-gray-700">
        <h2 className="text-3xl font-bold text-cyan-600 mb-6">
          Trusted Chimney & RO Repair Experts Near You
        </h2>

        <p className="leading-7 mb-6">
          <strong>Priya Chimney</strong> is a leading home appliance service
          provider specializing in <strong>kitchen chimney repair</strong>,
          <strong> RO water purifier service</strong>, and
          <strong> gas stove / hob repair</strong>. We proudly serve customers
          across <strong>Ghaziabad, Delhi, Noida, and Greater Noida</strong> with
          fast and reliable doorstep support.
        </p>

        <p className="leading-7 mb-6">
          A faulty chimney or RO system can affect your kitchen hygiene and
          family health. Our experienced technicians quickly diagnose issues
          such as low suction, motor failure, water leakage, bad taste,
          filter blockage, and electrical faults — and provide long-lasting,
          affordable solutions using genuine spare parts.
        </p>

        <p className="leading-7 mb-10">
          Whether you need chimney cleaning, RO installation, annual
          maintenance, or emergency repair, Priya Chimney is your trusted local
          partner for professional service with transparent pricing.
        </p>

        {/* SERVICE AREAS */}
        <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 mb-12">
          <h3 className="text-2xl font-semibold mb-3 text-cyan-700">
            Service Areas We Cover
          </h3>
          <p className="leading-7">
            We provide doorstep chimney and RO repair services in:
            <strong>
              {" "}
              Ghaziabad, Delhi NCR, Noida, Greater Noida and nearby locations
            </strong>.
            Our local technicians ensure quick response and same-day service
            availability.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600">
              Our Mission
            </h3>
            <p>
              To deliver reliable, honest, and professional chimney and RO
              repair services with complete customer satisfaction and long-term
              trust.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600">
              Our Vision
            </h3>
            <p>
              To become the most trusted local chimney and RO service brand in
              Ghaziabad, Delhi NCR, Noida, and Greater Noida through quality-driven
              service excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}