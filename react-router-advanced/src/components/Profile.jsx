import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Profile Page</h2>

      {/* Nested navigation */}
      <div className="flex gap-4 mb-6">
        <Link to="details" className="text-blue-600 hover:underline">Details</Link>
        <Link to="settings" className="text-blue-600 hover:underline">Settings</Link>
      </div>

      {/* Nested routes inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
