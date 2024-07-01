import React, { useCallback, useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import {
  InnerWrapper,
  ScoresWrapper,
  ScoreWrapper,
  SeriesScore,
  TeamWrapper,
  Text,
  Title,
  Tournament,
  Wrapper,
} from "./OnGoingGames.styled";
import { Series } from "../../Models/series.types";
import Input from "../../Components/Input/Input";
import { Headers, Rows } from "../../Components/Table/Table.types";
import { formatTime } from "../../Utils/formatTime";
import ImageWithFallback from "../../Components/ImageWithFallback/ImageWithFallback";
import useWebSocket from "../../Hooks/useWebsocket";
import { Matches } from "./OnGoingGames.types";
import useFetch from "../../Hooks/useFetch";

const tableHeaders: Headers[] = [
  { name: "title", align: "center" },
  { name: "time", align: "center" },
  { name: "team 1", align: "right" },
  {},
  { name: "team 2", align: "left" },
  { name: "tournament", align: "center" },
];

const OnGoingGames = () => {
  const [filterValue, setFilterValue] = useState("");
  const [tableRows, setTableRows] = useState<Rows>([]);
  const { data: scores } = useWebSocket<Matches[]>(
    process.env.REACT_APP_ONGOING_GAMES_SCORES_WS_URL as string,
  );
  const { data: series } = useFetch<Series[]>(
    process.env.REACT_APP_ONGOING_GAMES_SERIES_XHR_URL as string,
  );

  const getSeriesScore = (scores: Matches, gameId: number) =>
    scores
      .find((element) => element.id === gameId)
      ?.series.teams.map((team) => team.score) || [0, 0];

  const getGameScore = (scores: Matches, gameId: number) => {
    const games = scores.find((element) => element.id === gameId)?.games;
    if (games?.length) {
      return [games[0].teams[0].score, games[0].teams[1].score];
    }
  };

  const filterInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilterValue(e.target.value);

  const filterSeries = useCallback(
    (series: Series[], filterValue: string): Series[] => {
      return series.filter(
        (element) =>
          element.tournament.name
            .toLowerCase()
            .includes(filterValue.toLowerCase()) ||
          element.title.toLowerCase().includes(filterValue.toLowerCase()),
      );
    },
    [],
  );

  const generateRow = useCallback((element: Series, scores) => {
    return [
      <Text $color="#A1A3A5" $fontWeight={600}>
        {element.title}
      </Text>,
      <Text>{formatTime(element.startTime)}</Text>,
      <TeamWrapper $flexAlign="flex-end">
        {element.teams[0].name}
        <ImageWithFallback
          src={element.teams[0].logoUrl}
          alt="team logo"
          fallbackSrc="/icons/image-team-placeholder.svg"
        />
      </TeamWrapper>,
      <ScoresWrapper>
        <ScoreWrapper>
          <SeriesScore
            $showBrackets={Boolean(getGameScore(scores, element.id)?.[0])}
          >
            {getSeriesScore(scores, element.id)[0]}
          </SeriesScore>
          {getGameScore(scores, element.id)?.[0]}
        </ScoreWrapper>
        <img src="/icons/score-separator.svg" alt="score separator" />
        <ScoreWrapper>
          {getGameScore(scores, element.id)?.[0]}
          <SeriesScore
            $showBrackets={Boolean(getGameScore(scores, element.id)?.[0])}
          >
            {getSeriesScore(scores, element.id)[0]}
          </SeriesScore>
        </ScoreWrapper>
      </ScoresWrapper>,
      <TeamWrapper $flexAlign="flex-start">
        <div>
          <ImageWithFallback
            src={element.teams[1].logoUrl}
            alt="team logo"
            fallbackSrc="/icons/image-team-placeholder.svg"
          />
        </div>
        {element.teams[1].name}
      </TeamWrapper>,
      <Tournament $color="#A1A3A5">{element.tournament.name}</Tournament>,
    ];
  }, []);

  useEffect(() => {
    if (!series || !scores) return;

    const tableRows: Rows = [];
    const filteredSeries = filterSeries(series, filterValue);
    filteredSeries.map((element) =>
      tableRows.push(generateRow(element, scores)),
    );
    setTableRows(tableRows);
  }, [series, scores, filterValue, generateRow, filterSeries]);

  return (
    <Wrapper>
      <Title>On Going Games</Title>
      <InnerWrapper>
        <Input
          onChange={filterInputOnChange}
          value={filterValue}
          placeholder="ECS Season 7"
          label="Filter by tournament or title"
          id="filter"
          type="text"
        />
      </InnerWrapper>
      <Table rows={tableRows} headers={tableHeaders} />
    </Wrapper>
  );
};

export default OnGoingGames;
