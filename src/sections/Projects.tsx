import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { portfolioProjects } from "../../profile.config";

export const ProjectsSection = ({ id }: { id: string }) => {
  return (
    <section className="pb-16 lg:py-24" id={id}>
      <div className="container">
        <SectionHeader
          heading1="Real-world Results"
          heading2="Featured Projects"
          paragraph="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col gap-16 mt-10 md:mt-12">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="
                px-8 pt-8 pb-6
                md:pt-10 md:px-10
                lg:px-16 lg:pt-14
                sticky
                min-h-[420px]
                border border-white/30  
                rounded-2xl                 
              "
              style={{
                top: `calc(${64 + index * 36}px)`,
              }}
            >
              <div
                className="
                  lg:grid 
                  lg:grid-cols-2 
                  lg:gap-16 
                  items-center
                  min-h-[320px]
                "
              >
                <div className="flex flex-col justify-center lg:pb-4">
                  <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl lg:max-w-sm mt-3">
                    {project.title}
                  </h3>

                  <hr className="border border-white/30 mt-4" />

                  <ul className="mt-4 flex flex-col gap-3">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="inline-flex gap-2 text-white/50 font-light text-sm md:text-base"
                      >
                        <CheckIcon className="size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 rounded-xl w-full md:w-auto md:px-6 mt-6 font-semibold inline-flex items-center justify-center gap-2">
                      <span>{project.linkText}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="relative mt-6 lg:mt-0 flex justify-center">
                  <div
                    className="
                      absolute -inset-1
                      rounded-xl            
                      border border-white/30
                      pointer-events-none
                    "
                  />

                  <Image
                    src={project.image}
                    alt={project.title}
                    className="
                      relative
                      w-full 
                      h-48 md:h-64 
                      lg:h-[320px] xl:h-[360px]
                      object-cover 
                      rounded-xl             
                      border border-white/30        
                    "
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
