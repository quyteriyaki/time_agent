import { Action } from "../Actions/Actions";

export class TLAction {
  ActionSrc: Action;
  TimeStart: number;
  TimeFinish: number;
  IsRunning: boolean;
  IsComplete: boolean;

  constructor(source: Action, timeStart: number) {
    this.ActionSrc = source;
    this.TimeStart = timeStart;

    this.IsRunning = false;
    this.IsComplete = false;
    
    this.TimeFinish = this.TimeStart + this.ActionSrc.TimeDuration;
  }


  IntersectsAction(other: TLAction) {
    return this.IntersectAtTime(this, other) && this.IntersectAtTime(other, this);
  }

  IntersectAtTime(a: TLAction, b: TLAction) {
    return (a.TimeStart < b.TimeFinish) && (b.TimeStart < a.TimeFinish);
  }

  Equals(other: TLAction) {
    return (this.ActionSrc == other.ActionSrc) && (this.TimeStart == other.TimeStart) && (this.TimeFinish == other.TimeFinish);
  }
}