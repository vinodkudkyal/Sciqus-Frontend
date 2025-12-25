import { useState } from "react";
import { User, Lock, Bell, CreditCard, Shield } from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", icon: User, label: "My Profile" },
    { id: "security", icon: Shield, label: "Security" },
    { id: "notifications", icon: Bell, label: "Notifications" },
    { id: "billing", icon: CreditCard, label: "Billing" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden min-h-[600px] flex flex-col md:flex-row">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 p-4">
        <h2 className="text-lg font-bold text-slate-800 mb-6 px-4">Settings</h2>
        <nav className="space-y-1">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                activeTab === t.id ? "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200" : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
              }`}
            >
              <t.icon size={18} /> {t.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 md:p-10">
        {activeTab === "profile" && (
          <div className="max-w-xl animate-fade-in-up">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Profile Information</h3>
            <div className="flex items-center gap-6 mb-8">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-20 h-20 rounded-full bg-slate-100 border-4 border-white shadow-sm" />
              <div>
                <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">Change Avatar</button>
                <p className="text-xs text-slate-400 mt-2">JPG, GIF or PNG. Max size 800K</p>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">First Name</label>
                  <input type="text" defaultValue="Vinod" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Last Name</label>
                  <input type="text" defaultValue="Kudkyal" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
              </div>
              <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
                  <input type="email" defaultValue="vinod@sciqus.com" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div className="pt-4">
                <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-indigo-700 transition">Save Changes</button>
              </div>
            </form>
          </div>
        )}

        {activeTab === "security" && (
          <div className="max-w-xl animate-fade-in-up">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Security Settings</h3>
            <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl mb-6 flex gap-3">
              <Lock className="text-amber-600 shrink-0" />
              <div>
                <p className="text-sm font-bold text-amber-800">Two-factor authentication is not enabled.</p>
                <p className="text-xs text-amber-700 mt-1">Two-factor authentication adds an additional layer of security to your account.</p>
                <button className="text-xs font-bold text-amber-800 underline mt-2">Enable 2FA</button>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Current Password</label>
                  <input type="password" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
              </div>
              <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">New Password</label>
                  <input type="password" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
              </div>
              <div className="pt-4">
                <button className="bg-slate-800 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-slate-900 transition">Update Password</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}