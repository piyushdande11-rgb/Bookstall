// Home Page Nirbhay Bookstall (This is a type script file)


import Link from "next/link"; // This is used to link to other pages in the Next.js application
import { ArrowRight, BookOpen, EarthIcon, Globe, Globe2Icon, Users } from "lucide-react";   // this imports the icons from lucide-react

// Export function 
export default function HomePage() 

{
  return (
    <div className="flex flex-col min-h-screen">
      {/* Title Section */}
      <section className="bg-amber-300 text-center py-10 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            ABC Foundation Akola
          </h1>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-10 leading-relaxed">
            (A short Text about the foundation and its mission.)
          </p>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-lbc-dark mb-4">Our Mission</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
            (About our mission)  
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-lbc-light p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <EarthIcon className="w-7 h-7 text-lbc-blue" />
              </div>
              <h3 className="text-xl font-bold text-lbc-dark mb-3">Climate Change</h3>
              <p className="text-slate-600 leading-relaxed">
               Driving awareness around sustainability, climate change, and actionable community projects to protect our environment.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-lbc-light p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-lbc-green" />
              </div>
              <h3 className="text-xl font-bold text-lbc-dark mb-3">Wisdom Literature</h3>
              <p className="text-slate-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid eveniet cum, possimus tenetur accusantium autem modi nulla culpa tempore delectus magnam odit libero! Temporibus culpa porro modi repellendus amet.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-lbc-light p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-lbc-blue" />
              </div>
              <h3 className="text-xl font-bold text-lbc-dark mb-3">Bookstall Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, accusantium voluptas culpa vitae porro quod, nemo facere cumque architecto, omnis eaque perferendis qui adipisci maxime et! Illum quisquam ab placeat.
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