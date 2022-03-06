import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import Spacings from '../../tokens/Spacings';
import { FaRegClock, FaUserFriends } from 'react-icons/fa';
import RecipeStep from '../../components/RecipeStep';

const RecipeDtails = ({ data }: any) => {
  return (
    <RecipePage>
      <RecipeHeroSection>
        <Image
          src={data.image}
          alt={data.title}
          width={5000}
          height={3000}
          objectFit="contain"
        />
        <RecipeDetails>
          <StyledTitle>{data.title}</StyledTitle>
          <DishType>
            <StyledDishTypeTitle>Dish Type: </StyledDishTypeTitle>
            <div>
              {data.dishTypes &&
                data.dishTypes.map((type: string) => {
                  return <StyledTag key={type}>{type}</StyledTag>;
                })}
            </div>
          </DishType>
          <StyledDescription>{parse(data.summary)}</StyledDescription>
          <RecipeIconsContainer>
            <article>
              <FaRegClock />
              <h4>Cook Time</h4>
              <p>{data.readyInMinutes} min.</p>
            </article>
            <article>
              <FaUserFriends />
              <h4>Serving</h4>
              <p>{data.servings}</p>
            </article>
          </RecipeIconsContainer>
        </RecipeDetails>
      </RecipeHeroSection>
      <RecipeContentSection>
        <article>
          <InstructionsHeader>Instructions</InstructionsHeader>
          {data.analyzedInstructions.length !== 0 &&
            data.analyzedInstructions[0].steps.map((step: any) => {
              return <RecipeStep key={step.number} step={step} />;
            })}
        </article>
        <article>
          <div>
            <InstructionsHeader>Ingredients</InstructionsHeader>
            <div>
              {data.extendedIngredients &&
                data.extendedIngredients.map((item: any) => {
                  return (
                    <IngredientItem key={item.id}>{item.name}</IngredientItem>
                  );
                })}
            </div>
          </div>
        </article>
      </RecipeContentSection>
    </RecipePage>
  );
};

export default RecipeDtails;

const RecipePage = styled.div`
  padding: 0 ${Spacings.xxxxLarge};
  padding-top: ${Spacings.xLarge};
`;

const RecipeHeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 3rem;
`;

const StyledTitle = styled.h2`
  margin: 0 0 ${Spacings.large};
`;

const DishType = styled.div`
  display: flex;
  margin-bottom: ${Spacings.large};
`;

const StyledDishTypeTitle = styled.h4`
  margin-right: ${Spacings.small};
`;

const StyledTag = styled.span`
  background-color: #ffd977;
  margin-right: ${Spacings.xSmall};
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: capitalize;
`;

const StyledDescription = styled.div`
  font-size: 16px;
`;

const RecipeDetails = styled.article``;

const RecipeIconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${Spacings.xxxLarge};
  margin: ${Spacings.large} 0;
  text-align: center;

  h4 {
    margin: ${Spacings.xSmall} 0;
  }

  p {
    margin: 0;
  }
`;

const RecipeContentSection = styled.section`
  display: grid;
  gap: 3rem;
  grid-template-columns: 2fr 1fr;
`;

const InstructionsHeader = styled.h2`
  margin-bottom: ${Spacings.large};
`;

const IngredientItem = styled.div`
  margin-bottom: ${Spacings.small};
`;

export const getStaticPaths = async () => {
  const res = await fetch(
    `${process.env.FOOD_API}/recipes/complexSearch?number=20&apiKey=${process.env.FOOD_API_KEY}`,
  );
  const data = await res.json();

  // const paths = data.results.map((post: { id: any }) => {
  //   return {
  //     params: {
  //       id: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths:
      data.results.map((post: { id: any }) => {
        return {
          params: {
            id: `${post.id}`,
          },
        };
      }) || [],
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: any }) => {
  const { params } = context;
  const res = await fetch(
    `${process.env.FOOD_API}/recipes/${params.id}/information?number=20&apiKey=${process.env.FOOD_API_KEY}`,
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
