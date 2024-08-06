import { Link, Outlet } from "react-router-dom";
import { ProgressBar, ProjectImageCard, SectionTitle } from "../styles";
import { Container, ProjectCard } from "./style";
import bb from "../../assets/images/bb-mainmenu.png";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeProvider } from "styled-components";
export const Projects = () => {
  const { ref, inView, entry } = useInView();

  const [isVisible, setIsVisible] = useState();
  const projectRef = useRef();
  const theme = {
    view: inView,
  };
  return (
    <ThemeProvider theme={theme}>
      <Container id="projects">
        <SectionTitle>
          <h3>Projects</h3>
        </SectionTitle>
        {/* <ProgressBar></ProgressBar> */}
        <ProjectCard ref={ref} to="/projects/backflowbuddy">
          <div className="project-title-wrapper">
            <div className="project-title">
              Backflow Device Testing Simulator
            </div>
            <div className="project-synop">
              interactive tool designed to help users prepare for state
              licensing exams.
            </div>
          </div>
        </ProjectCard>
      </Container>
    </ThemeProvider>
  );
};
