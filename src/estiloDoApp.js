import styled from "styled-components";

export const ConjuntoDeComponentes = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; 
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr; 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px; 
  }
`;
