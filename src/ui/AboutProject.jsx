import Overline from "./Overline";

import avatar from "../assets/about-avatar.png";
import Section from "./Section";
import TechUsed from "./TechUsed";
import { socials } from "../utils/lists";
import Button from "./Button";

function AboutProject() {
  return (
    <Section light={true}>
      <div className=" max-w-[592px] flex flex-col items-center justify-center gap-3">
        <Overline>About this project</Overline>
        <h1 className="font-display font-semibold text-center text-white text-5xl">
          A frontend developer&apos;s take on film marathons
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 gap-4 items-center justify-center place-items-center md:grid-cols-[180px_1fr] md:place-items-start md:gap-16 lg:grid-cols-[400px_1fr]">
        <p className="text-stone-50 md:text-lg text-base text-center md:text-left md:col-start-2">
          As a movie enthusiast, I&apos;ve always enjoyed curating themed movie
          marathons. When I embarked on learning frontend development, I knew
          that one of my initial projects would revolve around this hobby. With
          MovieMarathon, my aim was to create an application and website
          inspired by the visual elements experienced during movie watching: the
          ambient low light , the lettering from movie posters , and the
          containers defined by the screens.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-1 md:w-[180px] lg:grid-cols-2 lg:w-[400px] gap-6 md:col-start-1 md:row-start-1">
          <img alt="Profile picture" src={avatar} className=" rounded-md" />
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-stone-50 text-base font-medium text-left">
                David de Alencar
              </p>
              <p className="text-stone-400 text-sm text-left">
                Frontend Developer
              </p>
            </div>
            <p className="text-stone-200 text-sm">
              Hello! I&apos;m a react developer with background in the
              performing arts. Want to work together?
            </p>
            <ul className="flex gap-4 text-stone-200">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <li key={index}>
                    <Button href={social.link}>
                      <Icon className="text-2xl" />
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <TechUsed />
    </Section>
  );
}

export default AboutProject;
