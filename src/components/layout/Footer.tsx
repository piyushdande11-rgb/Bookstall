import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lbc-dark text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Nirbhay Bookstall
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero animi cupiditate fugit maiores dolorum? Harum corporis eius fugiat exercitationem. Pariatur temporibus accusantium vel magni debitis! Vitae similique possimus facere sapiente.  
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-lbc-green transition-colors">About Us</Link></li>
              <li><Link href="/articles" className="hover:text-lbc-green transition-colors">Articles</Link></li>
              <li><Link href="/events" className="hover:text-lbc-green transition-colors">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-lbc-green transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/team" className="hover:text-lbc-green transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-lbc-green transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-lbc-green transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Akola, Maharashtra, India</li>
              <li>contact@nitbhay-foundation.org</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          &copy; {currentYear} Nirbhay Bookstall. All rights reserved.
        </div>
      </div>
    </footer>
  );
}