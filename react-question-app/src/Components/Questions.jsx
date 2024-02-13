import { useEffect } from "react";

function Questions({ question, options, media, onNext, showOptions }) {
  /* useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 20000);

    return () => clearTimeout(timer);
  }, [onNext]);
*/

  return (
    <div className="content">
      <h3>{question}</h3>
      {media && <img src={media} alt="media" />}
      <div className="options">
        {showOptions &&
          options.map((option, index) => (
            <button key={index} onClick={() => onNext(option)}>
              {option}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Questions;
