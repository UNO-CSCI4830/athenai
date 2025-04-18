import Header from '../components/Header';
import Footer from '../components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Split Layout */}
      <main className="flex flex-1">
        {/* Left Side - White */}
        <section className="w-[45%] bg-white flex items-center justify-center p-8 h-[48rem]">
          <div className="text-center">
            <h1 className="text-8xl font-bold text-blue-600 mb-4">AthenA.I.</h1>
            <p className="text-lg text-gray-700">Empowering your future.</p>
          </div>
        </section>

        {/* Right Side - Blue */}
        <section className="w-[55%] bg-blue-600 text-white flex flex-col items-center justify-center p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Discover More</h2>
            <p className="text-lg mb-6">
              AthenA.I. has a wide range of features to help you achieve your goals.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/registrations"
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Sign up
              </a>
              <a
                href="/login"
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Login
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
