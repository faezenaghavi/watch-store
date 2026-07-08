// app/contact/page.tsx
import PageHero from "@/components/PageHero"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Our concierge team is available to assist you with any inquiries about our timepieces."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-space)' }}>
                Visit Our Boutique
              </h3>
              <div className="space-y-4 text-sm text-[#D9D9D9]/70">
                <p>5th Avenue, No. 76<br />New York, NY 10019</p>
                <p>Mon — Sat: 10:00 — 20:00<br />Sunday: 11:00 — 18:00</p>
                <p>+1 (212) 555-0199<br />concierge@chronos.luxury</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6 text-center">
                <span className="text-2xl font-bold text-gradient block" style={{ fontFamily: 'var(--font-space)' }}>24/7</span>
                <span className="text-xs text-[#D9D9D9]/50 uppercase tracking-wider">Support</span>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <span className="text-2xl font-bold text-gradient block" style={{ fontFamily: 'var(--font-space)' }}>2h</span>
                <span className="text-xs text-[#D9D9D9]/50 uppercase tracking-wider">Response</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-space)' }}>
              Send a Message
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#D9D9D9]/60 uppercase tracking-wider block mb-2">First Name</label>
                  <input className="w-full px-4 py-3 rounded-xl glass text-white text-sm focus:outline-none focus:border-[#4A7BFF]/50" placeholder="John" />
                </div>
                <div>
                  <label className="text-xs text-[#D9D9D9]/60 uppercase tracking-wider block mb-2">Last Name</label>
                  <input className="w-full px-4 py-3 rounded-xl glass text-white text-sm focus:outline-none focus:border-[#4A7BFF]/50" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-xs text-[#D9D9D9]/60 uppercase tracking-wider block mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl glass text-white text-sm focus:outline-none focus:border-[#4A7BFF]/50" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-xs text-[#D9D9D9]/60 uppercase tracking-wider block mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl glass text-white text-sm focus:outline-none focus:border-[#4A7BFF]/50 bg-transparent">
                  <option value="">Select a topic</option>
                  <option value="purchase">Purchase Inquiry</option>
                  <option value="service">Service & Repair</option>
                  <option value="trade">Trade-In</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-[#D9D9D9]/60 uppercase tracking-wider block mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl glass text-white text-sm focus:outline-none focus:border-[#4A7BFF]/50 resize-none" placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="btn-primary rounded-xl w-full text-white py-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}