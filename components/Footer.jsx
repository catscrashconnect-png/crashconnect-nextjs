export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-bg section-pad py-12 text-center">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <div className="flex items-center gap-2 text-sm font-medium tracking-tight">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          Crash Connect Pvt Ltd
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.12em] text-muted">
          <a href="#technology" className="hover:text-soft">Technology</a>
          <a href="#features" className="hover:text-soft">Features</a>
          <a href="#vehicles" className="hover:text-soft">Vehicles</a>
          <a href="#roadmap" className="hover:text-soft">Roadmap</a>
          <a href="#careers" className="hover:text-soft">Careers</a>
          <a href="#contact" className="hover:text-soft">Contact</a>
        </nav>
        <p className="text-[11px] text-muted">
          CrashConnect — CATS v2.0 · © 2025 Crisis Alert Tech System
        </p>
      </div>
    </footer>
  );
}
