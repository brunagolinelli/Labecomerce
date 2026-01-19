import styled from "styled-components";

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 20px 24px;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  & p {
    font-size: 18px;
    font-weight: 600;
    color: #2d3748;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  & p::before {
    content: "📦";
    font-size: 1.2rem;
  }

  & label {
    font-size: 15px;
    font-weight: 600;
    color: #4a5568;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & select {
    padding: 12px 16px;
    font-size: 14px;
    border-radius: 12px;
    border: 2px solid #e2e8f0;
    outline: none;
    background-color: #f7fafc;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    min-width: 140px;

    &:focus {
      border-color: #667eea;
      background-color: #fff;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    &:hover {
      border-color: #cbd5e0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 20px;
    margin-bottom: 20px;
    
    & p {
      font-size: 16px;
    }

    & label {
      font-size: 14px;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    & select {
      font-size: 13px;
      padding: 10px 14px;
      min-width: 120px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    margin-bottom: 16px;
    
    & p {
      font-size: 14px;
    }

    & label {
      font-size: 13px;
    }

    & select {
      font-size: 12px;
      padding: 8px 12px;
      min-width: 100px;
    }
  }
`;

export const GrupoDeCartoes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
