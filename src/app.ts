import ApolloApp from './module/Apollo';
import { html } from './utils/html';
import { uuid as genUuid } from './utils/uuid';

global.Apollo = ApolloApp;
global.htmlCreator = html;
global.uuid = genUuid;
