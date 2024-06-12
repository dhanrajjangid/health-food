// Footer.js
import React from 'react';
import { FooterContainer, LinksContainer, FooterLink, Copyright } from './StyledComponents';

const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink href="/terms-and-conditions">Terms and Conditions</FooterLink>
        <FooterLink href="/contact-us">Contact Us</FooterLink>
        <FooterLink href="/shipping-policy">Shipping Policy</FooterLink>
        <FooterLink href="/refund-policy">Refund Policy</FooterLink>
        <FooterLink href="/cancellation-policy">Cancellation Policy</FooterLink>
      </LinksContainer>
      <Copyright>© {new Date().getFullYear()} Minimal React. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
