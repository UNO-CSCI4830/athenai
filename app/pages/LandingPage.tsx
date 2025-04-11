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
          <section className="w-[55%] bg-blue-600 text-white flex items-center justify-center p-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-4">Discover More</h2>
              <p className="text-lg">AthenA.I. has a wide range of features to help you achieve your goals.</p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    )
  }