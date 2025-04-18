import Footer from "~/components/Footer";
import Header from "~/components/Header";

export function BlogPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
            <Header />

            <main className="flex-1 px-6 md:px-16 py-12 max-w-6xl mx-auto space-y-12">
                <section className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Athenai Blog</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Dive into thoughts, tutorials, and updates from the Athenai team. We write about design, development, data, and everything in between.
                    </p>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-2">Blog Post Title {i}</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                A short and sweet summary of what this blog post is about. It's just enough to make you want to click.
                            </p>
                            <button className="text-blue-400 hover:underline font-medium">
                                Read More →
                            </button>
                        </div>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
}
