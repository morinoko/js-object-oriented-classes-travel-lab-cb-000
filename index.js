const eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    const endDate = new Date(year, 1, 1);
    const startYear = this.startDate.getFullYear();
    const endYear = endDate.getFullYear();

    return endYear - startYear;
  }
}

class Route {
  // Locations are objecst with horizontal and vertical attributes:
  // { horizontal: 'Park', vertical: '34' }
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue) + 1;
  }

  blocksTravelled() {
    const horizontalBlocksTravelled =
      Math.abs(this.avenueToInteger(this.endingLocation.horizontal) -
      this.avenueToInteger(this.beginningLocation.horizontal));

    const verticalBlocksTravelled =
      Math.abs(this.endingLocation.vertical - 
      this.beginningLocation.vertical);

    return horizontalBlocksTravelled + verticalBlocksTravelled;
  }

  estimatedTime(peakHours = false) {
    const blocksPerMinute = peakHours ? 2 : 3;

    return this.blocksTravelled() / blocksPerMinute;
  }
}
