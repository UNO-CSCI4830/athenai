import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase"; 
import Header from '../components/Header';
import Footer from "../components/Footer"; 

import { Link } from "react-router-dom";
export function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user info (excluding the password) in Firestore
      await addDoc(collection(firestore, "users"), {
        uid: user.uid,
        email: user.email,
      });

      setError(""); // Clear any previous error messages
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Registration Form */}
        <section className="w-full bg-blue-600 text-white flex items-center justify-center p-8">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-md border border-white/10 w-full max-w-md space-y-6">
            <h1 className="text-3xl font-bold text-center">Create Account</h1>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            <form onSubmit={handleRegister}>
              <div>
                <label className="block mb-1 text-sm">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded"
              >
                Sign Up
              </button>

              <p className="text-sm text-center text-gray-300">
                Already have an account?{" "}
                <a href="/login" className="text-blue-400 hover:underline">
                  Login here
                </a>
              </p>


            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
