import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { RecipeProps } from '../pages/recipes';
import Spacings from '../tokens/Spacings';

type RecipeCardProps = {
  recipe: RecipeProps;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link href={`/recipes/${recipe.id}`} passHref>
      <RecipeCardContainer>
        <Image src={recipe.image} alt={recipe.title} width={300} height={200} />
        <Title>{recipe.title}</Title>
      </RecipeCardContainer>
    </Link>
  );
};

export default RecipeCard;

const RecipeCardContainer = styled.div`
  cursor: pointer;
  flex: 0 0 300px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
`;

const Title = styled.p`
  font-size: 18px;
  margin: ${Spacings.medium} ${Spacings.xSmall};
`;

const StyledButton = styled.div`
  padding: 10px 8px;
  background-color: #ffd977;
  display: inline;
`;
