import { IDescriptor } from "./IDescriptor";

/**Interface that signifies that something can observe */
interface IPerceiver {
  Observe(obj: IDescriptor): any;
}