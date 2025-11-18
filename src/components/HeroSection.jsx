import { ArrowDown } from "lucide-react";
import { User, Map, PinIcon, School, School2, Briefcase } from "lucide-react";

export const HeroSection = () => {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex flex-col items-center justify-center px-4"
		>
			<div className="container max-w-8xl mx-auto text-left z-10">
				<div className="space-y-6">
					{/* <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
						<span className="opacity-0 animate-fade-in">Hi, I'm </span>
						<span className="text-primary opacity-0 animate-fade-in-delay-1">
							IpTul{" "}
						</span>
						<span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
							A Junior Programmer
						</span>
					</h1>
					<p className="text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
						My real name is Muhammad Luthfi Rahman or known as IpTul, you can
						just call me bae if you want tho *flush or whatever as long as you
						happy, i guess-
					</p>
					<div className="pt-4 opacity-0 animate-fade-in-delay-4">
						<a href="#projects" className="cosmic-button ">
							View My Work
						</a>
					</div> */}

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h3 className="text-3xl md:text-4xl font-bold tracking-tight">
								<span className="opacity-0 animate-fade-in">Hi, I'm </span>
								<span className="text-primary opacity-0 animate-fade-in-delay-1">IpTul</span>
								<span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">A Junior Programmer</span>
							</h3>
							<p className="text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
								My real name is Muhammad Luthfi Rahman or known as IpTul, you can
								just call me bae if you want tho *flush or whatever as long as you
								happy, i guess-.
							</p>
							<div className="pt-4 opacity-0 animate-fade-in-delay-4">
								<a href="#projects" className="cosmic-button ">
									View My Work
								</a>
							</div>
						</div>

						<div className="opacity-0 animate-fade-in-delay-4">
							<img src="/projects/IpTul.jpg" alt="IpTul" className="w-100 gradient-border left-0 md:left-20" />
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
				<span className="text-sm text-muted-foreground mb-2"> Scroll </span>
				<ArrowDown className="h-5 w-text text-primary" />
			</div>
		</section>
	);
};
