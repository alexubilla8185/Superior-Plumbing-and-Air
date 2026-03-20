import { useState } from 'react';
import { Menu, X, Phone, Facebook } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-slate-900">Superior Plumbing & AC</div>
        
        <div className="hidden md:flex items-center gap-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm">24/7 EMERGENCY</span>
          <div className="flex flex-col text-sm">
            <a href="tel:5612412822" className="text-slate-900 font-semibold">(561) 241-2822</a>
            <a href="tel:9544209330" className="text-slate-900 font-semibold">(954) 420-9330</a>
          </div>
          <a href="https://www.facebook.com/superiorplumbingandair/" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600">
            <Facebook size={24} />
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-100 p-4 flex flex-col gap-2">
          <a href="tel:5612412822" className="bg-blue-600 text-white text-center py-2 rounded font-bold">Call (561) 241-2822</a>
          <a href="tel:9544209330" className="bg-blue-600 text-white text-center py-2 rounded font-bold">Call (954) 420-9330</a>
        </div>
      )}
    </header>
  );
}
