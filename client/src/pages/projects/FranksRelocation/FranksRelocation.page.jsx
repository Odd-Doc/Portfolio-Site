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

export const FranksRelocation = () => {
  return (
    <Container id="#top">
      <Navbar>
        <Logo to="/">GP_</Logo>
      </Navbar>
      <Header>
        <h1>Franks Relocation 🚚</h1>
        <p>A website for a local moving company in my community</p>
        <Link
          className="git-hub-link--header"
          to="https://github.com/Odd-Doc/franks-moving-service"
        >
          View on GitHub
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
      </Header>
      <Main>
        <a href="https://franksrelocation.com/">
          <StackingDeck>
            <Deck cards={[{ source: franksLanding, id: "franks-landing" }]} />
          </StackingDeck>
        </a>
      </Main>

      <Content>
        <div className="tech-used">
          <TechUsed used={["React", "Styled-Components"]} />
        </div>
        <div>
          I designed and developed a website for a local moving company in my
          community to enhance its online presence and attract more customers.
          The website features a user-friendly interface, showcasing the
          company's services, rates, and customer testimonials. I included
          essential sections like "About Us," "Services," and an online quote
          request feature using EmailJS to streamline the process for potential
          clients. Additionally, the site is optimized for mobile devices.
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
