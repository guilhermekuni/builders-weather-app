import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Languages = styled.div``;

export const LanguageOption = styled.span`
  color: #1d3557;

  & + span {
    margin-left: 10px;
  }

  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
`;
