import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  LoadDots,
  LoadDot,
  MessageCard,
  Confirmation,
  BackToHome,
} from "./style";
const TypeWriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return <span>{currentText}</span>;
};

export const ContactSuccess = () => {
  const [timeStamp, setTimeStamp] = useState({
    time: new Date().toLocaleTimeString(),
    newTime: "",
  });
  useEffect(() => {}, []);
  const setNewTimeStamp = () => {
    setTimeStamp((prevState) => ({
      ...prevState,
      newTime: new Date().toLocaleTimeString(),
    }));
  };
  return (
    <Container>
      <MessageCard>
        <div>
          {timeStamp.time}:
          <TypeWriter text=" Sending transmission now" delay={65} />
          <br />
          <LoadDots>
            <LoadDot>.</LoadDot>
            <LoadDot>.</LoadDot>
            <LoadDot>.</LoadDot>
          </LoadDots>
          <Confirmation onAnimationEnd={setNewTimeStamp}>
            {timeStamp.newTime}: Transmission sent.
          </Confirmation>
        </div>
      </MessageCard>
      <BackToHome>
        <Link to="/">Back to Home</Link>
      </BackToHome>
    </Container>
  );
};
