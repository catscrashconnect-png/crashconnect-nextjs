export default function Marquee() {
  const items = [
    'Real-time accident detection',
    'Live GPS tracking',
    'Instant SOS alerts',
    'AI voice assistant',
    'Tamil & English',
    'Bikes · Cars · Trucks',
    'OBD-II diagnostics',
  ];

  return (
    <div className="relative z-10 overflow-hidden border-y border-line bg-bg/90 py-5 backdrop-blur-sm">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-14">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="whitespace-nowrap text-sm tracking-tight text-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
