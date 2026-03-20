/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import ServiceGrid from './components/ServiceGrid';
import ContactTerminal from './components/ContactTerminal';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1454988501794-2992f706932e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Plumbing and HVAC tools" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl bg-white/90 p-6 md:p-8 rounded-xl shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-4 tracking-tight">
              24/7 PLUMBING & AC: THE RECOVERY EXPERTS.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-6 font-medium">
              Serving Broward, Palm Beach, and Miami-Dade with upfront pricing and zero hidden fees.
            </p>
            <a href="tel:5612412822" className="bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition w-full md:w-auto text-center block">
              CALL FOR EMERGENCY SERVICE
            </a>
          </div>
        </div>
      </main>
      <ServiceGrid />
      <ContactTerminal />
    </div>
  );
}
