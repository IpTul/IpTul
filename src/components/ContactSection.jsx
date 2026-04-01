import { Instagram, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const DiscordIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
);

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "lthfrhmn21@gmail.com",
    href: "mailto:lthfrhmn21@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Samarinda, Kalimantan Timur, Indonesia",
    href: "https://maps.google.com/?q=Samarinda,Kalimantan+Timur",
  },
];

const SOCIALS = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/m-luthfi-rahman",
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30",
  },
  {
    icon: Twitter,
    href: "https://x.com/iptulonlyone",
    label: "Twitter / X",
    color: "hover:text-sky-400 hover:bg-sky-400/10 hover:border-sky-400/30",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/tulliptull",
    label: "Instagram",
    color: "hover:text-pink-400 hover:bg-pink-400/10 hover:border-pink-400/30",
  },
  {
    icon: DiscordIcon,
    href: "https://discord.com/users/287926737642192907",
    label: "Discord",
    color: "hover:text-purple-400 hover:bg-purple-400/10 hover:border-purple-400/30",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_n2n8ol5", "template_gz9x6y8", e.target, "rv7vE9MS-i1HFiCzl")
      .then(
        () => {
          toast({ title: "Message sent! 🎉", description: "I'll get back to you soon." });
          e.target.reset();
          setIsSubmitting(false);
        },
        () => {
          toast({ title: "Error", description: "Failed to send message. Try emailing directly." });
          setIsSubmitting(false);
        }
      );
  };

  const inputClass = (field) =>
    cn(
      "w-full px-4 py-3 rounded-xl border bg-background/50 text-foreground placeholder:text-muted-foreground/40",
      "transition-all duration-200 outline-none text-sm",
      focused === field
        ? "border-primary ring-2 ring-primary/20"
        : "border-border hover:border-border/80"
    );

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Header */}
        <div className="text-center mb-14" style={{ animation: "fadeSlideUp 0.5s ease-out both" }}>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/50 mb-3 font-medium">
            Let's talk
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out —
            I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

          {/* ── Left panel ── */}
          <div
            className="md:col-span-2 space-y-6"
            style={{ animation: "fadeSlideUp 0.5s ease-out 0.1s both" }}
          >
            {/* Contact info cards */}
            <div className="space-y-3">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card
                    hover:border-primary/30 hover:bg-primary/5 group transition-all duration-200"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground/60 uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-foreground truncate">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground/40 uppercase tracking-widest">Socials</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border",
                    "text-muted-foreground text-sm transition-all duration-200",
                    color
                  )}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <p className="text-xs text-emerald-400 font-medium">
                Available for freelance & collaboration
              </p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            className="md:col-span-3 bg-card border border-border rounded-2xl p-7 shadow-xl shadow-black/5"
            style={{ animation: "fadeSlideUp 0.5s ease-out 0.2s both" }}
          >
            <h3 className="text-xl font-bold text-foreground mb-1">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">
              I usually reply within 24 hours.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Muhammad Luthfi..."
                    className={inputClass("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="iptul@gmail.com"
                    className={inputClass("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                  className={cn(inputClass("message"), "resize-none")}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm",
                  "transition-all duration-200",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
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