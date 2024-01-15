import her from "/src/assets/currentMarathon/her.svg";
import drivemycar from "/src/assets/currentMarathon/drivemycar.svg";
import beforesunrise from "/src/assets/currentMarathon/beforesunrise.svg";
import eternalsunshine from "/src/assets/currentMarathon/eternalsunshine.svg";
import amour from "/src/assets/currentMarathon/amour.svg";
import adele from "/src/assets/currentMarathon/adele.svg";
import lostintranslation from "/src/assets/currentMarathon/lostintranslation.svg";
// import callmebyyourname from "/src/assets/currentMarathon/callmebyyourname.svg";
// import marriagestory from "/src/assets/currentMarathon/marriagestory.svg";

const marathonApi = [
  {
    id: 1,
    title: "The last transformation of Mr. Bean",
    theme:
      "The definitive watchlist of all Mr.Bean's best moments on the screen",
    curationScore: 7.8,
    cohesionScore: 6.5,
    experienceScore: 7.8,
    movies: [
      {
        title: "Her",
        watched: true,
        poster: her,
        themeRelevanceScore: 8.7,
        enjoyabilityScore: 8.1,
      },
      {
        title: "Drive My Car",
        watched: true,
        poster: drivemycar,
        themeRelevanceScore: 8,
        enjoyabilityScore: 9.4,
      },
      {
        title: "Before Sunrise",
        watched: true,
        poster: beforesunrise,
        themeRelevanceScore: 6,
        enjoyabilityScore: 2.9,
      },
      {
        title: "Eternal Sunshine",
        watched: false,
        poster: eternalsunshine,
        themeRelevanceScore: null,
        enjoyabilityScore: null,
      },
      {
        title: "Amour",
        watched: false,
        poster: amour,
        themeRelevanceScore: null,
        enjoyabilityScore: null,
      },
    ],
  },
  {
    id: 2,
    title: "Cage Fest",
    theme: "The weirdest movies from Nicolas Cage",

    curationScore: 7.8,
    movies: [
      {
        title: "Her",
        watched: true,
        poster: her,
      },
      {
        title: "Drive My Car",
        watched: true,
        poster: drivemycar,
      },
      {
        title: "Before Sunrise",
        watched: true,
        poster: beforesunrise,
      },
      {
        title: "Eternal Sunshine",
        watched: false,
        poster: eternalsunshine,
      },
      {
        title: "Amour",
        watched: false,
        poster: amour,
      },
      {
        title: "Adele",
        watched: false,
        poster: adele,
      },
      {
        title: "Lost in Translation",
        watched: false,
        poster: lostintranslation,
      },
    ],
  },
  {
    id: 3,
    title: "The Lamour of Thamos",
    theme: "The Juustik of lopenstru of manuo",
    curationScore: 4.2,
    movies: [
      {
        title: "Her",
        watched: true,
        poster: her,
      },
      {
        title: "Drive My Car",
        watched: true,
        poster: drivemycar,
      },
      {
        title: "Before Sunrise",
        watched: true,
        poster: beforesunrise,
      },
      {
        title: "Amour",
        watched: false,
        poster: amour,
      },
      {
        title: "Adele",
        watched: false,
        poster: adele,
      },
      {
        title: "Lost in Translation",
        watched: false,
        poster: lostintranslation,
      },
    ],
  },
];

export default marathonApi;
