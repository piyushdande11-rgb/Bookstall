import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ABC Foundation.",
};

const contacts = [
  {
    department: "General Enquiries",
    phone: "+91 98765 43210",
    email: "info@abcfoundation.org",
  },
  {
    department: "Nirbhay Bookstall",
    phone: "+91 91234 56789",
    email: "bookstall@abcfoundation.org",
  },
  {
    department: "Events & Partnerships",
    phone: "+91 99887 76655",
    email: "events@abcfoundation.org",
  },
];

export default function ContactPage() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-slate-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-lbc-blue bg-blue-50 px-3 py-1 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl font-bold text-slate-800 font-merriweather mb-3">
            Contact Us
          </h1>
          <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
            Reach out to the ABC Foundation team — we'd love to hear from you.
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

          {/* Card header strip */}
          <div className="bg-lbc-blue px-8 py-5 flex items-center gap-3">
            <i className="ti ti-address-book text-white text-2xl" />
            <h2 className="text-white font-semibold text-lg tracking-tight">
              Foundation Contact Details
            </h2>
          </div>

          {/* Contact rows */}
          <div className="divide-y divide-slate-100">
            {contacts.map((c) => (
              <div
                key={c.department}
                className="px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                {/* Department label */}
                <div className="min-w-[180px]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">
                    Department
                  </p>
                  <p className="text-slate-800 font-semibold text-base">
                    {c.department}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <i className="ti ti-phone text-lbc-blue text-[16px]" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Phone</p>
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="text-slate-700 font-medium hover:text-lbc-blue transition-colors text-sm"
                    >
                      {c.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <i className="ti ti-mail text-lbc-blue text-[16px]" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email</p>
                    <a
                      href={`mailto:${c.email}`}
                      className="text-slate-700 font-medium hover:text-lbc-blue transition-colors text-sm"
                    >
                      {c.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Card footer */}
          <div className="bg-slate-50 border-t border-slate-100 px-8 py-4 flex items-center gap-2 text-slate-400 text-xs">
            <i className="ti ti-clock text-[15px]" />
            Monday – Friday &nbsp;·&nbsp; 10:00 AM – 6:00 PM IST
          </div>
        </div>

        {/* Address block */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-6 flex items-start gap-4">
          <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
            <i className="ti ti-map-pin text-lbc-blue text-[20px]" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
              Address
            </p>
            <p className="text-slate-700 font-medium text-sm leading-relaxed">
              ABC Foundation, 123 Civic Centre Road,<br />
              New Delhi – 110001, India
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}