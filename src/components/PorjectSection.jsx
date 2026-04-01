import { ArrowRight, ExternalLink, Github, Star, GitFork } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brownies Browcious",
    description:
      "E-Commerce website for Brownies Browcious — built as my final project in college. Features product catalog, cart, and order management.",
    image: "/projects/project1.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://brownies-browcious.store",
    githubUrl: "https://github.com/IpTul/E-Commerce-Brownies",
    type: "Full Stack",
    year: "2023",
    accent: "from-amber-500/20 to-orange-500/10",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    id: 2,
    title: "Catering Rosyanti",
    description:
      "E-Commerce website for a food catering business. Handles menu catalog, orders, and customer management.",
    image: "/projects/project2.png",
    tags: ["Laravel", "MySQL"],
    demoUrl: "https://catering-rosyanti.store",
    githubUrl: "https://github.com/IpTul/food-catering",
    type: "Full Stack",
    year: "2024",
    accent: "from-blue-500/20 to-cyan-500/10",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Header */}
        <div className="text-center mb-14" style={{ animation: "fadeSlideUp 0.5s ease-out both" }}>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/50 mb-3 font-medium">
            What I've built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Each project was carefully crafted with attention to detail,
            performance, and user experience.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden
                hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5
                transition-all duration-400 hover:-translate-y-1"
              style={{ animation: `fadeSlideUp 0.5s ease-out ${index * 120}ms both` }}
            >
              {/* Gradient accent overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10`} />

              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-secondary/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating badges on image */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur border border-white/10 text-white/80">
                    {project.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur border border-white/10 text-white/80">
                    {project.type}
                  </span>
                </div>

                {/* Hover action buttons on image */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  {/* <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-bold
                      hover:bg-primary hover:text-primary-foreground transition-colors duration-200 shadow-lg"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a> */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur text-white text-xs font-bold
                      border border-white/20 hover:bg-white/20 transition-colors duration-200 shadow-lg"
                  >
                    <Github size={13} /> Source
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-20 p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${project.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-foreground mb-1.5">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground/40 uppercase tracking-widest">
                    {project.type}
                  </span>
                  <div className="flex gap-2">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                      title="Live Demo"
                    >
                      <ExternalLink size={15} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                      title="GitHub"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-12"
          style={{ animation: "fadeSlideUp 0.5s ease-out 0.35s both" }}
        >
          <a
            href="https://github.com/IpTul"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center gap-2 group"
          >
            <Github size={16} />
            Check My GitHub
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <p className="text-xs text-muted-foreground/40 mt-3">
            More projects available on GitHub
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .duration-400 { transition-duration: 400ms; }
      `}</style>
    </section>
  );
};