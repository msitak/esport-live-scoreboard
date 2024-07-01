import styled from "styled-components";
import { Align } from "./Table.types";

export const StyledTable = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
  min-width: 820px;
`;

export const StyledTHead = styled.thead`
  background-color: #363b3f;
`;

export const StyledTr = styled.tr`
  border-bottom: 1px solid #4e5356;
  white-space: nowrap;

  &:first-child td {
    padding-top: 16px;
  }

  &:last-child {
    border-bottom-color: #363b3f;
  }
`;

export const StyledTh = styled.th<{ $align?: Align }>`
  color: #a1a3a5;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 8px 0 8px;
  text-align: ${(props) => props.$align || "center"};

  &:first-child {
    border-left: 1px solid #363b3f;
  }

  &:last-child {
    border-right: 1px solid #363b3f;
  }
`;

export const TeamWrapper = styled.div<{ $isReversed?: boolean }>`
  display: flex;
  justify-content: ${(props) =>
    props.$isReversed ? "flex-start" : "flex-end"};
  gap: 12px;
  padding: ${(props) =>
    props.$isReversed ? "20px 24px 16px 8px" : "20px 8px 16px 24px"};

  div {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
  }
`;

export const StyledTd = styled.td<{
  $color?: string;
  $fontWeight?: number;
  $isTeam?: boolean;
  $isScore?: boolean;
}>`
  color: ${(props) => props.$color || "#FFFFFF"};
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => props.$fontWeight || 500};
  line-height: 20px;
  background-color: #2b3135;
  padding: 20px 0 16px;

  &:first-child {
    padding-left: 16px;
    border-left: 1px solid #363b3f;
  }

  &:last-child {
    border-right: 1px solid #363b3f;
  }

  img {
    max-height: 20px;
  }

  svg {
    padding: 20px 0 16px;
    display: inherit;
  }

  ${({ $isTeam }) =>
    $isTeam &&
    `
    text-align: left;
    align-items: center;
    gap: 12px;
    padding: 0;
  `}

  ${({ $isScore }) =>
    $isScore &&
    `
    justify-content: center;
    align-items: center;
    padding: 0;
  `}
`;

export const ScoreWrapper = styled.span`
  width: 36px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
`;

export const SeriesScore = styled.span<{ $showBrackets?: boolean }>`
  color: #a1a3a5;
  &:before {
    content: " (";
  }
  &:after {
    content: ") ";
  }

  ${({ $showBrackets }) =>
    !$showBrackets &&
    `
     &:before, &:after {
       content: ''
     }
     
     color: #FFFFFF;
  `}
`;

export const Tournament = styled(StyledTd)`
  max-width: 137px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
