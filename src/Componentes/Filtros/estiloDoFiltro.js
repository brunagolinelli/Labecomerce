import styled from "styled-components";

export const GrupoDeFiltros = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: fit-content;
  position: sticky;
  top: 20px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  h2 {
    margin: 0 0 20px 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d3748;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  h2::before {
    content: "🔍";
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    position: static;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 16px;

    h2 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin-bottom: 12px;

    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const Filtro = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:last-child {
    border-bottom: none;
  }

  & input {
    padding: 12px 16px;
    margin-top: 8px;
    font-size: 14px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    outline: none;
    background-color: #f7fafc;
    transition: all 0.3s ease;
    font-family: inherit;
    width: 100%;
    box-sizing: border-box;

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
    padding: 12px 0;

    & input {
      padding: 10px 14px;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px 0;

    & input {
      padding: 8px 12px;
      font-size: 12px;
    }
  }
`;

export const LabelFiltro = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 8px;
  display: block;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  margin-top: 8px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 100px;
`;

export const LabelInput = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #718096;
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const Separador = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #667eea;
  padding-bottom: 8px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const BotaoDeFiltro = styled.button`
  padding: 10px;
  margin-top: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 12px;
  }
`;
