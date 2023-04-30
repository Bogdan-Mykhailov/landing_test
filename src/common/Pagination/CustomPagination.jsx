import {
  CustomPaginationBullet,
  CustomPaginationContainer,
} from './CustomPagination.styled';


export const CustomPagination = ({ swiper }) => {
  const { bullets } = swiper.pagination;

  return (
    <>
      <CustomPaginationContainer>
        {bullets.map((bullet, index) => (
          <CustomPaginationBullet
            key={`custom-bullet-${index}`}
            isActive={index === swiper.activeIndex}
            onClick={() => bullet.click()}
          />
        ))}
      </CustomPaginationContainer>
    </>
  );
};
