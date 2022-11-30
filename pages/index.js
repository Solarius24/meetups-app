import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Krakow_Rynek_Glowny_panorama_2.jpg/1024px-Krakow_Rynek_Glowny_panorama_2.jpg",
    address: "Cracov",
    description: "The First Meetup Point",
  },
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Krakow_Rynek_Glowny_panorama_2.jpg/1024px-Krakow_Rynek_Glowny_panorama_2.jpg",
    address: "Cracov",
    description: "The First Meetup Point",
  },
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Krakow_Rynek_Glowny_panorama_2.jpg/1024px-Krakow_Rynek_Glowny_panorama_2.jpg",
    address: "Cracov",
    description: "The First Meetup Point",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
