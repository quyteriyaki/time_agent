export class Action {
  Name: string;
  description: string;
  TimeDuration: number;
  callback: Function;
  constructor(name: string, description: string, duration: number, callback: Function) {
    this.Name = name;
    this.description = description;
    this.TimeDuration = duration;
    this.callback = callback
  }

  Invoke(args: any) {
    this.callback(args)
  }
}