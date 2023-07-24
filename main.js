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
config.pkgmgr = core.detect(process.env.npm_execpath);
config.name = 'my-rex-app';
config.location = './';
config.app = 'Single Page App';
config.typesafety = 'No';
config.style = 'No';
config.git = 'Yes';
config.deps = 'Yes';

// run cli
await questions.name().then((answer) => {
    config.name = answer.result;
});
await core.runner();

await questions.location(config.name).then((answer) => {
    config.location = answer.result;
});
await core.runner();

await questions.intro().then((answer) => {
    config.app = answer.result;
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
console.log('\n Generating package.json');
await handlers.json(config).then((err) => {
    if (err == '1') {
        process.exit(1);
    }
});

if (config.git === 'Yes') {
    console.log('Setting up git repo');
    await handlers.git();
}

if (config.deps === 'Yes') {
    console.log('Installing dependencies');
    await handlers.deps();
}