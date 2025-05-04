import Head from "next/head";

const services = [
  "Construction & Development",
  "Renovation Services",
  "Sanitary & Plumbing Materials",
  "Heating & Cooling Supplies",
  "Real Estate",
  "Interior Design & Decoration",
  "Furniture & Woodwork (Zwood)",
  "CNC & Edge Banding",
  "Electric Vehicles & Bikes",
  "Solar Systems",
  "Other / Custom Projects",
  "Family Tree"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>Abdayem Group</title>
        <meta name="description" content="Abdayem Group - Innovation, Construction, and Smart Living" />
      </Head>

      <header className="bg-white shadow p-6 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold">Abdayem Group</h1>
        <p className="text-sm text-gray-600">Innovation, Construction, and Smart Living Under One Roof</p>
      </header>

      <main className="p-6">
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition text-center">
              <div className="text-4xl mb-2">🏗️</div>
              <h3 className="font-semibold text-lg">{service}</h3>
            </div>
          ))}
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 p-4 mt-8">
        &copy; {new Date().getFullYear()} Abdayem Group. All rights reserved.
      </footer>
    </div>
  );
}
