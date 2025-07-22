import Link from 'next/link';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

const usageExampleCode = `clojure -Ttools install-latest :lib io.github.seancorfield/deps-new :as new && \\
clojure -Tnew create :template io.github.abogoyavlensky/clojure-stack-lite :name myproject`

export default function HomePage() {
  return (
    <div className="py-14 sm:py-16 md:py-24 xl:py-32 2xl:py-56">
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Clojure Stack Lite</span>
          </h1>

          <p className="text-md md:text-xl mb-8">A lightweight, modern template to jumpstart your Clojure projects</p>

          <div className="mb-8 max-w-3xl mx-auto text-center">
            <DynamicCodeBlock lang="shell" code={usageExampleCode} />
          </div>

          <div className="flex flex-col sm:flex-row justify-center mb-8 space-y-4 sm:space-y-0">
            <Link
              href="/docs/lite"
              className="bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium py-3 px-8 rounded-lg transition-colors duration-200 sm:mr-2"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/abogoyavlensky/clojure-stack-lite"
              target="_blank"
              className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium py-3 px-8 rounded-lg border border-slate-300 dark:border-slate-600 transition-colors duration-200"
            >
              Source code
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <svg className="h-8 w-8 mb-2"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg">
                <g fill="none">
                  <path d="M64 0C28.712 0 0 28.6 0 63.751c0 35.155 28.712 63.753 64 63.753s64-28.598 64-63.753C128 28.6 99.288 0 64 0"
                    fill="#FFF" />
                  <path d="M61.659 64.898a265.825 265.825 0 00-1.867 4.12c-2.322 5.241-4.894 11.62-5.834 15.706-.337 1.455-.546 3.258-.542 5.258 0 .79.043 1.622.11 2.469a30.74 30.74 0 0010.533 1.87 30.796 30.796 0 009.642-1.566 18.09 18.09 0 01-2.011-2.12c-4.11-5.221-6.403-12.872-10.031-25.737M46.485 38.96c-7.85 5.51-12.986 14.6-13.005 24.9.019 10.145 5.001 19.116 12.653 24.65 1.877-7.789 6.582-14.92 13.637-29.214a114.691 114.691 0 00-1.43-3.72c-1.955-4.884-4.776-10.556-7.294-13.124-1.283-1.342-2.84-2.502-4.561-3.492"
                    fill="#91DC47" />
                  <path d="M90.697 98.798c-4.05-.506-7.392-1.116-10.317-2.144a36.708 36.708 0 01-16.32 3.807c-20.293 0-36.742-16.383-36.745-36.602 0-10.97 4.852-20.805 12.528-27.512-2.053-.495-4.194-.783-6.38-.779-10.782.101-22.162 6.044-26.9 22.095-.443 2.337-.337 4.103-.337 6.197 0 31.818 25.895 57.613 57.835 57.613 19.561 0 36.841-9.682 47.305-24.489-5.66 1.405-11.103 2.077-15.763 2.091-1.747 0-3.387-.093-4.906-.277"
                    fill="#63B132" />
                  <path d="M79.829 87.634c.357.176 1.167.464 2.293.783 7.579-5.542 12.504-14.469 12.523-24.558h-.003c-.028-16.82-13.693-30.43-30.582-30.462a30.765 30.765 0 00-9.602 1.554c6.21 7.05 9.196 17.127 12.084 28.148l.005.013c.005.009.924 3.06 2.501 7.11 1.566 4.042 3.797 9.048 6.23 12.696 1.597 2.444 3.354 4.2 4.551 4.716"
                    fill="#90B4FE" />
                  <path d="M17.057 30.311c5.463-3.408 11.04-4.637 15.908-4.593 6.722.02 12.008 2.096 14.544 3.516.612.352 1.194.73 1.764 1.12a36.714 36.714 0 0114.786-3.096c20.295.003 36.747 16.386 36.75 36.601-.003 10.192-4.188 19.408-10.934 26.044a45.3 45.3 0 005.225.29c6.406.004 13.329-1.404 18.52-5.753 3.384-2.84 6.22-6.998 7.792-13.233.307-2.408.484-4.856.484-7.347 0-31.817-25.892-57.614-57.835-57.614-19.372 0-36.508 9.5-47.004 24.065z"
                    fill="#5881D8" />
                </g>
              </svg>
              <span className="text-sm font-medium">Clojure</span>
            </div>

            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-8 w-8 mb-2">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
                <path d="M12.096 6.223A4.92 4.92 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.493 4.493 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.525 4.525 0 0 1-.813-.927C8.5 14.992 8.252 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.552 4.552 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10c.262 0 .52-.008.774-.024a4.525 4.525 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777ZM3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4Z"/>
              </svg>
              <span className="text-sm font-medium">SQLite/PostgreSQL</span>
            </div>

            <div className="flex flex-col items-center">
              <svg className="h-8 w-8 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128">
                <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  fill="#38b2ac" />
              </svg>
              <span className="text-sm font-medium">TailwindCSS</span>
            </div>

            <div className="flex flex-col items-center">
              <svg className="h-8 w-8 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M0 13.01v-2l7.09-2.98l.58 1.94l-5.1 2.05l5.16 2.05l-.63 1.9Zm16.37 1.03l5.18-2l-5.16-2.09l.65-1.88L24 10.95v2.12L17 16zm-2.85-9.98H16l-5.47 15.88H8.05Z" />
              </svg>
              <span className="text-sm font-medium">HTMX</span>
            </div>

            <div className="flex flex-col items-center">
              <svg className="h-8 w-8 mb-2"
                width="256"
                height="117.421"
                viewBox="0 0 256 117.421"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid">
                <title>Alpine.js</title>
                <g>
                  <polygon fill="#77C1D2"
                    points="199.111112 0 256 56.6393762 199.111112 113.278752 142.222222 56.6393762" />
                  <polygon fill="#2D3441"
                    points="56.8888888 0 174.826667 117.420507 61.0488889 117.420507 0 56.6393762" />
                </g>
              </svg>
              <span className="text-sm font-medium">AlpineJS</span>
            </div>
          </div>

        </div>
      </main>
      <footer className="text-center text-sm text-slate-500 dark:text-slate-400 sm:mt-20 pb-4">
        <p> Made with ❤️ for the Clojure community</p>
      </footer>
    </div>
  );
}
