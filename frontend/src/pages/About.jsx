import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const teamMembers = [
    {
      name: "Sara Johnson",
      role: "Head Chef",
      description: "With 15 years of culinary experience, Sara brings creativity and passion to every recipe.",
      image: "https://via.placeholder.com/80", // Replace with a valid image URL
    },
    {
      name: "Michael Chen",
      role: "Nutritionist",
      description: "Michael ensures all our recipes maintain the perfect balance of flavor and nutrition.",
      image: "https://via.placeholder.com/80", // Replace with a valid image URL
    },
    {
      name: "Priya Patel",
      role: "Food Photographer",
      description: "Priya captures the beauty of food through her artistic lens.",
      image: "https://via.placeholder.com/80", // Replace with a valid image URL
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      <Nav />

      {/* Header */}
      <header className="p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold">
            About <span className="text-red-400">Your Daily Dish</span>
          </h1>
          <h2 className="text-3xl mt-2">Our Story & Mission</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Our Journey</h3>
          <p className="mb-4 text-gray-700">
            Founded in 2020, Your Daily Dish began as a simple blog sharing family recipes. Today, we've grown into a community of food enthusiasts dedicated to making healthy eating accessible, enjoyable, and delicious for everyone.
          </p>
          <p className="mb-4 text-gray-700">
            We believe that good food brings people together and nourishes both body and soul. Every recipe we share is carefully crafted, tested, and photographed in our own kitchens.
          </p>

          {showMore && (
            <div>
              <p className="mb-4 text-gray-700">
                Our team of chefs, nutritionists, and food enthusiasts work tirelessly to bring you recipes that balance flavor, nutrition, and ease of preparation. We source ingredients responsibly and prioritize seasonal produce whenever possible.
              </p>
              <p className="mb-4 text-gray-700">
                Beyond recipes, we aim to educate our community about sustainable food practices, nutrition basics, and the joy of cooking from scratch.
              </p>
            </div>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-red-400 hover:bg-red-500 text-white py-2 px-6 rounded transition-colors"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>

        <div className="lg:w-1/2">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/600x400" // Replace with a valid image URL
              alt="Our kitchen team at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-lg">Our team preparing fresh seasonal dishes</p>
            </div>
          </div>
        </div>
      </main>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-3xl font-semibold mb-12 text-center">Meet Our Team</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-pink-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-red-400">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-pink-100">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-3xl font-semibold mb-12 text-center">Our Values</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-red-400 text-4xl mb-4">🥗</div>
              <h4 className="text-xl font-bold mb-2">Health First</h4>
              <p className="text-gray-700">We prioritize nutritionally balanced recipes without sacrificing flavor.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-red-400 text-4xl mb-4">♻️</div>
              <h4 className="text-xl font-bold mb-2">Sustainability</h4>
              <p className="text-gray-700">We advocate for sustainable food practices and seasonal ingredients.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-red-400 text-4xl mb-4">🤗</div>
              <h4 className="text-xl font-bold mb-2">Inclusivity</h4>
              <p className="text-gray-700">Our recipes accommodate various dietary needs and cultural preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h3 className="text-3xl font-bold mb-4">Join Our Food Journey</h3>
          <p className="text-lg mb-8 text-gray-700">
            Sign up for our newsletter to receive weekly recipes, cooking tips, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="bg-red-400 hover:bg-red-500 text-white py-3 px-8 rounded transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}