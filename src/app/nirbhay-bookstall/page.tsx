// Home Page Nirbhay Bookstall (This is a type script file)


import Link from "next/link"; // This is used to link to other pages in the Next.js application
import { ArrowRight, BookOpen, EarthIcon, Globe, Globe2Icon, Users } from "lucide-react";   // this imports the icons from lucide-react

// Export function 
export default function NirbhayBookstall() 

{
  return (
    <div className="flex flex-col min-h-screen">
      {/* Title Section */}
      <section className="bg-cover bg-center bg-no-repeat text-red-600  py-10 lg:py-32" style={{ backgroundImage: "url('/images/Home-bg.jpg')" }}
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Nirbhay Bookstall
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            (A short Text About the bookstall and its mission.)
          </p>
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