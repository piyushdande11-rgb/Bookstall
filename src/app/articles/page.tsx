import Link from "next/link";                // link component for client-side navigation
import { getAllItems } from "@/lib/markdown";   //function to fetch all markdown items from a specified folder
import { ArticleMeta, ContentItem } from "@/types"; // Types for article metadata and content items, ensuring type safety when fetching and rendering articles
import { Calendar, User } from "lucide-react"; // Calrender for date icon


// Atricle Tag Page - Lists all articles in a grid format with title, excerpt, date,
//  and author information, each article 


export default function ArticlesPage() {
  // Fetch all articles from the markdown folder
  const articles = getAllItems("articles") as ContentItem<ArticleMeta>[];

  return (
    <div className="bg-lbc-light min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-bold text-lbc-dark mb-4 font-serif">Articles & Insights</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Explore our thoughts on education, climate change, Wisdom Literaure, and more.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.slug} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-lbc-blue" />
                    {new Date(article.meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                {/* Title and Excerpt */}
                <h2 className="text-xl font-bold text-lbc-dark mb-3 line-clamp-2 hover:text-lbc-blue transition-colors">
                  <Link href={`/articles/${article.slug}`}>
                    {article.meta.title}
                  </Link>
                </h2>
                <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                  {article.meta.excerpt}
                </p>

                {/* Footer (Author and Read More) */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <User className="w-4 h-4 text-slate-400" />
                    {article.meta.author || "LBC Staff"}
                  </div>
                  <Link 
                    href={`/articles/${article.slug}`}
                    className="text-sm font-semibold text-lbc-blue hover:text-blue-800"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State fallback */}
        {articles.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No articles found</h3>
            <p className="text-slate-500">Check back later for new insights and updates.</p>
          </div>
        )}

      </div>
    </div>
  );
}