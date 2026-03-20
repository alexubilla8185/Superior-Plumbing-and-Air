import { Droplets, Wind, Star, MapPin, Shield } from 'lucide-react';

export default function ServiceGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Split Panels */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="group bg-blue-700 text-white p-8 rounded-2xl transition-transform hover:scale-[1.02]">
          <Droplets className="mb-4" size={48} />
          <h2 className="text-3xl font-bold mb-4">Plumbing Services</h2>
          <ul className="space-y-2 text-blue-100">
            <li>• Leak Detection</li>
            <li>• Water Heaters</li>
            <li>• Drain Cleaning</li>
          </ul>
        </div>
        <div className="group bg-slate-800 text-white p-8 rounded-2xl transition-transform hover:scale-[1.02]">
          <Wind className="mb-4" size={48} />
          <h2 className="text-3xl font-bold mb-4">Air Conditioning</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• AC Repair</li>
            <li>• Installation</li>
            <li>• Maintenance</li>
          </ul>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="bg-amber-100 p-3 rounded-full text-amber-600"><Star /></div>
          <div>
            <div className="font-bold text-lg">4.6 Stars</div>
            <div className="text-slate-600">On Google</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600"><MapPin /></div>
          <div>
            <div className="font-bold text-lg">Serving 3 Counties</div>
            <div className="text-slate-600">Broward, Palm Beach, Miami-Dade</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="bg-emerald-100 p-3 rounded-full text-emerald-600"><Shield /></div>
          <div>
            <div className="font-bold text-lg">Licensed & Insured</div>
            <div className="text-slate-600">Professional Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
