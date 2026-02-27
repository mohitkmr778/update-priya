import { Helmet } from "react-helmet-async";

export default function ChimneyDelhi() {
  return (
    <>
      <Helmet>
        <title>Chimney Repair Service in Delhi | Kitchen Chimney Service Near Me – Priya Chimney</title>
        <meta
          name="description"
          content="Best kitchen chimney repair service in Delhi. We provide chimney cleaning, motor repair, installation, filter replacement & maintenance for all brands at doorstep."
        />
        <meta
    name="keywords"
    content="
    chimney repair service in Delhi,
    kitchen chimney repair near me,
    chimney cleaning service Delhi,
    chimney motor repair Delhi,
    chimney installation service,
    chimney maintenance service,
    wall mounted chimney repair,
    island chimney repair,
    built in chimney service,
    kitchen chimney service near me,
    best chimney service in Delhi,
    chimney service center Delhi,
    chimney repair technician near me,
    chimney repair cost in Delhi
    "
  />
      </Helmet>

      {/* HERO */}
      <section className="h-[280px] relative">
        <img src="/images/slide2.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Chimney Repair Service in Delhi
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-gray-700">
        <h2 className="text-2xl font-bold text-cyan-600 mb-4">
          Professional Kitchen Chimney Repair Service in Delhi
        </h2>

        <p className="leading-7 mb-6">
          Priya Chimney is a trusted name for kitchen chimney repair service in Delhi.
  If you are searching for a reliable chimney repair near me, our expert technicians
  provide fast and affordable doorstep service for all chimney brands and models.
        </p>
        <p className="leading-7 mb-4">
  Our chimney service includes complete chimney cleaning, motor repair, suction
  problem fixing, oil blockage removal, noise issue repair, filter replacement,
  and electrical fault correction. Whether it is a wall-mounted chimney, island
  chimney, or built-in chimney, we handle every type professionally.
</p>

<p className="leading-7 mb-6">
  We are known as one of the best chimney service centers in Delhi because
  we use genuine spare parts, modern tools, and experienced technicians to ensure
  long-lasting performance and customer satisfaction.
</p>
<p className="leading-7 mb-8">
  We provide chimney repair services across all areas of Delhi including
  Indirapuram, Vasundhara, Raj Nagar Extension, Vaishali, Kaushambi and nearby
  locations. Our same-day chimney service ensures quick support at affordable prices.
</p>
<h3 className="text-xl font-semibold mb-3 text-gray-800">
  Our Kitchen Chimney Repair Services Include
</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Kitchen Chimney Cleaning Service</li>
  <li>Chimney Motor Repair & Replacement</li>
  <li>Low Suction & Smoke Issue Fix</li>
  <li>Oil Blockage Removal</li>
  <li>Chimney Filter Cleaning & Replacement</li>
  <li>Chimney Installation & Uninstallation</li>
  <li>Annual Chimney Maintenance Service</li>
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