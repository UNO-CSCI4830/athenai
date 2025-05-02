import Footer from "~/components/Footer";
import Header from "~/components/Header";

export function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
            <Header />

            <main className="flex-1 px-6 md:px-16 py-12 max-w-4xl mx-auto space-y-16">
                <section className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Have a question, idea, or just want to say hi? We’d love to hear from you. Fill out the form below or reach out through one of our channels.
                    </p>
                </section>

                <section className="bg-gray-800 rounded-xl p-8 shadow-lg space-y-6">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="What's on your mind?"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-md font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </section>

                <section className="text-center text-gray-400 text-sm">
                    <p>Or email us directly at <a href="mailto:hello@athenai.dev" className="text-blue-400 hover:underline">hello@athenai.dev</a></p>
                    <p>© {new Date().getFullYear()} Athenai. All rights reserved.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
