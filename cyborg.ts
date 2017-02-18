module Cyborg {

  export class Terminator {

    private static target: string;

    private constructor() {
    }

    public static getTarget(): string {
      return this.target;
    }

  }

}
