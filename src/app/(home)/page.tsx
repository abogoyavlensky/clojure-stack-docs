import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center px-4 py-16 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-4">
        <span className="text-[#0e1116] dark:text-white">Welcome to </span>
        <span className="bg-gradient-to-r from-[#00e5c7] to-[#3e9fff] bg-clip-text text-transparent">Clojure Stack Lite</span>
      </h1>
      
      <p className="text-lg mb-8">A lightweight, modern template to jumpstart your Clojure projects</p>
      
      <div className="text-left mb-8 bg-gray-50 p-4 rounded-md w-full max-w-2xl">
        <p className="mb-2">To begin, modify the existing view in <code className="bg-gray-100 px-1 py-0.5 rounded">src/yourproject/views/home.clj</code> or add a new route in</p>
        <p className="mb-2"><code className="bg-gray-100 px-1 py-0.5 rounded">src/yourproject/routes.clj</code> and define a handler in <code className="bg-gray-100 px-1 py-0.5 rounded">src/yourproject/handlers.clj</code></p>
      </div>
      
      <div className="flex gap-4 mb-8">
        <Link 
          href="/docs/lite/quickstart"
          className="bg-[#0e1116] text-white px-6 py-2 rounded-md font-medium"
        >
          Get Started
        </Link>
      </div>
      
      <div className="flex items-center justify-center gap-8 mt-4">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 mb-2">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#5881D8" />
              <path d="M 50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5 Z" fill="#FFF" />
            </svg>
          </div>
          <span className="text-sm">Clojure</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 mb-2">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="80" x="10" y="10" fill="#3C92CA" rx="10" />
              <path d="M 30,30 70,30 70,70 30,70 Z" fill="#FFF" />
            </svg>
          </div>
          <span className="text-sm">SQLite</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 mb-2">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20,20 80,20 80,80 20,80 Z" fill="#06B6D4" />
              <path d="M 35,35 65,35 65,65 35,65 Z" fill="#FFF" />
            </svg>
          </div>
          <span className="text-sm">TailwindCSS</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 mb-2">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20,20 50,80 80,20 Z" fill="#333" />
            </svg>
          </div>
          <span className="text-sm">HTMX</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 mb-2">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20,50 50,20 80,50 50,80 Z" fill="#333" />
            </svg>
          </div>
          <span className="text-sm">AlpineJS</span>
        </div>
      </div>
      
      <div className="mt-16 text-sm text-gray-500">
        Made with ❤️ for the Clojure community
      </div>
    </main>
  );
}
