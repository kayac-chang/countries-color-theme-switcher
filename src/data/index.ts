import create from "zustand";
import Country from "./country";
import { StateFromFunctions } from "./utils";

type State = StateFromFunctions<[typeof Country]>;

export default create<State>((...args) => ({
  ...Country(...args),
}));
