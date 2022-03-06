import { GetStaticProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import RecipeCard from '../../components/RecipeCard';
import MediaQueries from '../../tokens/MediaQueries';
import Spacings from '../../tokens/Spacings';

export type RecipeProps = {
  id: string | number;
  title: string;
  image: string;
  imageType: string;
};

const Recipe = ({ recipes }: any) => {
  return (
    <RecipesContainer>
      {recipes.map((item: RecipeProps) => {
        return <RecipeCard key={item.id} recipe={item} />;
      })}
    </RecipesContainer>
  );
};

export default Recipe;

const RecipesContainer = styled.section`
  padding: 0 ${Spacings.xxxxLarge};
  display: flex;
  flex-wrap: wrap;
  margin-top: ${Spacings.medium};

  ${MediaQueries.mobileOnly} {
    padding: 0 ${Spacings.xxLarge};
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.FOOD_API}/recipes/complexSearch?number=20&apiKey=${process.env.FOOD_API_KEY}`,
  );
  const data = await res.json();

  return {
    props: {
      recipes: data.results,
    },
  };
};
