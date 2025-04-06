import Link from 'next/link';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

const usageExampleCode = `clojure -Ttools install-latest :lib io.github.seancorfield/deps-new :as new && \\
clojure -Sdeps '{:override-deps {org.clojure/clojure {:mvn/version "1.12.0"}}}' \\
    -Tnew create :template io.github.abogoyavlensky/clojure-stack-lite :name myproject`

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
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 sm:mr-2"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/abogoyavlensky/clojure-stack-lite"
              target='true'
              className="bg-white hover:bg-slate-100 text-slate-900 font-medium py-3 px-8 rounded-lg border border-slate-300 transition-colors duration-200"
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
              <svg className="h-8 w-8 mb-2"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="sqlite-original-a"
                    x1="-15.615"
                    x2="-6.741"
                    y1="-9.108"
                    y2="-9.108"
                    gradientTransform="rotate(90 -90.486 64.634) scale(9.2712)"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#95d7f4" offset="0" />
                    <stop stopColor="#0f7fcc" offset=".92" />
                    <stop stopColor="#0f7fcc" offset="1" />
                  </linearGradient>
                </defs>
                <path d="M69.5 99.176c-.059-.73-.094-1.2-.094-1.2S67.2 83.087 64.57 78.642c-.414-.707.043-3.594 1.207-7.88.68 1.169 3.54 6.192 4.118 7.81.648 1.824.78 2.347.78 2.347s-1.57-8.082-4.144-12.797a162.286 162.286 0 012.004-6.265c.973 1.71 3.313 5.859 3.828 7.3.102.293.192.543.27.774.023-.137.05-.274.074-.414-.59-2.504-1.75-6.86-3.336-10.082 3.52-18.328 15.531-42.824 27.84-53.754H16.9c-5.387 0-9.789 4.406-9.789 9.789v88.57c0 5.383 4.406 9.789 9.79 9.789h52.897a118.657 118.657 0 01-.297-14.652"
                  fill="#0b7fcc" />
                <path d="M65.777 70.762c.68 1.168 3.54 6.188 4.117 7.809.649 1.824.781 2.347.781 2.347s-1.57-8.082-4.144-12.797a164.535 164.535 0 012.004-6.27c.887 1.567 2.922 5.169 3.652 6.872l.082-.961c-.648-2.496-1.633-5.766-2.898-8.328 3.242-16.871 13.68-38.97 24.926-50.898H16.899a6.94 6.94 0 00-6.934 6.933v82.11c17.527-6.731 38.664-12.88 56.855-12.614-.672-2.605-1.441-4.96-2.25-6.324-.414-.707.043-3.597 1.207-7.879"
                  fill="url(#sqlite-original-a)" />
                <path d="M115.95 2.781c-5.5-4.906-12.164-2.933-18.734 2.899a44.347 44.347 0 00-2.914 2.859c-11.25 11.926-21.684 34.023-24.926 50.895 1.262 2.563 2.25 5.832 2.894 8.328.168.64.32 1.242.442 1.754.285 1.207.437 1.996.437 1.996s-.101-.383-.515-1.582c-.078-.23-.168-.484-.27-.773-.043-.125-.105-.274-.172-.434-.734-1.703-2.765-5.305-3.656-6.867-.762 2.25-1.437 4.36-2.004 6.265 2.578 4.715 4.149 12.797 4.149 12.797s-.137-.523-.782-2.347c-.578-1.621-3.441-6.64-4.117-7.809-1.164 4.281-1.625 7.172-1.207 7.88.809 1.362 1.574 3.722 2.25 6.323 1.524 5.867 2.586 13.012 2.586 13.012s.031.469.094 1.2a118.653 118.653 0 00.297 14.651c.504 6.11 1.453 11.363 2.664 14.172l.828-.449c-1.781-5.535-2.504-12.793-2.188-21.156.48-12.793 3.422-28.215 8.856-44.289 9.191-24.27 21.938-43.738 33.602-53.035-10.633 9.602-25.023 40.684-29.332 52.195-4.82 12.891-8.238 24.984-10.301 36.574 3.55-10.863 15.047-15.53 15.047-15.53s5.637-6.958 12.227-16.888c-3.95.903-10.43 2.442-12.598 3.352-3.2 1.344-4.067 1.8-4.067 1.8s10.371-6.312 19.27-9.171c12.234-19.27 25.562-46.648 12.141-58.621"
                  fill="#003956" />
              </svg>
              <span className="text-sm font-medium">SQLite</span>
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
      <footer className="text-center text-sm text-slate-500 sm:mt-20 pb-4">
        <p> Made by with ❤️ for the Clojure community</p>
      </footer>
    </div>
  );
}
