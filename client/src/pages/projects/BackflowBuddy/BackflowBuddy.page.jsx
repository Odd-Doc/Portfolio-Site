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

import bb1 from "../../../assets/images/bb-mainmenu.png";
import bb2 from "../../../assets/images/bb-rp1.png";
import bb3 from "../../../assets/images/bb-rp2.png";
import bb4 from "../../../assets/images/bb-quiz.png";
import bbIcon from "../../../assets/images/bb-icon.png";
import appStoreBadge from "../../../assets/images/dl-AppStore-white.svg";
import { Navbar } from "./style";
import { Logo } from "../../../components/navbar/style";
import { HashLink } from "react-router-hash-link";
import { scrollTo } from "../../../components/footer/footer";
import { Link } from "react-router-dom";
const ImagePool = [bb1, bb2, bb3, bb4];
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

export const BackflowBuddy = () => {
  return (
    <Container id="#top">
      <Navbar>
        <Logo to="/">GP_</Logo>
      </Navbar>
      <Header>
        <img className="bb-icon" src={bbIcon} />
        <h1>Backflow Buddy 🚰</h1>
        <p>Backflow Assembly Simulator And Licensing Exam Prep</p>
        <Link
          className="git-hub-link--header"
          to="https://github.com/Odd-Doc/BackflowBuddy"
        >
          View on GitHub
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
        <Link
          className="app-store-badge"
          to="https://apps.apple.com/us/app/backflow-buddy/id6475203858"
        >
          <img src={appStoreBadge} alt="App Store Badge" />
        </Link>
      </Header>
      <Main>
        <StackingDeck>
          <Deck
            cards={[
              { source: bb1, id: "b1" },
              { source: bb2, id: "b2" },
              { source: bb3, id: "b3" },
              { source: bb4, id: "bb4" },
            ]}
          />
        </StackingDeck>
      </Main>

      <Content>
        <p>A labor of love.</p>
        This was my first personal project that I ever published. The idea for
        this app was the very reason I set out on this journey learning to code,
        back in 2021. Having a full time job (and two kids born along the way),
        meant digging deep every night and every weekend. <p></p>
        Having no idea where to start, I began working my way down the
        FreeCodeCamp curriculum. After completing most of the curriculum by May
        of 2022, I realized that this type of app could not be created using web
        tech, at least not at that time. I switched gears and dove head first
        into Unity and C#. My goal was to solo the entire project, from soup to
        nuts. I created each and every asset from scratch, except the water -
        see Zibra Liquids. It took me a little over 2 years to learn Unity, C#,
        Blender (3D modeling, topology, textures, shaders etc.) and push through
        all of the post build production hurdles to eventually self publish this
        application.
      </Content>

      <BackToTop>
        <HashLink to="#top" scroll={scrollTo}>
          Back to top
        </HashLink>
      </BackToTop>
    </Container>
  );
};
