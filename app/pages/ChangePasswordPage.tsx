import { useState } from "react";
import { auth } from "../firebase";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const user = auth.currentUser;

    if (!user || !user.email) {
      setError("User not logged in.");
      return;
    }

    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    try {
      // Reauthenticate the user
      await reauthenticateWithCredential(user, credential);
      
      // Update password
      await updatePassword(user, newPassword);

      // Inform the user
      setMessage("Password updated successfully.");
      
      // Clear the password fields
      setCurrentPassword("");
      setNewPassword("");

      // Optionally, you can trigger the session update here as well
      // Firebase will automatically use the updated password in the current session

    } catch (err: any) {
      if (err.code === "auth/wrong-password") {
        setError("Current password is incorrect.");
      } else {
        setError("Password change failed. " + err.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
      <Header />

      <main className="flex-1 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Tabs */}
        <div className="flex gap-6 text-sm mb-10">
          <a
            href="/editProfile"
            className="px-4 py-1 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20"
          >
            Edit Profile
          </a>
          <a
            href="/changePassword"
            className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full"
          >
            Change Password
          </a>
          <a
            href="/notifications"
            className="px-4 py-1 hover:bg-white/10 rounded-full cursor-pointer"
          >
            Notifications
          </a>
        </div>

        {/* Change Password Card */}
        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-center">Change Password</h2>

          {message && (
            <p className="text-green-400 text-center text-sm">{message}</p>
          )}
          {error && (
            <p className="text-red-400 text-center text-sm">{error}</p>
          )}

          <form onSubmit={handleChangePassword} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                Current Password
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition"
            >
              Update Password
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
