import {
  Career,
  Data,
  Github,
  Guide,
  Knowhow,
  Law,
  Marketer,
  Md,
  Onboarding,
  Starbucks,
  Ux,
} from '@assets/Image';
import { CarouselContent } from '@components/domain';
import styled from '@emotion/styled';

const CarouselContainer = styled.div``;
const Carousel = () => {
  const CarouselList = [
    {
      title: '나도 개발자 되고 싶다',
      subtitle: '프론트엔드 무료 교육과정 참여하기',
      src: Onboarding,
      alt: 'Onboarding',
    },
    {
      title: '요즘 MD가 일하는 방법',
      subtitle: '실무자가 공개하는 MD 커리어의 모든 것!',
      src: Md,
      alt: 'Md',
    },
    {
      title: '스타벅스 굿즈 좋아하세요?',
      subtitle: '사랑받는 디자인의 비밀',
      src: Starbucks,
      alt: 'Starbucks',
    },
    {
      title: '믿을 것은 데이터 뿐!',
      subtitle: '요즘 데이터팀은 어떻게 일할까?',
      src: Data,
      alt: 'Data',
    },
    {
      title: '유저 경험을 설계하라!',
      subtitle: '문제를 해결하는 프로덕트 디자인',
      src: Ux,
      alt: 'Ux',
    },
    {
      title: '리크루터 커리어 가이드',
      subtitle: '싼마이 리크루터가 되지 않기 위해',
      src: Guide,
      alt: 'Guide',
    },
    {
      title: '개발자 성장 비결 공개!',
      subtitle: '글 쓰는 개발자들의 이야기',
      src: Knowhow,
      alt: 'Knowhow',
    },
    {
      title: 'Git? GitHub?',
      subtitle: '협업 필수 도구 마스터하기',
      src: Github,
      alt: 'Github',
    },
    {
      title: '마케터를 위한 데이터',
      subtitle: '잘 나가는 마케터는 무엇이 다를까!?',
      src: Marketer,
      alt: 'Marketer',
    },
    {
      title: '아는 만큼 보인다!',
      subtitle: "노동법 '채용' 시리즈",
      src: Law,
      alt: 'Law',
    },
    {
      title: '해, 커리어 EP 02 공개',
      subtitle: '최종 발표를 위한 마지막 관문 2라운드의 승자는?',
      src: Career,
      alt: 'Career',
    },
  ];

  const handleCarouselList = (list) =>
    list.map(({ src, alt, title, subtitle }, index) => (
      <CarouselContent
        src={src}
        alt={alt}
        title={title}
        subtitle={subtitle}
        key={index}
      />
    ));

  return (
    <CarouselContainer>{handleCarouselList(CarouselList)}</CarouselContainer>
  );
};

export default Carousel;
