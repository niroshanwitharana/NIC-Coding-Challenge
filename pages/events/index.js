import * as React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import EventCard from "../../components/EventCard";

const apiKey = process.env.MY_API_KEY;
export const getStaticProps = async () => {
  // Fetch data from an API
  const res = await fetch(
    `https://staging.national-ice-centre.com/api/events/read?token=${apiKey}`
  );
  const data = await res.json();

  // Check if the data object contains an events array
  const eventsArray = data.events || [];

  // Select the first 10 events from the events array
  const selectedData = eventsArray.slice(0, 18);
  console.log(selectedData);

  // Pass the data as props to the page component
  return {
    props: { events: selectedData },
  };
};

const events = ({ events }) => {
  return (
    <>
      {/* Add a custom title for Events page */}
      <Head>
        <title>Nic | Events</title>
        <meta name="keywords" content="nic-events" />
      </Head>

      {/* Use module.css for scoped styling */}
      <div className={styles.title}>
        <h1> Upcoming Events</h1>
        {events && events.map((event, index) => (
          <div key={`${event.name}`} className={styles.card}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </>
  );
};

export default events;
