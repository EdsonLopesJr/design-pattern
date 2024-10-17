export type User = {
  name: string;
  age: number;
};

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];
  private constructor() {}

  public static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({
  name: "Edson Lopes",
  age: 24,
});

myDatabaseClassic.show();
