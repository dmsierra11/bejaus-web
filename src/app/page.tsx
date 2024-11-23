import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background text-primary min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Bejaus</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-accent">
                About
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-accent">
                Menu
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-primary text-background">
        <h2 className="text-4xl font-bold mb-4">Welcome to Bejaus</h2>
        <p className="text-lg mb-8">
          A space where coffee, creativity, and community meet.
        </p>
        <button className="bg-accent text-background hover:bg-primary hover:text-accent">
          Explore our menu
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="p-12">
        <h3 className="text-3xl font-semibold text-center mb-6">
          About Bejaus
        </h3>
        <p className="max-w-3xl mx-auto text-center">
          Inspired by the Bauhaus, Bejaus is a café in Les Corts where you can
          enjoy specialty coffee, homemade brunch, and a vibrant atmosphere.
        </p>
      </section>

      {/* Menu Section */}
      <section id="menu" className="p-12 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-6">Our Menu</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-background shadow rounded">
            <h4 className="text-xl font-bold">Brunch</h4>
            <p>
              A delightful mix of sandwiches, homemade bread, and healthy bowls.
            </p>
          </div>
          <div className="p-4 bg-background shadow rounded">
            <h4 className="text-xl font-bold">Specialty Coffee</h4>
            <p>Carefully brewed with love, featuring local roasts.</p>
          </div>
          <div className="p-4 bg-background shadow rounded">
            <h4 className="text-xl font-bold">Craft Beer</h4>
            <p>Experience local craft beer and vermouth with appetizers.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12">
        <h3 className="text-3xl font-semibold text-center mb-6">Contact Us</h3>
        <p className="text-center">
          Visit us at Les Corts, Barcelona, or follow us on Instagram
          @bejauscafe.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-background py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Bejaus. All rights reserved.</p>
      </footer>
    </main>
  );
}
