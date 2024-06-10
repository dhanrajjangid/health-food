// FooterStyles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #282c34;
  box-sizing: border-box;
  padding: 2rem 0;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0.5rem 0;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0.5rem 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLink = styled.a`
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  font-size: 1rem;
  
  &:hover {
    text-decoration: underline;
    color: #61dafb;
  }

  @media (max-width: 600px) {
    margin: 0.5rem 0;
  }
`;

export const Copyright = styled.p`
  font-size: 0.875rem;
  margin-top: 1rem;
`;
