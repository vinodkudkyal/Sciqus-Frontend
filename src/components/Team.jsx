import { useState } from "react";
import { Mail, Phone, MapPin, Award } from "lucide-react";

export default function Team() {
  const [dept, setDept] = useState("All");

  const members = [
    { name: "Vinod Kudkyal", role: "Frontend Lead", dept: "Engineering", status: "online", location: "Solapur, IN", seed: "Felix" },
    { name: "Sarah Miller", role: "Product Manager", dept: "Product", status: "busy", location: "London, UK", seed: "Sarah" },
    { name: "James Bond", role: "Security Engineer", dept: "Engineering", status: "offline", location: "New York, USA", seed: "Jack" },
    { name: "Emily Rose", role: "UX Designer", dept: "Design", status: "online", location: "Paris, FR", seed: "Emily" },
    { name: "Mike Ross", role: "Legal Consultant", dept: "Legal", status: "online", location: "Toronto, CA", seed: "Mike" },
    { name: "Jessica P.", role: "Director", dept: "Management", status: "away", location: "Dubai, UAE", seed: "Jessica" },
    { name: "Tom Holland", role: "Jr. Developer", dept: "Engineering", status: "online", location: "Solapur, IN", seed: "Tom" },
    { name: "Zoe Kravitz", role: "QA Engineer", dept: "Engineering", status: "busy", location: "Berlin, DE", seed: "Zoe" },
  ];

  const filtered = dept === "All" ? members : members.filter(m => m.dept === dept);

  return (
    <div>
      {/* Header with Stats */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Team Directory</h2>
          <p className="text-slate-500 text-sm">Manage your team members and their account permissions.</p>
        </div>
        <div className="flex bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
          {["All", "Engineering", "Design", "Product"].map(d => (
            <button
              key={d}
              onClick={() => setDept(d)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                dept === d ? "bg-indigo-100 text-indigo-700" : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((m, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
            {/* Cover Banner */}
            <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            
            <div className="px-6 pb-6 relative">
              {/* Avatar with Status */}
              <div className="relative -mt-12 mb-4 inline-block">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${m.seed}`} alt={m.name} className="w-24 h-24 rounded-full bg-white p-1 ring-4 ring-white" />
                <span className={`absolute bottom-1 right-1 w-5 h-5 border-2 border-white rounded-full ${
                  m.status === 'online' ? 'bg-green-500' : m.status === 'busy' ? 'bg-red-500' : 'bg-slate-400'
                }`}></span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{m.name}</h3>
                  <p className="text-sm text-indigo-600 font-medium">{m.role}</p>
                </div>
                <Award className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 mb-4">
                <MapPin size={12} /> {m.location}
              </div>

              <div className="flex gap-2 border-t border-slate-100 pt-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 text-slate-700 hover:bg-slate-800 hover:text-white text-sm font-medium transition-colors">
                  <Mail size={16} /> Email
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 text-slate-700 hover:bg-slate-800 hover:text-white text-sm font-medium transition-colors">
                  <Phone size={16} /> Call
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}