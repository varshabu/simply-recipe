import React from 'react';
import styled from 'styled-components';
import Spacings from '../tokens/Spacings';
import Image from 'next/image';
import backgroundImage from '../public/images/trivia-bg.jpg';
import { GetServerSideProps } from 'next/types';
import MediaQueries from '../tokens/MediaQueries';

const Trivia = ({ data }: any) => {
  return (
    <div>
      <BgWrapper>
        <Image
          alt="Background Image"
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </BgWrapper>
      <CardWrapper>
        <CardContainer>
          <CardAfter>
            <StyledH2>Food Trivia!</StyledH2>
            <StyledJoke>{data}</StyledJoke>
          </CardAfter>
        </CardContainer>
      </CardWrapper>
    </div>
  );
};

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

const StyledH2 = styled.h1`
  margin: ${Spacings.medium} 0;
`;

const StyledJoke = styled.div`
  font-size: 18px;
  margin-bottom: ${Spacings.medium};
`;

export default Trivia;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `${process.env.FOOD_API}/food/trivia/random?apiKey=${process.env.FOOD_API_KEY}`,
  );
  const data = await res.json();

  return {
    props: {
      data: data.text,
    },
  };
};
