function canCompleteCircuit(gasAmounts, gasCosts) {
  const circuitLength = gasAmounts.length;
  for (let startingPoint = 0; startingPoint < circuitLength; startingPoint++) {
    let gas = 0;
    for (let i = startingPoint; i < startingPoint + circuitLength; i++) {
      const station = (i + startingPoint) % circuitLength;

      // refuel
      gas += gasAmounts[station];

      const canTravel = gas >= gasCosts[station];
      if (!canTravel) {
        continue;
      }

      // travel
      gas = gas - gasCosts[station];

      if (station == startingPoint) {
        return startingPoint;
      }
    }
  }
  return -1;
}

module.exports = canCompleteCircuit;
