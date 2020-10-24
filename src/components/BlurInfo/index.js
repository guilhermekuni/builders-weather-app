import styled from 'styled-components';

const BlurInfo = styled.div`
  height: ${({ customHeight }) => customHeight ? `${customHeight}px` : '40px'};
  width: ${({ customWidth }) => customWidth ? `${customWidth}px` : '120px'};
  background: var(--blurColor);

  & + div {
    margin-top: 16px;
  }
`;

export default BlurInfo;
