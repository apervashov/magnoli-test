export function calculateDailyPoints(seasonDay: number): number {
  if (seasonDay <= 1) {
    return 2;
  }
  if (seasonDay === 2) {
    return 3;
  }

  let day1Points = 2;
  let day2Points = 3;
  let currentPoints = 0;

  for (let d = 3; d <= seasonDay; d++) {
    currentPoints = Math.round(day1Points + day2Points * 0.6);

    day1Points = day2Points;
    day2Points = currentPoints;
  }

  return day2Points;
}
