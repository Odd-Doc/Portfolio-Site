import {
  AnchorText,
  Container,
  Content,
  Header,
  StackingCard,
  StackingDeck,
  Main,
  FooterLink,
  BackToTop,
} from "./style";

import franksLanding from "../../../assets/images/franks-landing.png";

import bbIcon from "../../../assets/images/bb-icon.png";
import appStoreBadge from "../../../assets/images/dl-AppStore-white.svg";
import { Navbar } from "./style";
import { Logo } from "../../../components/navbar/style";
import { HashLink } from "react-router-hash-link";
import { scrollTo } from "../../../components/footer/footer";
import { Link } from "react-router-dom";
import TechUsed from "../../../components/TechUsed/TechUsed";
const ImagePool = [franksLanding];
const Deck = ({ cards }) => {
  return (
    <>
      {cards.map((card) => {
        return (
          <StackingCard key={card.id}>
            <img src={card.source} />
          </StackingCard>
        );
      })}
    </>
  );
};

export const DeviceSentinel = () => {
  return (
    <Container id="#top">
      <Navbar>
        <Logo to="/">GP_</Logo>
      </Navbar>
      <Header>
        <h1>Cross Connection Compliance 🔎</h1>
        <p>A cross-platform compliance engine</p>

        <Link
          className="git-hub-link--header"
          to="https://github.com/Odd-Doc/bb-trax"
        >
          View on GitHub
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
      </Header>
      <Main>
        {/* <a href="https://franksrelocation.com/">
          <StackingDeck>
            <Deck cards={[{ source: franksLanding, id: "franks-landing" }]} />
          </StackingDeck>
        </a> */}

        {/* <video
          autoPlay
          loop
          muted
          width="100%"
          src="/src/assets/video/2024-10-04 15-04-06.mp4"
        >
          A man moving his hands away from his forehead sideways, in a
          mind-explosion gesture. An overlaid animation enforces the explosion
          character.
        </video> */}
        <div style={{ paddingTop: "100px" }}>
          <video
            style={{ borderRadius: 12 }}
            controls="controls"
            width="100%"
            name="Backflow-Sentinel-Preview"
            autoPlay
            muted
            src="/src/assets/video/2024-10-04 15-04-06.mp4"
          />
        </div>
      </Main>

      <Content>
        <div className="tech-used">
          <TechUsed used={["React Native", "Expo", "TypeScript"]} />
        </div>
        <div style={{ padding: 100 }}>
          <h2>Project Overview 📓:</h2> A robust, cross-platform backflow
          compliance application. My aim is to enhance and simplify device and
          facility management while providing compliance tracking capabilities.
          The app is designed to streamline processes, providing users with
          real-time insights, analytics, and more.
          <br />
          <h3>Key Features 🔑: </h3>
          <h4>Currently Implemented ✅</h4>
          <p>
            -{" "}
            <span style={{ textDecoration: "underline" }}>
              Search Engine for Your Devices and Facilities:
            </span>{" "}
            A powerful search functionality that allows users to quickly locate
            and access information on devices and facilities. From device
            testing status to historical compliance data, the feature provides
            real-time, efficient search results. Users can search with any
            prompt related to the device or facility record.
            <p>
              -{" "}
              <span style={{ textDecoration: "underline" }}>
                Facility Backflow Compliance Stats/Graphs:
              </span>{" "}
              A detailed compliance tracking system that offers compliance data
              and graphical representations. Users can easily monitor regulatory
              adherence through intuitive stats and graphs.
            </p>
            <h4>Future Implementations 🛠️</h4>
            <p>
              -{" "}
              <span style={{ textDecoration: "underline" }}>
                Device Geolocation Services:
              </span>{" "}
              Enables testers and users to pinpoint the exact physical location
              of devices. This feature allows backflow testers and water
              authorities to mark device locations for future reference, aiding
              in troubleshooting and ongoing facility management, while
              providing users with an accurate map of all connected devices.
            </p>
            <p>
              -{" "}
              <span style={{ textDecoration: "underline" }}>
                Backflow Test Reports:
              </span>{" "}
              A field reporting tool that enables users to fill out and submit
              backflow test reports directly from the app. Users can also
              generate test report exports, making it easier to document
              compliance and share reports with customers and relevant
              authorities.
            </p>
          </p>
        </div>
      </Content>

      <BackToTop>
        <HashLink to="#top" scroll={scrollTo}>
          Back to top
        </HashLink>
      </BackToTop>
    </Container>
  );
};
