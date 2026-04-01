import { useState, useEffect, useRef } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "🌐" },
  { name: "JavaScript", level: 80, category: "frontend", icon: "⚡" },
  { name: "React", level: 80, category: "frontend", icon: "⚛️" },
  { name: "Tailwind CSS", level: 80, category: "frontend", icon: "🎨" },
  { name: "Next.js", level: 80, category: "frontend", icon: "▲" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: "🟢" },
  { name: "Express", level: 50, category: "backend", icon: "🚂" },
  { name: "PostgreSQL", level: 1, category: "backend", icon: "🐘" },
  { name: "MongoDB", level: 70, category: "backend", icon: "🍃" },
  { name: "MySQL", level: 90, category: "backend", icon: "🐬" },
  { name: "Laravel", level: 90, category: "backend", icon: "🔴" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: "🐙" },
  { name: "Docker", level: 80, category: "tools", icon: "🐳" },
  { name: "Figma", level: 85, category: "tools", icon: "🎭" },
  { name: "VS Code", level: 95, category: "tools", icon: "💻" },
];

const categories = ["all", "frontend", "backend", "tools"];

const LEVEL_LABEL = (level) => {
  if (level >= 90) return { text: "Expert", color: "text-emerald-400" };
  if (level >= 75) return { text: "Advanced", color: "text-primary" };
  if (level >= 50) return { text: "Intermediate", color: "text-amber-400" };
  return { text: "Learning", color: "text-rose-400" };
};

const BAR_COLOR = (level) => {
  if (level >= 90) return "from-emerald-400 to-emerald-500";
  if (level >= 75) return "from-primary to-cyan-400";
  if (level >= 50) return "from-amber-400 to-orange-400";
  return "from-rose-400 to-rose-500";
};

function SkillCard({ skill, index }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setAnimated(false);
    const timer = setTimeout(() => setAnimated(true), index * 60 + 100);
    return () => clearTimeout(timer);
  }, [skill.name, index]);

  const label = LEVEL_LABEL(skill.level);
  const barColor = BAR_COLOR(skill.level);

  return (
    <div
      ref={ref}
      className="group relative bg-card border border-border hover:border-primary/30
        rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5
        hover:-translate-y-0.5"
      style={{
        animation: `fadeSlideUp 0.4s ease-out ${index * 60}ms both`,
      }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-xl leading-none">{skill.icon}</span>
          <h3 className="font-semibold text-foreground">{skill.name}</h3>
        </div>
        <span className={cn("text-xs font-semibold uppercase tracking-wider", label.color)}>
          {label.text}
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative">
        <div className="w-full bg-secondary/60 h-1.5 rounded-full overflow-hidden">
          <div
            className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out", barColor)}
            style={{ width: animated ? `${skill.level}%` : "0%" }}
          />
        </div>
        {/* Glow dot at end of bar */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r shadow-md transition-all duration-700 ease-out",
            barColor
          )}
          style={{ left: animated ? `calc(${skill.level}% - 4px)` : "0%" }}
        />
      </div>

      {/* Percentage */}
      <div className="flex justify-between items-center mt-2.5">
        <span className="text-xs text-muted-foreground/50">Proficiency</span>
        <span className="text-sm font-bold text-foreground tabular-nums">
          {animated ? skill.level : 0}%
        </span>
      </div>
    </div>
  );
}

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Summary stats
  const avgLevel = Math.round(
    filteredSkills.reduce((a, b) => a + b.level, 0) / filteredSkills.length
  );
  const expertCount = filteredSkills.filter((s) => s.level >= 90).length;

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/50 mb-3 font-medium">
            What I work with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                  : "bg-transparent border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              )}
            >
              {category}
              <span className={cn(
                "ml-1.5 text-xs",
                activeCategory === category ? "opacity-80" : "opacity-40"
              )}>
                {category === "all"
                  ? skills.length
                  : skills.filter((s) => s.category === category).length}
              </span>
            </button>
          ))}
        </div>

        {/* Mini stats bar */}
        <div className="flex justify-center gap-8 mb-10 text-center">
          <div>
            <span className="text-lg font-bold text-foreground">{filteredSkills.length}</span>
            <p className="text-xs text-muted-foreground/50 mt-0.5">Skills</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <span className="text-lg font-bold text-emerald-400">{expertCount}</span>
            <p className="text-xs text-muted-foreground/50 mt-0.5">Expert</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <span className="text-lg font-bold text-primary">{avgLevel}%</span>
            <p className="text-xs text-muted-foreground/50 mt-0.5">Avg. Level</p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};