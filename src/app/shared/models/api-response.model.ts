export class ApiResponse {
    constructor(
      public code: number,
      public type: string,
      public message: string
    ) { }
  }