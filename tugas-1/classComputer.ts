class Computer {
  private brandComputer: string;
  private typeComputer: string;
  private ramComputer: number;

  constructor(brandComputer: string, typeComputer: string, ramComputer: number) {
    this.brandComputer = brandComputer;
    this.typeComputer = typeComputer;
    this.ramComputer = ramComputer;
  }

  getDetails(): string {
    return `Your brand Computer is ${this.brandComputer} with type ${this.typeComputer} and RAM ${this.ramComputer}`;
  }
  getBrandComputer(): string {
    return this.brandComputer;
  }
  getTypeComputer(): string {
    return this.typeComputer;
  }
  getRamComputer(): number {
    return this.ramComputer;
  }
}

const computerType1 = new Computer("Lenovo", "Yoga", 8);
console.log(computerType1.getDetails());
