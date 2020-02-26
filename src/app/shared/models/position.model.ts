export class Position {
    constructor(
      public positionId: number,
      public currency: string,
      public amount: string,
      public status: string
    ) { }
  }