import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { pages, socials } from "../utils/lists";
import logo from "../assets/logos/moviemarathon.png";

function Footer() {
  return (
    <footer className="px-4 py-12 md:px-8 lg:px-28 lg:py-16 font-body bg-stone-900">
      <div className="container  mx-auto flex flex-col justify-between gap-8 md:gap-12 lg:gap-16">
        <div className="hidden md:flex flex-col gap-8 flex-1 justify-center">
          <div className="flex flex-col gap-3 items-center justify-center">
            <SectionHeading overline="feeling creative?">
              Build your first marathon
            </SectionHeading>
            <p className="text-stone-50 font-normal text-base">
              MovieMarathon uses the movie data from OMDb
            </p>
          </div>
          <div className="flex gap-3 items-stretch justify-center">
            <Button type="primary" size="sm" to="login">
              Create account
            </Button>
            <Button type="outline" size="sm" to="login">
              Login
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-8 flex-1 justify-end md:hidden">
          <ul className="flex flex-col gap-4 text-stone-200 text-base font-medium">
            {pages.map((page, index) => {
              return (
                <li key={index}>
                  <Button to={page.to} type="nav">
                    {page.name}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center pt-6 border-t border-stone-200 md:flex-row md:justify-between">
          <a href="#" className="flex gap-1 items-end md:hidden">
            <img alt="MovieMarathon logo" src={logo} className=" h-8" />
            <span className="font-display text-base text-stone-50">
              MovieMarathon
            </span>
          </a>
          <p className="text-stone-200 text-sm font-normal">
            © 2023 MovieMarathon. All rights reserved.
          </p>
          <ul className="flex gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <li key={index}>
                  <Button href={social.link}>
                    <Icon />
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
