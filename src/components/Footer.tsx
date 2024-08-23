// frontend/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 py-8 text-center text-gray-500 bg-[#0d1117]">
      <p>
        Built with <span className="text-red-500">❤️</span> by{' '}
        <a
          href="https://x.com/westonnelson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          @westonnelson
        </a>
      </p>
      <div className="mt-2 flex justify-center gap-4 text-sm">
        <a href="https://docs.cdp.coinbase.com/" className="hover:underline">Docs</a>
        <a href="https://github.com/westonnelson/memecoin-launchpad" className="hover:underline">GitHub</a>
      </div>
    </footer>
  );
}