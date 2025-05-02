import Footer from "~/components/Footer";
import Header from "~/components/Header";

export function HelpPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
            <Header />

            <main className="flex-1 px-6 md:px-16 py-12 max-w-5xl mx-auto space-y-16">
                <section className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Need Help?</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Whether you're stuck, curious, or just exploring, we've got answers. Browse our FAQs or reach out directly.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">How do I get started with Athenai?</h3>
                            <p className="text-gray-400 text-sm">You can start by exploring our documentation or checking out our quickstart guides on the blog. Everything you need to begin is right at your fingertips.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">Where can I report bugs or issues?</h3>
                            <p className="text-gray-400 text-sm">We track bugs through our GitHub issues page. If you find something broken, head there or send us a message via the contact page.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">Is Athenai open-source?</h3>
                            <p className="text-gray-400 text-sm">Some parts of our project are open-source, while others are in progress. Keep an eye on our announcements for more info.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Helpful Links</h2>
                    <ul className="text-blue-400 space-y-2 list-disc list-inside">
                        <li><a href="/docs" className="hover:underline">Documentation</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Support</a></li>
                        <li><a href="/blog" className="hover:underline">Tutorials & Blog</a></li>
                        <li><a href="/community" className="hover:underline">Join the Community</a></li>
                    </ul>
                </section>

                <section className="text-center text-gray-400 text-sm">
                    <p>Still stuck? We’re happy to help. Shoot us a message anytime at <a href="mailto:support@athenai.dev" className="text-blue-400 hover:underline">support@athenai.dev</a>.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
