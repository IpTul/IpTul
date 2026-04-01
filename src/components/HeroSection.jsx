import { ArrowDown, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/iptul/", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/iptul/", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/in/m-luthfi-rahman/", label: "LinkedIn" },
];

const ROLES = ["Junior Programmer", "Video Editor", "UI Explorer"];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-cyan-500/6 blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <div className="space-y-7">

            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 opacity-0"
              style={{ animation: "fadeSlideUp 0.5s ease-out 0.1s both" }}
            >
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-primary/70 font-medium">
                Portfolio
              </span>
            </div>

            {/* Headline */}
            <div
              className="opacity-0"
              style={{ animation: "fadeSlideUp 0.5s ease-out 0.2s both" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-secondary/90">Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  IpTul
                </span>
              </h1>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-muted tracking-tight">
                A Junior Programmer
              </h2>
            </div>

            {/* Bio */}
            <p
              className="text-base leading-relaxed max-w-md opacity-0"
              style={{ animation: "fadeSlideUp 0.5s ease-out 0.35s both" }}
            >
              My real name is{" "}
              
              <a
                href="https://linkedin.com/in/m-luthfi-rahman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                <span className="text-primary font-medium">Muhammad Luthfi Rahman</span>
              </a>
              , known as IpTul. You can call me bae if you want — whatever makes
              you happy, I guess 😄
            </p>

            {/* CTA row */}
            <div
              className="flex flex-wrap items-center gap-4 pt-2 opacity-0"
              style={{ animation: "fadeSlideUp 0.5s ease-out 0.45s both" }}
            >
              <a
                href="#projects"
                className="cosmic-button inline-flex items-center gap-2 group"
              >
                View My Work
                <ArrowDown
                  size={14}
                  className="rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-medium rounded-full border border-muted text-muted
                  hover:text-primary hover:border-primary transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-4 pt-1 opacity-0"
              style={{ animation: "fadeSlideUp 0.5s ease-out 0.55s both" }}
            >
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-muted/70 hover:text-primary hover:bg-primary/10
                    border border-muted/50 hover:border-primary/20
                    transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
              <span className="h-px flex-1 max-w-[3rem] bg-muted/50" />
              <span className="text-xs text-muted/70 tracking-widest uppercase">Follow</span>
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div
            className="flex justify-center md:justify-end opacity-0"
            style={{ animation: "fadeSlideUp 0.6s ease-out 0.3s both" }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-2xl border border-primary/30 rotate-3 transition-transform duration-700 group-hover:rotate-6" />
              <div className="absolute -inset-6 rounded-2xl border border-primary/50 -rotate-2" />

              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl scale-90 opacity-50" />

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-muted shadow-2xl shadow-black/50">
                <img
                  src="/projects/IpTul.jpg"
                  alt="Muhammad Luthfi Rahman — IpTul"
                  className="w-72 md:w-80 lg:w-96 object-cover object-center"
                  style={{ aspectRatio: "3/4" }}
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Name badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="px-3 py-2 rounded-xl bg-black/50 backdrop-blur border border-white/10">
                    <p className="text-xs text-white/40 uppercase tracking-widest">Developer</p>
                    <p className="text-sm font-semibold text-white">Muhammad Luthfi Rahman</p>
                  </div>
                </div>
              </div>

              {/* Floating skill badge */}
              <div
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-xs font-semibold
                  bg-primary/90 text-black shadow-lg shadow-primary/30"
                style={{ animation: "float 3s ease-in-out infinite" }}
              >
                Open to Work 🚀
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fadeSlideUp 0.5s ease-out 0.7s both" }}
      >
        <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent " />
        <ArrowDown size={14} className="text-primary animate-bounce" />
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-6px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};