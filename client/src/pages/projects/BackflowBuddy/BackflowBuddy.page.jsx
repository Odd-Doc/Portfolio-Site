import {
  AnchorText,
  Container,
  Content,
  Header,
  ImagesGroup,
  NewTabLink,
  StackingCard,
  StackingDeck,
} from "./style";

import bb1 from "../../../assets/images/bb-mainmenu.png";
import bb2 from "../../../assets/images/bb-rp1.png";
import bb3 from "../../../assets/images/bb-rp2.png";
import bb4 from "../../../assets/images/bb-quiz.png";
import { Footer } from "../../../components/footer/footer";

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
    <Container>
      <Header>
        <h1>Backflow Buddy</h1>
        <p>Backflow Assembly Simulator And Licensing Exam Prep</p>
      </Header>
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

      <Content>
        <p>A labor of love.</p>
        This was my first personal project that I ever published. The idea for
        this app was the very reason I set out on this journey learning to code,
        back in 2021. Having a full time job (and two kids born along the way),
        meant going at it at night and weekends. <p></p>
        Having no idea where to start, I began working my way down the
        FreeCodeCamp curriculum. After completing most of the curriculum by May
        of 2022, I realised that this type of app could not be created using web
        tech, at least not at that time. I switched gears and dove head first
        into Unity and C#. My goal was to solo the entire project, from soup to
        nuts. I created each and every asset from scratch, except the water -
        see Zibra Liquids. It took me a little over 2 years to learn Unity, C#,
        Blender (3D modeling, topology, textures, shaders etc.) and push though
        all of the post build production hurdles to eventually self publish this
        application.
      </Content>
      <a
        className="visit-app-store"
        href="https://apps.apple.com/us/app/backflow-buddy"
      >
        <NewTabLink className="material-symbols-outlined">
          open_in_new
          <AnchorText className="app-link">View on the App Store</AnchorText>
        </NewTabLink>
      </a>

      <Footer />
    </Container>
  );
};
