import { Action } from "../Actions/Actions";
import { TLAction } from "./TLAction";

// Ugh another timeline

export class Timeline {
  actionList: TLAction[];

  constructor() {
    this.actionList = [];
  }

  GetActionInstance(action: Action, timeStart: Number) {
    // Find an action that starts at this time.
    var query = this.actionList.filter(x => {
      (x.ActionSrc == action) && (x.TimeStart == timeStart)
    })
    if (query.length == 0) return null;
    return query[0];
  }

  GetActionsAtTime(time: number) {
    return this.actionList.map((x: TLAction) => {
      return (x.TimeStart <= time) && (x.TimeFinish <= time)
    })
  }

  GetActionsDuringActions(action: TLAction) {
    return this.actionList.filter(x =>
      action.IntersectsAction(x)  
    )
  }

  AddAction(action: TLAction) {
    this.actionList.push(action);
  }

  RemoveAction(action: TLAction) {
    var index = this.actionList.indexOf(action)
    if (index > -1) this.actionList.splice(index, 1)
  }

  ToString() {
    this.actionList.map(x => `${x.ActionSrc.Name}: ${x.TimeStart} - ${x.TimeFinish}`).join("\n")
  }

  TryAddAction(action: Action, TimeStart: number) {
    var TLA = new TLAction(action, TimeStart)
    return this.TryAddTLAction(TLA)
  }

  TryAddTLAction(action: TLAction) {
    var intersecting = this.GetActionsDuringActions(action)
    if (intersecting.length == 0) return true;
  }

  CheckIfValid() {
    this.actionList.forEach(x => {
      var intersecting = this.GetActionsDuringActions(x)
      if (intersecting.length > 1) return false;
    })
    return true;
  }
}