export default function ContactTerminal() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-blue-950 p-8 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-6">Service Command Center</h2>
          <form name="superior-emergency-form" data-netlify="true" method="POST" className="space-y-4">
            <input type="hidden" name="form-name" value="superior-emergency-form" />
            <input type="hidden" name="bot-field" />
            
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" name="name" required className="w-full p-3 rounded bg-blue-900 border border-blue-800" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="tel" name="phone" required className="w-full p-3 rounded bg-blue-900 border border-blue-800" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Service Type</label>
              <select name="service" className="w-full p-3 rounded bg-blue-900 border border-blue-800">
                <option value="plumbing">Plumbing</option>
                <option value="ac">Air Conditioning</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Emergency Details</label>
              <textarea name="details" rows={4} className="w-full p-3 rounded bg-blue-900 border border-blue-800"></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 py-3 rounded font-bold hover:bg-red-700 transition">
              SUBMIT WORK ORDER
            </button>
          </form>
        </div>

        {/* Map & Footer */}
        <div className="flex flex-col gap-6">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14305.749256786508!2d-80.1453355128418!3d26.312335300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91e32ce1d5e6f%3A0xa6181dd6f2664b4d!2sSuperior%20Plumbing%20And%20Air!5e0!3m2!1sen!2sus!4v1773972273854!5m2!1sen!2sus" 
            width="100%" 
            height="350" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className="rounded-2xl border-2 border-white/5"
          ></iframe>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <p className="font-bold text-lg">Visit Our Command Center</p>
            <p className="text-slate-600">457 Goolsby Blvd, Deerfield Beach, FL 33442</p>
          </div>
        </div>
      </div>
    </section>
  );
}
