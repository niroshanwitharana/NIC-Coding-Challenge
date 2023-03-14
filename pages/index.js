import * as React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import EventCard from "../components/EventCard";

export const getStaticProps = async () => {
  // Fetch data from an API
  const res = await fetch(
    "https://staging.national-ice-centre.com/api/events/read?token=5fda2276-bbc3-4a7f-8c82-f4291abb1cdf"
  );
  const data = await res.json();

  // Check if the data object contains an events array
  const eventsArray = data.events || [];

  // Select the first 10 events from the events array
  const selectedData = eventsArray.slice(0, 6);
  console.log(selectedData);

  // Pass the data as props to the page component
  return {
    props: { events: selectedData },
  };
};

const Home = ({ events }) => {
  return (
    <>
      {/* Add a custom title for home page */}
      <Head>
        <title>Nic | Home</title>
        <meta name="keywords" content="nic-events" />
      </Head>

      {/* Use module.css for scoped styling */}
      <div className={styles.title}>
        <h2> What's On</h2>
        {events &&
          events.map((event, index) => (
            <div key={`${event.name}`} className={styles.card}>
              <EventCard event={event} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
