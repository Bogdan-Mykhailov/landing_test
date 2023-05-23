import styled from 'styled-components';

export const Article = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 42px;
  }
`;

export const ArticleImage = styled.img`
  width: 200px;
  height: 144px;
  border-radius: 16px;
  margin-right: 32px;
  object-fit: cover;
`;

export const ArticleDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
`;

export const ArticleAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const AuthorName = styled.span`
  font-size: 14px;
  line-height: 22px;
  font-family: Lexend400, sans-serif;
  color: #3C4563;
`;

export const ArticleTitle = styled.span`
  font-family: Lexend400, sans-serif;
  font-size: 18px;
  line-height: 32px;
  text-transform: capitalize;
  margin-bottom: 16px;
  color: #1B1C57;
`;

export const ArticleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ArticleInfoDesc = styled.div`
  font-family: Lexend400, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #888B97;
`;

export const ArticleIcon = styled.img`
width: 24px;
  height: 24px;
`;
