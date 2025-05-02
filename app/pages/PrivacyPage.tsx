import Footer from "~/components/Footer";
import Header from "~/components/Header";

export function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
            <Header />

            <main className="flex-1 px-6 md:px-16 py-12 max-w-4xl mx-auto space-y-12">
                <section>
                    <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-400">Last updated: April 18, 2025</p>
                </section>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
                        <p className="text-gray-300">
                            Your privacy is important to us. This Privacy Policy explains how Athenai collects, uses, and protects your information when you use our services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
                        <p className="text-gray-300">
                            We may collect personal information you provide to us directly (such as name and email), as well as usage data including your IP address, browser type, and interaction with our platform.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
                        <p className="text-gray-300">
                            We use your information to provide and improve our services, communicate with you, analyze usage patterns, and ensure security. We do not sell your personal information to third parties.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">4. Data Sharing</h2>
                        <p className="text-gray-300">
                            We may share your data with trusted third-party service providers to help operate our services. All partners are contractually obligated to keep your data secure and confidential.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">5. Cookies</h2>
                        <p className="text-gray-300">
                            We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences in your browser settings.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">6. Data Security</h2>
                        <p className="text-gray-300">
                            We implement industry-standard measures to protect your information. However, no method of transmission over the Internet is 100% secure.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">7. Your Rights</h2>
                        <p className="text-gray-300">
                            You may have rights under applicable laws to access, correct, or delete your personal data. Contact us if you’d like to exercise these rights.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">8. Changes to This Policy</h2>
                        <p className="text-gray-300">
                            We may update this Privacy Policy from time to time. We’ll notify users of significant changes and always post the latest version here.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
                        <p className="text-gray-300">
                            For any privacy-related questions, reach out to us at <a href="mailto:privacy@athenai.dev" className="text-blue-400 hover:underline">privacy@athenai.dev</a>.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
