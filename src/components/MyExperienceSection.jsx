import { ArrowRight, ExternalLink, Github, Instagram } from "lucide-react";

const exp = [
  {
    id: 1,
    title: "Dicoding",
    description: "BEKRAF Developer Day 2019 - Samarinda Diselenggarakan oleh Kementrian Ekonomi Kreatif/ Badan Ekonomi Kreatif Republik Indonesia",
    image: "https://d17ivq9b7rppb3.cloudfront.net/original/event/bekraf_developer_day_2019_samarinda_logo_130819092619.png",
    tags: ["2019", "Dicoding", "Seminar", "Certificate"],
    link: "https://www.dicoding.com/events/2489",
    instagrambUrl: "https://www.instagram.com/dicoding",
  },
  {
    id: 2,
    title: "KMIPN IV",
    description: "Kompetensi Mahasiswa Bidang Informatika Politeknik Nasional kategori Animasi mendapat juara Best Spirit. Bertugas sebagai Video Editor (Finishing)",
    image: "/projects/KMIPN.jpeg",
    tags: ["2022", "Competition", "National", "Politeknik", "Certificate"],
    link: "https://www.polibatam.ac.id/events/politeknik-negeri-batam-tuan-rumah-kmipn-iv-tahun-2022",
    instagrambUrl: "https://www.instagram.com/kmipn2022",
  },
];

export const MyExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Experience </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my experience or achievements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-0">
          {exp.map((exp, key) => (
            <div
              key={key}
              className="md:w-112 group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className=" overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="md:w-full md:h-112 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-1 text-primary"> {exp.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {exp.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={exp.link}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={exp.instagrambUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}