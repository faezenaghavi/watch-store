// app/contact/page.tsx
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

interface ContactPageProps {
  locale?: "en" | "fa";
}

export default function ContactPage({ locale = "en" }: ContactPageProps) {
  const copy =
    locale === "fa"
      ? {
          heroTitle: "تماس با ما",
          heroSubtitle:
            "تیم مشاوره اختصاصی ما آماده پاسخگویی به سوالات شما درباره ساعت‌هاست.",
          breadcrumb: "تماس با ما",
          visitTitle: "بازدید از بوتیک ما",
          addressLine: (
            <>
              خیابان پنجم، پلاک ۷۶
              <br />
              نیویورک، NY 10019
            </>
          ),
          hoursLine: (
            <>
              شنبه تا پنج‌شنبه: ۱۰:۰۰ — ۲۰:۰۰
              <br />
              جمعه: ۱۱:۰۰ — ۱۸:۰۰
            </>
          ),
          contactLine: (
            <>
              +1 (212) 555-0199
              <br />
              concierge@chronos.luxury
            </>
          ),
          supportValue: "۲۴/۷",
          supportLabel: "پشتیبانی",
          responseValue: "۲ ساعت",
          responseLabel: "زمان پاسخ",
          formTitle: "ارسال پیام",
          firstName: "نام",
          firstNamePlaceholder: "علی",
          lastName: "نام خانوادگی",
          lastNamePlaceholder: "رضایی",
          email: "ایمیل",
          emailPlaceholder: "you@example.com",
          subject: "موضوع",
          selectTopic: "یک موضوع انتخاب کنید",
          purchase: "استعلام خرید",
          service: "خدمات و تعمیرات",
          trade: "معاوضه ساعت",
          other: "سایر",
          message: "پیام",
          messagePlaceholder: "چطور می‌توانیم کمک کنیم...",
          send: "ارسال پیام",
        }
      : {
          heroTitle: "Contact Us",
          heroSubtitle:
            "Our concierge team is available to assist you with any inquiries about our timepieces.",
          breadcrumb: "Contact",
          visitTitle: "Visit Our Boutique",
          addressLine: (
            <>
              5th Avenue, No. 76
              <br />
              New York, NY 10019
            </>
          ),
          hoursLine: (
            <>
              Mon — Sat: 10:00 — 20:00
              <br />
              Sunday: 11:00 — 18:00
            </>
          ),
          contactLine: (
            <>
              +1 (212) 555-0199
              <br />
              concierge@chronos.luxury
            </>
          ),
          supportValue: "24/7",
          supportLabel: "Support",
          responseValue: "2h",
          responseLabel: "Response",
          formTitle: "Send a Message",
          firstName: "First Name",
          firstNamePlaceholder: "John",
          lastName: "Last Name",
          lastNamePlaceholder: "Doe",
          email: "Email",
          emailPlaceholder: "john@example.com",
          subject: "Subject",
          selectTopic: "Select a topic",
          purchase: "Purchase Inquiry",
          service: "Service & Repair",
          trade: "Trade-In",
          other: "Other",
          message: "Message",
          messagePlaceholder: "Tell us how we can help...",
          send: "Send Message",
        };

  return (
    <>
      <PageHero
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        breadcrumbs={[{ label: copy.breadcrumb }]}
      />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3
                className="text-lg font-semibold text-white mb-6"
                style={{ fontFamily: "var(--font-space)" }}
              >
                {copy.visitTitle}
              </h3>
              <div className="space-y-4 text-sm text-[#D9D9D9]/70">
                <p>{copy.addressLine}</p>
                <p>{copy.hoursLine}</p>
                <p>{copy.contactLine}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6 text-center">
                <span
                  className="text-2xl font-bold text-gradient block"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {copy.supportValue}
                </span>
                <span className="text-xs text-[#D9D9D9]/50 uppercase tracking-wider">
                  {copy.supportLabel}
                </span>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <span
                  className="text-2xl font-bold text-gradient block"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {copy.responseValue}
                </span>
                <span className="text-xs text-[#D9D9D9]/50 uppercase tracking-wider">
                  {copy.responseLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3
              className="text-lg font-semibold text-white mb-6"
              style={{ fontFamily: "var(--font-space)" }}
            >
              {copy.formTitle}
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#D9D9D9]/60 uppercase tracking-wider block mb-2">
                    {copy.firstName}
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl glass text-white text-sm focus:outline-none focus:border-[#4A7BFF]/50"
                    placeholder={copy.firstNamePlaceholder}
                  />
                </div>
                <div>
                  <label className="text-xs text-[#D9D9D9]/60 uppercase tracking-wider block mb-2">
                    {copy.lastName}
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl glass text-white text-sm focus:outline-none focus:border-[#4A7BFF]/50"
                    placeholder={copy.lastNamePlaceholder}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-[#D9D9D9]/60 uppercase tracking-wider block mb-2">
                  {copy.email}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl glass text-white text-sm focus:outline-none focus:border-[#4A7BFF]/50"
                  placeholder={copy.emailPlaceholder}
                />
              </div>
              <div>
                <label className="text-xs text-[#D9D9D9]/60 uppercase tracking-wider block mb-2">
                  {copy.subject}
                </label>
                <select className="w-full px-4 py-3 rounded-xl glass text-white text-sm focus:outline-none focus:border-[#4A7BFF]/50 bg-transparent">
                  <option value="">{copy.selectTopic}</option>
                  <option value="purchase">{copy.purchase}</option>
                  <option value="service">{copy.service}</option>
                  <option value="trade">{copy.trade}</option>
                  <option value="other">{copy.other}</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-[#D9D9D9]/60 uppercase tracking-wider block mb-2">
                  {copy.message}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl glass text-white text-sm focus:outline-none focus:border-[#4A7BFF]/50 resize-none"
                  placeholder={copy.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="btn-primary rounded-xl w-full text-white py-4"
              >
                {copy.send}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}