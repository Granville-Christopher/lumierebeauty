import { useState } from 'react';

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-32 px-6 bg-white text-salon-text relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <span className="text-salon-accent text-xs font-bold uppercase tracking-[0.3em]">Reserve Your Time</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Book Your <span className="text-salon-text tracking-normal border-b-2 border-salon-accent">Transformation.</span>
          </h2>
          <p className="text-salon-text/70 text-lg font-light leading-relaxed">
            Our VIP slots fill up quickly. Please fill out the inquiry form below, and our concierge will contact you to confirm your appointment and assign your specialist.
          </p>

          <div className="pt-8 space-y-6">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-salon-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h4 className="font-bold text-sm">Lumière Flagship</h4>
                <p className="text-salon-text/60 text-sm font-light">124 Luxury Avenue, Beverly Hills, CA 90210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-salon-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-bold text-sm">Operating Hours</h4>
                <p className="text-salon-text/60 text-sm font-light">Tue - Sat: 9:00 AM - 7:00 PM<br />Sun &amp; Mon: By VIP Appointment Only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-salon-bg p-8 rounded-sm shadow-md relative border border-salon-text/5">
          {!submitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-salon-text/60 mb-2">First Name</label>
                  <input type="text" required className="w-full bg-white border border-salon-text/10 px-4 py-3 outline-none focus:border-salon-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-salon-text/60 mb-2">Last Name</label>
                  <input type="text" required className="w-full bg-white border border-salon-text/10 px-4 py-3 outline-none focus:border-salon-accent transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-salon-text/60 mb-2">Service Required</label>
                <select className="w-full bg-white border border-salon-text/10 px-4 py-3 outline-none focus:border-salon-accent transition-colors cursor-pointer appearance-none">
                  <option>Wig Revamp &amp; Install</option>
                  <option>Hair Coloring &amp; Styling</option>
                  <option>VIP Spa Manicure/Pedicure</option>
                  <option>Bridal Package</option>
                  <option>Exclusive VIP Day ($850)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-salon-text/60 mb-2">Preferred Date</label>
                <input type="date" className="w-full bg-white border border-salon-text/10 px-4 py-3 outline-none focus:border-salon-accent transition-colors" />
              </div>
              <button type="submit" className="w-full bg-salon-text text-white hover:bg-salon-accent py-4 font-bold uppercase tracking-widest text-xs transition-all mt-4 border border-salon-text hover:border-salon-accent">
                Request Appointment
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center h-full min-h-[300px]">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-salon-accent/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-salon-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold">Request Received!</h3>
                <p className="text-salon-text/60 text-sm">Our concierge will contact you shortly to confirm your appointment.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
