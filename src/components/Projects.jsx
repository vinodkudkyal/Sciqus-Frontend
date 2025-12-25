import { MoreHorizontal, Calendar, ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    { name: "Website Redesign", status: "In Progress", priority: "High", progress: 60, due: "Dec 30", team: ["Felix", "Sarah", "Emily"], color: "bg-indigo-600", badge: "bg-indigo-50 text-indigo-700" },
    { name: "Mobile App API", status: "Completed", priority: "Medium", progress: 100, due: "Dec 15", team: ["Mike", "Jack"], color: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-700" },
    { name: "Dashboard Migration", status: "Review", priority: "Critical", progress: 85, due: "Jan 05", team: ["Vinod", "Zoe", "Tom"], color: "bg-amber-500", badge: "bg-amber-50 text-amber-700" },
    { name: "Marketing Campaign", status: "Planning", priority: "Low", progress: 15, due: "Feb 10", team: ["Jessica"], color: "bg-slate-500", badge: "bg-slate-50 text-slate-700" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Active Projects</h2>
          <p className="text-sm text-slate-500">Tracking 4 active initiatives</p>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
          + New Project
        </button>
      </div>

      <div className="divide-y divide-slate-100">
        {projects.map((p, i) => (
          <div key={i} className="p-6 hover:bg-slate-50 transition-colors group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div className="flex gap-4 items-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-lg ${p.color.replace('bg-', 'bg-opacity-90 bg-')}`}>
                  {p.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    {p.name}
                    {p.priority === "Critical" && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                    <span className="flex items-center gap-1"><Calendar size={12} /> Due {p.due}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className={`${p.priority === 'High' || p.priority === 'Critical' ? 'text-red-500 font-semibold' : 'text-slate-500'}`}>{p.priority} Priority</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${p.badge}`}>{p.status}</span>
                <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>

            {/* Progress Bar & Team */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
                  <span>Progress</span>
                  <span>{p.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className={`h-2 rounded-full transition-all duration-1000 ${p.color}`} style={{ width: `${p.progress}%` }}></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                   {p.team.map((seed, idx) => (
                     <img key={idx} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" title={seed} />
                   ))}
                   <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 hover:bg-slate-200 cursor-pointer">+</div>
                </div>
                <a href="#" className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}