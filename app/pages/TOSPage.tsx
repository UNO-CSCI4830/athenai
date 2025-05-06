import Footer from "~/components/Footer";
import Header from "~/components/Header";

export function TOSPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
            <Header />

            <main className="flex-1 px-6 md:px-16 py-12 max-w-4xl mx-auto space-y-12">
                <section>
                    <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-gray-400">
                        Last updated: April 18, 2025
                    </p>
                </section>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
                        <p className="text-gray-300">
                            By accessing or using Athenai, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use the platform.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">2. Use of the Service</h2>
                        <p className="text-gray-300">
                            You agree to use the platform only for lawful purposes and in accordance with these terms. You may not use our services to distribute harmful, illegal, or abusive content.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property</h2>
                        <p className="text-gray-300">
                            All content, trademarks, and intellectual property associated with Athenai are the property of Athenai or its licensors. You may not copy, modify, or distribute any part of the service without written consent.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">4. Termination</h2>
                        <p className="text-gray-300">
                            We reserve the right to suspend or terminate your access to the service at any time, with or without cause or notice, including if you violate these Terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
                        <p className="text-gray-300">
                            Athenai is provided "as is" and without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising out of your use of the service.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">6. Changes to Terms</h2>
                        <p className="text-gray-300">
                            We may update these Terms of Service at any time. Continued use of the platform after changes have been posted constitutes your acceptance of the new terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">7. Contact</h2>
                        <p className="text-gray-300">
                            For questions about these Terms, please contact us at <a href="mailto:legal@athenai.dev" className="text-blue-400 hover:underline">legal@athenai.dev</a>.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
