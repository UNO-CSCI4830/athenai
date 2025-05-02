import Footer from "~/components/Footer";
import Header from "~/components/Header";

export function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
            <Header />

            <main className="flex-1 px-6 md:px-16 py-12 max-w-5xl mx-auto space-y-16">
                <section className="text-center">
                    <h1 className="text-4xl font-bold mb-4">About Athenai</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Athenai is built on the belief that intelligence should be accessible, collaborative, and empowering. We're creating tools that bring clarity to complexity, helping users unlock their full potential through thoughtful design and cutting-edge technology.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We strive to bridge the gap between people and powerful technology. Whether it’s through AI-assisted tools, intuitive design systems, or seamless integrations, our mission is to amplify human capability—not replace it.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">How We Work</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>We prioritize user experience above all.</li>
                        <li>We build with transparency and iterate quickly.</li>
                        <li>We embrace diverse ideas and challenge assumptions.</li>
                        <li>We’re remote-first, globally-minded, and deeply curious.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">Meet the Team</h2>
                    <p className="text-gray-300 mb-6">We’re a small but mighty crew of engineers, designers, and dreamers. Here's a quick look:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
                            <h3 className="font-bold text-lg mb-1">Justin Q. Bartels</h3>
                            <p className="text-sm text-gray-400">Lead Engineer & Systems Architect</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
                            <h3 className="font-bold text-lg mb-1">Blake Britton</h3>
                            <p className="text-sm text-gray-400">Team Lead & Project Manager</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
                            <h3 className="font-bold text-lg mb-1">Fredy Kadjo Gnambi</h3>
                            <p className="text-sm text-gray-400">Operations & Community Lead</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
                            <h3 className="font-bold text-lg mb-1">Mitch Krupa</h3>
                            <p className="text-sm text-gray-400">Frontend Developer & UI Engineer</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
                            <h3 className="font-bold text-lg mb-1">Moe Oo</h3>
                            <p className="text-sm text-gray-400">Backend Developer & API Specialist</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
                            <h3 className="font-bold text-lg mb-1">Gregory Treinen</h3>
                            <p className="text-sm text-gray-400">DevOps Engineer & Infrastructure Lead</p>
                        </div>
                    </div>
                    <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 flex flex-wrap justify-center">
                        <div className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
                            <h3 className="font-bold text-lg mb-1">Bennett Schliesser</h3>
                            <p className="text-sm text-gray-400">Machine Learning Engineer & Data Strategist</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
                            <h3 className="font-bold text-lg mb-1">Jaydeb Sarker</h3>
                            <p className="text-sm text-gray-400">Course Professor & Project Inspiration</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
