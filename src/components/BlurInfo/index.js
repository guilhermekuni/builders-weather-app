import styled from 'styled-components';

const BlurInfo = styled.div`
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  border-radius: 4px;
  height: ${({ customHeight }) => customHeight ? `${customHeight}px` : '40px'};
  width: ${({ customWidth }) => customWidth ? `${customWidth}px` : '120px'};
  background: var(--blurColor);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: ${({ customHeight }) => customHeight ? `${customHeight}px` : '40px'};
    width: ${({ customWidth }) => customWidth ? `${customWidth}px` : '120px'};
    background: linear-gradient(to right, transparent 0%, var(--blurPlaceholderColor) 50%, transparent 100%);
    animation: load 1.5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }

  & + div {
    margin-top: 16px;
  }

  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
`

export default BlurInfo;
