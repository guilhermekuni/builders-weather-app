import React from 'react';

import BlurInfo from '../../components/BlurInfo';

import * as S from './styles';

const MainWeatherCardSekeleton = () => (
  <S.Wrapper>
    <S.MainSection isSkeleton>
      <S.TitleSection>
        <BlurInfo customWidth={180} />
        <BlurInfo />
      </S.TitleSection>

      <S.WeatherSection>
        <S.Temperature>
          <BlurInfo customHeight={100} customWidth={260} />
        </S.Temperature>
        <BlurInfo customWidth={180} marginTop={16} />
        <BlurInfo customWidth={160} marginTop={16} marginBottom={32} />
      </S.WeatherSection>
    </S.MainSection>

    <S.InfoSection isSkeleton>
      <S.InfoItem>
        <BlurInfo customHeight={24} />
        <BlurInfo customHeight={24} customWidth={90} />
      </S.InfoItem>
      <S.InfoItem>
        <BlurInfo customHeight={24} />
        <BlurInfo customHeight={24} customWidth={90} />
      </S.InfoItem>
      <S.InfoItem>
        <BlurInfo customHeight={24} />
        <BlurInfo customHeight={24} customWidth={90} />
      </S.InfoItem>
      <S.InfoItem>
        <BlurInfo customHeight={24} />
        <BlurInfo customHeight={24} customWidth={90} />
      </S.InfoItem>
    </S.InfoSection>
  </S.Wrapper>
);

export default MainWeatherCardSekeleton;
