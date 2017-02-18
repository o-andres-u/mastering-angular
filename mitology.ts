module Mitology {

  export class Minotaurus {

    constructor(public description: string) {
      console.log(description);
    }

  }

  export class Centaurus {

    private description: string;

    constructor(description: string) {
      this.description = description;
    }

    public getDescription(): string {
      return this.description;
    }
  }

}
