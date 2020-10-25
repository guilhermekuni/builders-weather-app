import React from 'react';

import BlurInfo from '../../components/BlurInfo';

import * as S from './styles';

const SmallWeatherCardSkeleton = () => (
  <S.Wrapper isSkeleton>
    <BlurInfo fullSize customRadius={24} customColor='#d9e4e8' />
  </S.Wrapper>
);

export default SmallWeatherCardSkeleton;
