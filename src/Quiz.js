import React from "react";

const Quiz = () => {
  return (
    <>
      <a
        className="project"
        href="https://react-quiz-starter.netlify.app/"
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
              src="/quiz.png"
              alt="Quiz"
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
            <h4>Quiz</h4>
          </footer>
        </article>
      </a>
    </>
  );
};

export default Quiz;
