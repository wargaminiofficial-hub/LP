```react
import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Sparkles, 
  Heart, 
  Activity, 
  Settings, 
  Search, 
  Bell, 
  User, 
  Play, 
  Crown, 
  Menu, 
  X,
  Image as ImageIcon,
  DollarSign,
  Clock
} from 'lucide-react';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const profileImageUrl = "https://i.imgur.com/EY2TXVb.jpeg"; 
  const bannerImageUrl = "https://i.imgur.com/eKwLIJt.jpeg"; 

  const clayShadow = "shadow-[10px_10px_20px_#d9e2ec,-10px_-10px_20px_#ffffff]";
  const clayShadowSm = "shadow-[6px_6px_12px_#d9e2ec,-6px_-6px_12px_#ffffff]";
  const clayShadowInset = "shadow-[inset_6px_6px_12px_#d9e2ec,inset_-6px_-6px_12px_#ffffff]";

  return (
    <div className="flex h-screen bg-[#eef2f9] p-2 md:p-4 font-sans text-gray-700 overflow-hidden relative">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm transition-opacity" onClick={() => setIsSidebarOpen(false)} />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#ffb8d1] md:rounded-[2.5rem] rounded-r-[2rem] flex flex-col justify-between p-6 shadow-[10px_10px_20px_#d9e2ec] transform transition-transform duration-300 lg:relative lg:translate-x-0 lg:mr-6 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="lg:hidden absolute top-6 right-6 text-white/80" onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
        <div className="overflow-y-auto scrollbar-hide pb-4">
          <div className="flex flex-col items-center mb-8 mt-2">
            <div className="w-20 h-20 rounded-full bg-white p-1 mb-4 overflow-hidden"><img src={profileImageUrl} alt="Profile" className="w-full h-full rounded-full object-cover" /></div>
            <h2 className="text-white font-bold text-lg">wargamini 👑</h2>
          </div>
          <nav className="flex flex-col gap-2">
            <NavItem icon={<Home size={20} />} text="Beranda Kelas" active />
            <NavItem icon={<BookOpen size={20} />} text="Materi Belajar" />
            <NavItem icon={<Sparkles size={20} />} text="AI Tools" />
            <NavItem icon={<Settings size={20} />} text="Pengaturan" />
          </nav>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto px-2 lg:px-0">
        <header className="flex justify-between items-center mb-6 pt-2">
          <button className={`lg:hidden w-10 h-10 bg-white rounded-xl flex justify-center items-center ${clayShadowSm}`} onClick={() => setIsSidebarOpen(true)}><Menu className="text-[#ffb8d1]" size={20} /></button>
          <h1 className="text-2xl font-extrabold text-gray-800">Dashboard Belajar</h1>
          <div className={`w-10 h-10 bg-white rounded-full flex justify-center items-center ${clayShadowSm}`}><Bell className="text-[#ffb8d1]" size={20} /></div>
        </header>

        <div className={`bg-[#eaf4fc] rounded-[2rem] mb-8 ${clayShadow} relative overflow-hidden h-48 w-full`}>
          <img src={bannerImageUrl} alt="Banner" className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <ImageCard src="https://i.imgur.com/tPtstuR.jpeg" />
          <ImageCard src="https://i.imgur.com/1VhObZ7.jpeg" />
          <ImageCard src="https://i.imgur.com/JqtFIih.jpeg" />
          <ImageCard src="https://i.imgur.com/oqW6zjt.jpeg" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className={`bg-white rounded-[2rem] p-6 ${clayShadow}`}>
            <h3 className="font-bold mb-4">Materi Kelas AI</h3>
            <div className="flex flex-col gap-3">
              <CourseItem no="1" title="Dasar AI" desc="Konsep dasar untuk pemula." />
              <CourseItem no="2" title="Prompt Engineering" desc="Teknik perintah AI." />
            </div>
          </div>
          <div className={`bg-white rounded-[2rem] p-6 ${clayShadow}`}>
            <h3 className="font-bold mb-4">Tutorial Populer</h3>
            <ListItem icon={<ImageIcon />} title="Karakter 3D Hijab" subtitle="Bing Image Creator" />
          </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, text, active }) => (
  <div className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer ${active ? 'bg-white text-[#ff8ba8] font-bold' : 'text-white/90 hover:bg-[#ff9ebb]'}`}>
    {icon} <span>{text}</span>
  </div>
);

const ImageCard = ({ src }) => (
  <div className="bg-white/80 p-2 rounded-[1.5rem] shadow-[6px_6px_15px_#d9e2ec] transition-all hover:-translate-y-2 hover:scale-105 cursor-pointer">
    <img src={src} alt="Fitur" className="w-full h-auto rounded-[1rem]" />
  </div>
);

const CourseItem = ({ no, title, desc }) => (
  <div className="p-3 bg-[#f8fbff] rounded-xl border border-blue-50">
    <h4 className="font-bold text-sm">{no}. {title}</h4>
    <p className="text-xs text-gray-500">{desc}</p>
  </div>
);

const ListItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3 p-2">
    <div className="w-10 h-10 rounded-xl bg-[#fff0f4] flex items-center justify-center text-[#ffb8d1]">{icon}</div>
    <div>
      <h4 className="font-bold text-sm">{title}</h4>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  </div>
);

export default App;

```
