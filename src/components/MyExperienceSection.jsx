import { ExternalLink, Instagram, Award, Star, BookOpen } from 'lucide-react';
import { useState } from 'react';

const exp = [
  {
    id: 1,
    title: 'Dicoding',
    description:
      'BEKRAF Developer Day 2019 - Samarinda Diselenggarakan oleh Kementrian Ekonomi Kreatif/ Badan Ekonomi Kreatif Republik Indonesia',
    image:
      'https://d17ivq9b7rppb3.cloudfront.net/original/event/bekraf_developer_day_2019_samarinda_logo_130819092619.png',
    tags: ['2019', 'Dicoding', 'Seminar', 'Certificate'],
    link: 'https://www.dicoding.com/events/2489',
    instagramUrl: 'https://www.instagram.com/dicoding',
    type: 'seminar',
    year: '2019',
  },
  {
    id: 2,
    title: 'KMIPN IV',
    description:
      'Kompetensi Mahasiswa Bidang Informatika Politeknik Nasional kategori Animasi mendapat juara Best Spirit. Bertugas sebagai Video Editor (Finishing)',
    image: '/projects/KMIPN.jpeg',
    tags: ['2022', 'Competition', 'National', 'Politeknik', 'Certificate'],
    link: 'https://www.polibatam.ac.id/events/politeknik-negeri-batam-tuan-rumah-kmipn-iv-tahun-2022',
    instagramUrl: 'https://www.instagram.com/kmipn2022',
    type: 'competition',
    year: '2022',
    highlight: true,
  },
  {
    id: 3,
    title: 'Oracle Academy',
    description:
      'Award Course Oracle Academy Indonesia. Diselenggarakan oleh Oracle Academy Indonesia',
    image: '/projects/oracle.jpg',
    tags: ['2023', 'Award', 'Oracle', 'Certificate'],
    link: 'https://www.oracle.com/academy/',
    instagramUrl: 'https://www.instagram.com/oracleacademyid',
    type: 'award',
    year: '2023',
  },
];

const TAG_COLORS = {
  2019: 'bg-slate-700/60 text-slate-300 border-slate-600',
  2022: 'bg-slate-700/60 text-slate-300 border-slate-600',
  2023: 'bg-slate-700/60 text-slate-300 border-slate-600',
  Politeknik: 'bg-emerald-900/50 text-emerald-300 border-emerald-700',
  Certificate: 'bg-emerald-900/50 text-emerald-300 border-emerald-700',
  Award: 'bg-amber-900/50 text-amber-300 border-amber-700',
  Competition: 'bg-rose-900/50 text-rose-300 border-rose-700',
  Oracle: 'bg-rose-900/50 text-rose-300 border-rose-700',
  National: 'bg-blue-900/50 text-blue-300 border-blue-700',
  Dicoding: 'bg-blue-900/50 text-blue-300 border-blue-700',
  Seminar: 'bg-violet-900/50 text-violet-300 border-violet-700',
};

const TYPE_ICON = {
  competition: <Star size={14} className="text-amber-400" />,
  award: <Award size={14} className="text-amber-400" />,
  seminar: <BookOpen size={14} className="text-violet-400" />,
};

const TYPE_ACCENT = {
  competition: 'from-rose-500/20 via-transparent to-transparent',
  award: 'from-amber-500/20 via-transparent to-transparent',
  seminar: 'from-violet-500/20 via-transparent to-transparent',
};

const TYPE_GLOW = {
  competition: 'group-hover:shadow-rose-500/20',
  award: 'group-hover:shadow-amber-500/20',
  seminar: 'group-hover:shadow-violet-500/20',
};

const TYPE_BORDER = {
  competition: 'group-hover:border-rose-500/40',
  award: 'group-hover:border-amber-500/40',
  seminar: 'group-hover:border-violet-500/40',
};

function ExperienceCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-xl overflow-hidden border border-primary/30 bg-primary/10 backdrop-blur-sm
        transition-all duration-500 ease-out
        hover:shadow-2xl ${TYPE_GLOW[item.type]} ${TYPE_BORDER[item.type]}
        ${index % 2 === 1 ? 'md:mt-10' : ''}
      `}
      style={{
        animationDelay: `${index * 120}ms`,
        animation: 'fadeSlideUp 0.6s ease-out both',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient overlay top */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${TYPE_ACCENT[item.type]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10`}
      />

      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-white/5">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Year badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur border border-white/10 text-white/80 tracking-wider">
            {item.year}
          </span>
        </div>

        {/* Type icon badge */}
        {item.highlight && (
          <div className="absolute top-3 right-3 z-20">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 backdrop-blur border border-amber-500/30 text-amber-300">
              <Star size={11} fill="currentColor" /> Best Spirit
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.tags
            .filter((t) => !/^\d{4}$/.test(t))
            .map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full border
                  ${TAG_COLORS[tag] || 'bg-white/5 text-white/50 border-white/10'}`}
              >
                {tag}
              </span>
            ))}
        </div>

        {/* Title row */}
        <div className="flex items-center gap-2 mb-2">
          {TYPE_ICON[item.type]}
          <h3 className="text-lg font-bold text-text leading-tight">
            {item.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
          {item.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-muted">
          <div className="flex items-center gap-1 text-muted text-xs tracking-wide">
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </div>
          <div className="flex gap-3">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-muted hover:text-muted/50 hover:bg-muted/10 transition-all duration-200"
              title="Visit link"
            >
              <ExternalLink size={15} />
            </a>
            <a
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-muted hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-200"
              title="Instagram"
            >
              <Instagram size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MyExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{ animation: 'fadeSlideUp 0.5s ease-out both' }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-medium">
            Career & Achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-primary"> Experience </span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-sm leading-relaxed">
            A collection of seminars, competitions, and awards that have shaped
            my journey.
          </p>
        </div>

        {/* Cards grid — offset masonry feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-start">
          {exp.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Count summary */}
        <div
          className="mt-14 flex justify-center gap-10 text-center"
          style={{ animation: 'fadeSlideUp 0.7s ease-out 0.4s both' }}
        >
          {[
            { label: 'Years Active', value: '2+' }, 
            { label: 'Achievements', value: exp.length },
            { label: 'Categories', value: '3' },
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-color-text">{value}</div>
              <div className="text-xs text-color-muted uppercase tracking-widest mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};
