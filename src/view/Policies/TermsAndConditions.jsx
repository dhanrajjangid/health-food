import React from "react";
import { Container, EmailLink, Paragraph, SectionTitle, Title } from "./Components/StyledComponents";

const TermsAndConditions = () => {
    return (
      <Container>
        <Title>Terms and Conditions</Title>
        <Paragraph>Welcome to Buy Minimal!</Paragraph>
        <Paragraph>These terms and conditions ("Terms") outline the rules and regulations governing your use of our website, https://buyminimal.shop (the "Website").</Paragraph>
        
        <SectionTitle>1. Products and Services</SectionTitle>
        <Paragraph>We offer a variety of digital and physical products for purchase on the Website. These products may include:</Paragraph>
        <Paragraph>- Digital Products (e.g., ebooks, course)</Paragraph>
        <Paragraph>- Wooden Products (e.g., laptop stand, phone holder)</Paragraph>
        
        <SectionTitle>2. Orders and Payment</SectionTitle>
        <Paragraph>To place an order, you must be at least 18 years old and have the legal capacity to enter into contracts.</Paragraph>
        <Paragraph>We accept various payment methods as displayed on the Website.</Paragraph>
        <Paragraph>Payment is due in full at the time of order placement.</Paragraph>
        
        <SectionTitle>3. Delivery</SectionTitle>
        <Paragraph>We estimate delivery times to be within 5-10 business days for all orders within India.</Paragraph>
        <Paragraph>You will be notified via email with tracking information once your order ships.</Paragraph>
        <Paragraph>We are not responsible for delays in delivery due to unforeseen circumstances beyond our control.</Paragraph>
  
        <SectionTitle>4. Returns and Refunds</SectionTitle>
        <Paragraph>We offer a 7-day return policy for unused and unopened digital products.</Paragraph>
        <Paragraph>We offer a 7-day return policy for unused and unopened wooden product. Customers are responsible for return shipping costs for wooden products.</Paragraph>
        <Paragraph>To initiate a return, please contact us at <EmailLink href="mailto:jangiddhanraj376@gmail.com">jangiddhanraj376@gmail.com</EmailLink> with your order number and reason for return.</Paragraph>
        <Paragraph>Refunds will be issued to the original payment method used for the purchase.</Paragraph>
  
        <SectionTitle>5. Intellectual Property</SectionTitle>
        <Paragraph>The content displayed on the Website, including text, graphics, logos, icons, images, and software, is the property of One life or its licensors and is protected by Indian copyright laws.</Paragraph>
  
        <SectionTitle>6. Disclaimer</SectionTitle>
        <Paragraph>We strive to provide accurate information on the Website. However, we make no warranties, express or implied, about the completeness, reliability, or accuracy of the information contained on the Website.</Paragraph>
  
        <SectionTitle>7. Limitation of Liability</SectionTitle>
        <Paragraph>We shall not be liable for any damages arising from your use of the Website or the products offered thereon.</Paragraph>
  
        <SectionTitle>8. Governing Law</SectionTitle>
        <Paragraph>These Terms shall be governed by and construed in accordance with the laws of India.</Paragraph>
  
        <SectionTitle>9. Dispute Resolution</SectionTitle>
        <Paragraph>Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Indore, India.</Paragraph>
  
        <SectionTitle>10. Changes to Terms</SectionTitle>
        <Paragraph>We reserve the right to modify these Terms at any time. The revised Terms will be effective immediately upon posting on the Website.</Paragraph>
  
        <SectionTitle>11. Contact Us</SectionTitle>
        <Paragraph>If you have any questions about these Terms, please contact us at <EmailLink href="mailto:jangiddhanraj376@gmail.com">jangiddhanraj376@gmail.com</EmailLink>.</Paragraph>
      </Container>
    );
  };
  
  export default TermsAndConditions;