import { DeveloperData, FooterWrapper, Svg } from './Footer.styled';

export default function Footer() {
  return (
    <FooterWrapper>
      <DeveloperData>
        © 2022 | All Rights Reserved | Developed by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/PNataliya"
        >
          <Svg />
        </a>
      </DeveloperData>
    </FooterWrapper>
  );
}
