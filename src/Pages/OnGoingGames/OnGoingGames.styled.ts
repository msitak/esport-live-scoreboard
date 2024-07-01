import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: Montserrat, sans-serif;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  color: #fc7c03;
  text-align: center;
`;

export const InnerWrapper = styled.div`
  width: fit-content;
  margin: auto;
`;

export const Text = styled.p<{ $color?: string; $fontWeight?: number }>`
  margin: 0;
  color: ${(props) => props.$color || "#FFFFFF"};
  font-weight: ${(props) => props.$fontWeight || 500};
  padding: 0 24px;
`;

export const TeamWrapper = styled.div<{
  $flexAlign: "flex-start" | "flex-end";
}>`
  display: flex;
  justify-content: ${(props) => props.$flexAlign};
  gap: 12px;

  div {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
  }
`;

export const ScoresWrapper = styled.div`
  display: flex;
  gap: 8px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  padding: 0 8px;
`;

export const ScoreWrapper = styled.div`
  width: 36px;
`;

export const SeriesScore = styled.span<{ $showBrackets?: boolean }>`
  color: #ffffff;

  ${({ $showBrackets }) =>
    $showBrackets &&
    `
      &:before {
        content: " (";
      }
      &:after {
        content: ") ";
      }
      
      color: #a1a3a5;
  `}
`;

export const Tournament = styled(Text)`
  max-width: 137px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
