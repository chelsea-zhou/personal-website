export default function Navigation() {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-[#ddeae8] dark:bg-black/80 backdrop-blur-sm  z-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16">
            {/* TODO: add logo ? */}
            <div className="flex gap-8">
            <a 
                href="/" 
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Home
              </a>
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
                href="/contact" 
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }