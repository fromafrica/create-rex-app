import { HelloWorld } from './lib/hello-world.js';
import { ErrorPage } from './lib/error-page.js';

// component definitions
window.customElements.define("hello-world", HelloWorld);
window.customElements.define("error-page", ErrorPage);

export { };