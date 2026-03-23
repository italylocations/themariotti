export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1
          className="font-serif text-[48px] text-[#e8e6e1] leading-none"
          style={{ fontStyle: "italic" }}
        >
          Matteo Mariotti
        </h1>
        <p
          className="font-sans text-[12px] uppercase tracking-[5px]"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Coming Soon
        </p>
      </div>
    </div>
  );
}
