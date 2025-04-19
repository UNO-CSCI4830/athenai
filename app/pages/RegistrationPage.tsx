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
      // 1. Register user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Store user info in Firestore
      await addDoc(collection(firestore, "users"), {
        uid: user.uid,
        email: user.email,
        createdAt: new Date(),
      });

      // 3. Redirect to profile
      window.location.href = "/profile";
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already in use.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <form
          onSubmit={handleRegister}
          className="bg-white/10 p-8 rounded-lg backdrop-blur-md border border-white/10 w-full max-w-md space-y-6"
        >
          <h1 className="text-3xl font-bold text-center">Create Account</h1>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

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
            <a href="/" className="text-blue-400 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
