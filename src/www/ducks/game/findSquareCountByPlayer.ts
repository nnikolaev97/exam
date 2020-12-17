export function findSquareCountByPlayer(
  s: any,
  { player }: { player: string }
): any {
  return +s.game.scenario.values["squares.count"];
}
