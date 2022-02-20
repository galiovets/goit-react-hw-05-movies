import styled from 'styled-components';

export const CastList = styled.ul`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 25px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const CastImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
  max-height: auto;
  margin-bottom: 10px;
`;

export const CastText = styled.p`
  margin-bottom: 5px;
`;
