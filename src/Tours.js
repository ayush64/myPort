import React from "react";

const Tours = () => {
  return (
    <>
      <a
        className="project"
        href="https://infallible-mclean-b61e06.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <article>
          <div
            className="gatsby-image-wrapper"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div
              style={{ width: "100%", paddingBottom: "77.30000000000001%" }}
            ></div>
            <img
              src="/Tours.png"
              alt="Tours"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                opacity: "1",
                transitionDelay: "500ms",
              }}
            />
          </div>
          <footer>
            <h4>Tours</h4>
          </footer>
        </article>
      </a>
    </>
  );
};

export default Tours;
