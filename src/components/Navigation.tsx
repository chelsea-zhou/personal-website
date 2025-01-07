export default function Navigation() {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-black/[.08] dark:border-white/[.08] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-lg font-semibold">
              Home
            </a>
            <div className="flex gap-8">
              <a 
                href="/projects" 
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Projects
              </a>
              <a 
                href="/blog" 
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Blog
              </a>

              <a 
                href="/projects" 
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }