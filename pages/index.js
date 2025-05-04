import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Head>
        <title>Abdayem Group</title>
        <meta name="description" content="Abdayem Group - Zwood, Wood Service Center, and more." />
      </Head>

      <header className="bg-gray-900 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Abdayem Group</h1>
        <p className="text-sm">Innovation in Woodwork and Beyond</p>
      </header>

      <main className="space-y-24 p-6">
        <section id="zwood" className="space-y-4">
          <h2 className="text-2xl font-semibold">Zwood - Furniture Manufacturing</h2>
          <p>Zwood specializes in high-quality kitchen cabinets, closets, and TV units. We blend craftsmanship with modern technology to deliver elegant solutions.</p>
          <a href="#" className="text-blue-600 underline">Learn more</a>
        </section>

        <section id="wood-service" className="space-y-4">
          <h2 className="text-2xl font-semibold">Wood Service Center</h2>
          <p>Offering CNC cutting, edge banding, and custom woodworking services for carpenters and professionals.</p>
          <a href="#" className="text-blue-600 underline">Explore Services</a>
        </section>

        <section id="others" className="space-y-4">
          <h2 className="text-2xl font-semibold">Other Ventures</h2>
          <p>Stay tuned for more from Abdayem Group. We’re expanding into new sectors soon.</p>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>Email: info@abdayem.com</p>
          <p>Phone: +961 XXX XXX</p>
        </section>
      </main>

      <footer className="bg-gray-100 text-center p-4 text-sm">
        &copy; {new Date().getFullYear()} Abdayem Group. All rights reserved.
      </footer>
    </div>
  );
}
