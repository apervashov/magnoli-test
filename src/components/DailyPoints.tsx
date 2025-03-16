import React, { useEffect, useState } from "react";
import { calculateDailyPoints } from "../utils/pointsCalculator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface DailyPointsProps {
  basePoints?: number;
  seasonStart?: string;
}

function formatPoints(num: number): string {
  if (num >= 1000) {
    const kValue = Math.floor(num / 1000);
    return `${kValue}K`;
  }
  return String(num);
}

const DailyPoints: React.FC<DailyPointsProps> = ({
  basePoints = 0,
  seasonStart = "2025-03-01T00:00:00Z",
}) => {
  const [todayPoints, setTodayPoints] = useState<number>(0);
  const [seasonDay, setSeasonDay] = useState<number>(1);

  useEffect(() => {
    const startDate = new Date(seasonStart);
    const now = new Date();

    const diffMs = now.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;

    const currentSeasonDay = diffDays < 1 ? 1 : diffDays;

    setSeasonDay(currentSeasonDay);

    const daily = calculateDailyPoints(currentSeasonDay);
    setTodayPoints(daily);
  }, [seasonStart]);

  const total = basePoints + todayPoints;

  return (
    <div className="bg-[#1c1c1e] rounded-xl p-4 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-bold">Daily Points</span>
        <span className="text-xs text-gray-400">
          Day {seasonDay} of the season
        </span>
        <span className="text-xl font-medium mt-1">{formatPoints(total)}</span>
      </div>
      <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-white" />
    </div>
  );
};

export default DailyPoints;
