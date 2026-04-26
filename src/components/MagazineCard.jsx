export default function MagazineCard({ mag }) {
  return (
    <div
      onClick={() => window.open(mag.link, "_blank")}
      className="glass-card overflow-hidden flex flex-col hover-lift group cursor-pointer"
    >
      {/* Image */}
      <div className="h-40 sm:h-44 overflow-hidden relative">
        <img
          src={mag.image}
          alt={mag.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${mag.color} opacity-30`}
        />

        {/* Year */}
        <div className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white">
          {mag.year}
        </div>

        {/* Title */}
        <div className="absolute bottom-3 left-4">
          <h3 className="text-white text-xl font-black">
            {mag.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <p className="text-white text-sm leading-relaxed">
          {mag.desc}
        </p>

        <div className="mt-auto">
          <button className="w-full py-2 rounded-lg text-sm font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">
            📖 View Magazine
          </button>
        </div>
      </div>
    </div>
  );
}