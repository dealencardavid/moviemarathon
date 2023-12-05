import Button from "./Button";
import smallImg from "../assets/mockup/mobile-mockup-small.svg";
import bigImg from "../assets/mockup/devices.svg";
import {
  HiOutlineTrophy,
  HiOutlineHeart,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import Section from "./Section";
import SupportParagraph from "./SupportParagraph";

const features = [
  {
    title: "Unique curation score",
    description:
      "Each marathon will receive a curation score based on your experience, so you can rank your creations.",
    icon: HiOutlineTrophy,
  },
  {
    title: "There are no bad movies",
    description:
      "Every movie can hit the bullseye when it's handpicked for the perfect marathon and paired up with its ideal film buddies.",
    icon: HiOutlineHeart,
  },
  {
    title: "Unleash your creativity",
    description:
      "Discover the artistry of blending movies together, crafting diverse movie marathons that resonate with unique themes and evoke distinct emotions.",
    icon: HiOutlineLightBulb,
  },
];

function MobileFeatures() {
  return (
    <Section>
      <div className="w-full flex flex-col md:flex-row gap-8 md:border-b md:border-stone-200 relative">
        <div className="flex flex-col justify-center items-stretch gap-8 md:items-start md:flex-1">
          <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-start">
            <h2 className="text-white text-4xl font-semibold text-center md:text-start">
              Your film diary with a twist
            </h2>
            <SupportParagraph alignment="left">
              Here, within MovieMarathon, we are not that interested in rating
              movies individually. Rather, we focus on how good is the
              experience of a group of films together!
            </SupportParagraph>
          </div>
          <Button type="primary" size="sm" to="login">
            Create your account
          </Button>
        </div>

        <img
          className="object-none z-10 object-top h-[472px] min-w-[472px] hidden md:flex md:flex-1 md:self-end"
          src={bigImg}
        />
      </div>
      <img src={smallImg} className="md:hidden" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div className="flex flex-col gap-5" key={index}>
              <div className="bg-stone-800 flex items-center justify-center p-4 w-fit rounded-full">
                <Icon className="text-3xl text-main-500" />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-stone-50 font-semibold text-lg">
                  {feature.title}
                </p>
                <p className="text-stone-200 font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default MobileFeatures;
