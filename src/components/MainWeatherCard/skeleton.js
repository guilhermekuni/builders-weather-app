import React from 'react';

import BlurInfo from '../../components/BlurInfo';

import * as S from './styles';

const MainWeatherCardSekeleton = () => {
  return (
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
          <S.TemperatureFeelsLike>
            <BlurInfo customWidth={180} />
          </S.TemperatureFeelsLike>
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
};

export default MainWeatherCardSekeleton;
