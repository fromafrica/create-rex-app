#!/usr/bin/env node

// setup questions
import * as questions from './questions/index.js';

// handle answers
import * as handlers from './handlers/index.js';

// core/helper functions
import * as core from './core/index.js';

await core.welcome();

const config = {};

// defaults
config.app = 'Single Page App';
config.typesafety = 'No';
config.style = 'No';
config.git = 'Yes';
config.deps = 'Yes';

// run cli
await questions.intro().then((answer) => {
    config.app = answer.result;
});
await core.runner();

await questions.typeSafety().then((answer) => {
    config.typesafety = answer.result;
});
await core.runner();

await questions.styleSetup().then((answer) => {
    config.style = answer.result;
});
await core.runner();

await questions.gitSetup().then((answer) => {
    config.git = answer.result;
});
await core.runner();

await questions.installDeps().then((answer) => {
    config.deps = answer.result;
});
await core.runner();

// run handlers
console.log('Generating package.json');
await handlers.json();

if (config.git === 'Yes') {
    await core.sleep(500);
    console.log('Setting up git repo');
    await handlers.git();
}

if (config.deps === 'Yes') {
    await core.sleep(500);
    console.log('Installing dependencies');
    await handlers.deps();
}