import React from 'react';

import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Languages>
        <S.LanguageOption selected>PT</S.LanguageOption>
        <S.LanguageOption>EN</S.LanguageOption>
      </S.Languages>
    </S.HeaderWrapper>
  );
};

export default Header;
