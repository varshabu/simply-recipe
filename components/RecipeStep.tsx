import React from 'react';
import styled from 'styled-components';
import Spacings from '../tokens/Spacings';

const RecipeStep = (onestep: any) => {
  const { step } = onestep;
  return (
    <StyledContainer>
      <header>
        <h4>Step: {step.number}</h4>
        <div></div>
      </header>
      <p>{step.step}</p>
    </StyledContainer>
  );
};

export default RecipeStep;

const StyledContainer = styled.div`
  margin-bottom: ${Spacings.medium};

  header {
    display: flex;
    gap: 1rem;

    div {
      height: 2px;
      background: black;
    }

    h4 {
      margin-bottom: ${Spacings.xxSmall};
    }
  }
`;
