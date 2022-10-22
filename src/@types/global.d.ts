import Apollo from '../module/Apollo';
import { Html } from '../utils/html';

type TApollo = { create: (root: string | HTMLDivElement) => Apollo };

declare global {
  var Apollo: TApollo;
  var htmlCreator: (tag: Html) => HTMLElement;
  var uuid: () => string;
}

export {};
