// Home Page Nirbhay Bookstall



import Link from "next/link";
import { ArrowRight, BookOpen, Globe, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-lbc-blue text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-serif">
            Empowering the Next Generation of <span className="text-lbc-green">Civic Leaders</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Learning Beyond the Classroom (LBC) bridges the gap between students and active governance. 
            We teach public policy, environmental stewardship, and critical thinking to build a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/about" 
              className="bg-lbc-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2"
            >
              Discover Our Mission <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/events" 
              className="bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-lbc-dark mb-4">Our Core Pillars</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We focus on practical, real-world education that equips students with the tools they need to make a tangible impact in their communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-lbc-light p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-lbc-blue" />
              </div>
              <h3 className="text-xl font-bold text-lbc-dark mb-3">Public Policy</h3>
              <p className="text-slate-600 leading-relaxed">
                Demystifying how laws are made, how local governments function, and how students can actively participate in policy-making.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-lbc-light p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-lbc-green" />
              </div>
              <h3 className="text-xl font-bold text-lbc-dark mb-3">Environmental Action</h3>
              <p className="text-slate-600 leading-relaxed">
                Driving awareness around sustainability, climate change, and actionable community projects to protect our environment.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-lbc-light p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-lbc-blue" />
              </div>
              <h3 className="text-xl font-bold text-lbc-dark mb-3">Community Leadership</h3>
              <p className="text-slate-600 leading-relaxed">
                Fostering critical thinking and debate skills, preparing students to lead initiatives and inspire their peers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Newsletter Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
          <p className="text-slate-400 mb-8">
            Join our newsletter to stay updated on our latest educational articles, upcoming workshops, and volunteer opportunities.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-lbc-green text-slate-900"
              required
            />
            <button 
              type="submit" 
              className="bg-lbc-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}