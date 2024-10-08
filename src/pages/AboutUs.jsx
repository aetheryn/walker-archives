import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "35% 60%",
        fontSize: "1.2vw",
        gap: "5%",
        margin: "2vw 0",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.8vw",
          }}
          src="https://images.squarespace-cdn.com/content/v1/6324802d2fb2bb196e51937d/4eb52c37-7138-4af7-ba6b-0e05666d296f/charleston-south-carolina-travel-guide48.jpg"
        ></img>
      </div>

      <div>
        <h2>About Us</h2>
        <p style={{ textAlign: "justify" }}>
          Walker Archives, established in early 2023 and situated in Charleston,
          South Carolina, preserves thousands of records containing tales passed
          down through generations, etched in ink or collective memory. Unlike
          typical archives, Walker Archives isn't open to the general public. We
          arrange exclusive visits tailored for small groups, creating a more
          personalized and enriched experience. Our team of experts guides these
          visits, bringing these tales to life. Imagine this: a meticulously
          designed journey through different worlds within our walls, each
          filled with fascinating stories, ready for you to explore. Our tales
          await those who seek timeless adventure.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
