import styled from "styled-components";

export const Cartao = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }

  @media (max-width: 480px) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export const TextoDoCartao = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;

  p {
    margin: 0;
    font-size: 16px;
    color: #2d3748;
    line-height: 1.4;
    font-weight: 500;

    &:first-child {
      font-size: 18px;
      font-weight: 600;
      color: #1a202c;
      min-height: 2.2em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &:last-child {
      font-size: 20px;
      font-weight: 700;
      color: #667eea;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @media (max-width: 768px) {
      font-size: 14px;

      &:first-child {
        font-size: 16px;
      }

      &:last-child {
        font-size: 18px;
      }
    }

    @media (max-width: 480px) {
      font-size: 13px;

      &:first-child {
        font-size: 15px;
      }

      &:last-child {
        font-size: 16px;
      }
    }
  }

  button {
    margin-top: 8px;
    padding: 14px 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
    width: 100%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    &:hover:not(.adicionado) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }

    &:hover:not(.adicionado)::before {
      left: 100%;
    }

    &:active:not(.adicionado) {
      transform: translateY(0);
    }

    &.adicionado {
      background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
      animation: pulse 0.5s ease;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 12px 20px;
    }

    @media (max-width: 480px) {
      width: 100%;
      font-size: 14px;
      padding: 14px 0;
    }
  }
`;
