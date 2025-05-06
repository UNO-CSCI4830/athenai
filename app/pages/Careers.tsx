import Footer from "~/components/Footer";
import Header from "~/components/Header";

export function CareersPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
            <Header />

            <main className="flex-1 px-6 md:px-16 py-12 max-w-5xl mx-auto space-y-16">
                <section className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Join the Team</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        At Athenai, we’re building tools to make knowledge more powerful, accessible, and actionable. If you're excited by tough problems, clean design, and collaborative culture—we want to hear from you.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-6">Open Roles</h2>
                    <div className="space-y-6">
                        {[
                            {
                                title: "Software Engineer – Full Stack",
                                location: "Remote, US-Based",
                                summary: "Build and maintain end-to-end features, from elegant UIs to robust backend services.",
                            },
                            {
                                title: "Product Designer",
                                location: "Remote or Omaha, NE",
                                summary: "Craft intuitive user experiences and interface designs that make data feel simple.",
                            },
                            {
                                title: "Data Scientist",
                                location: "Remote",
                                summary: "Work on ML-powered features, data pipelines, and analytics infrastructure.",
                            },
                        ].map((role, i) => (
                            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                                <p className="text-sm text-gray-400 mb-2">{role.location}</p>
                                <p className="text-sm text-gray-300">{role.summary}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="text-center mt-12">
                    <h2 className="text-2xl font-semibold mb-2">Don't see a perfect fit?</h2>
                    <p className="text-gray-400 mb-4">
                        We’re always looking for exceptional talent. Send us a note at <a href="mailto:careers@athenai.dev" className="text-blue-400 hover:underline">careers@athenai.dev</a> and tell us what you're passionate about.
                    </p>
                    <a
                        href="mailto:careers@athenai.dev"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-medium"
                    >
                        Reach Out
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
}
