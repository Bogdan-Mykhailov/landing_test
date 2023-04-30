import {
  CustomPaginationBullet,
  CustomPaginationContainer,
} from './CustomPagination.styled';
import { Pagination } from 'swiper';

export const CustomPagination = ({ swiper }) => {
  const { bullets, total } = swiper.pagination;

  return (
    <>
      <Pagination />
      <CustomPaginationContainer>
        {bullets.map((bullet, index) => (
          <CustomPaginationBullet
            key={custom - bullet -`${index}`}
            isActive={index === swiper.realIndex}
            onClick={() => swiper.slideTo(index)}
          />
        ))}
      </CustomPaginationContainer>
    </>
  );
};
