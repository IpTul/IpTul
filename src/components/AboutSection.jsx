import { User, Map, PinIcon, School, School2, Briefcase } from "lucide-react";

export const AboutSection = () => {
	return (
		<section id="about" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					About
					<span className="text-primary"> Me</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
						<p className="text-muted-foreground">
							I am very enthusiastic about exploring and learning about
							technology that continues to evolve, and applying it to create
							creative solutions for problems around us.
						</p>
						<p className="text-muted-foreground">
							With over 5 years experience in Web development, I specialize in
							creating responsive, accessible, and performant web applications
							using modern technologies.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
							<a href="#contact" className="cosmic-button">
								Get In Touch
							</a>

							{/* <a
								href="#"
								className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
							>
								Download CV
							</a> */}
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6">
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<School className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">College</h4>
									<p className="text-muted-foreground">
										Studied at Samarinda State Polytechnic 2021 - 2025, majoring in D4 Information Technology. Graduated with honors.
									</p>
								</div>
							</div>
						</div>
						{/* <div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Code className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg"> Web Development</h4>
									<p className="text-muted-foreground">
										Creating responsive websites and web applications with
										modern frameworks.
									</p>
								</div>
							</div> 
							<img src="/projects/IpTul.jpg" alt="IpTul" />
						</div> */}
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<School2 className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">Senior High School</h4>
									<p className="text-muted-foreground">Studied at SMK Negeri 7 Samarinda 2018 - 2021, majoring in Software Engineering.</p>
								</div>
							</div>
						</div>
						{/* <div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Briefcase className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg"> Web Development</h4>
									<p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};
