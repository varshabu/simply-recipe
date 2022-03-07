import type { NextPage } from 'next';
import styled from 'styled-components';
import homeImage from '../public/images/home-bg.jpg';
import Image from 'next/image';
import Spacings from '../tokens/Spacings';
import MediaQueries from '../tokens/MediaQueries';

const Home: NextPage = () => {
  return (
    <div>
      <BgWrapper>
        <Image
          alt="Background Image"
          src={homeImage}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </BgWrapper>
      <CardWrapper>
        <CardContainer>
          <CardAfter>
            <h1>Simply Recipes</h1>
            <StyledH3>
              Simply Recipes is here to help you cook delicious meals with less
              stress and more joy. We offer recipes and cooking advice for home
              cooks, by home cooks.
            </StyledH3>
          </CardAfter>
        </CardContainer>
      </CardWrapper>
    </div>
  );
};

export default Home;

const BgWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  opacity: 0.8;
`;

const CardWrapper = styled.div`
  margin: 0;
  text-align: center;
  height: calc(100vh - 6rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  margin: auto;
  padding: ${Spacings.large};
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
  min-height: 20vh;
  ${MediaQueries.mobile} {
    width: 85vw;
  }
  ${MediaQueries.desktop} {
    width: 50vw;
  }
`;

const CardAfter = styled.div`
  &::after {
    content: '';
    display: block;
    border: 2px solid #ffd977;
    height: calc(100% - 2rem);
    width: calc(100% - 2rem);
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
`;

const StyledH3 = styled.p`
  margin: ${Spacings.medium} 0;
  font-size: 18px;
`;
