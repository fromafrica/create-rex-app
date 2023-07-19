import PackageJson from '@npmcli/package-json';
import { createSpinner } from 'nanospinner';
import fs from 'fs';

export default async function json(config) {
    const spinner = createSpinner('running...').start();

    // check if folder exists
    if (fs.existsSync(config.location)) {
      spinner.error({ text: 'directory already exists'});
      return "1";
    } else {
        fs.mkdirSync(config.location);
    }

    // check if package.json exists
    if (fs.existsSync(config.location +'/package.json')) {
        spinner.error({ text: 'package.json already exists'});
        return "1";
    } else {
        // add empty object to file for load to work
        fs.writeFile(config.location +'/package.json', '{}', function () {
          // callback required but we want need to do anything here
        });
    }

    // load empty package.json
    const pkgJson = await PackageJson.load(config.location);

    let obj = {
      name: config.name,
      version: '0.1.0',
      description: 'cool new app project',
      type: 'module',
      main: 'index.js',
      scripts: {
        "start": "serve ./public",
      },
      dependencies: {
        "@fromafrica/rex": '^0.1.0',
        "serve": '^14.0.0',
      },
    };

    // safe defaults + selected options
    pkgJson.update(obj);

    // write to file
    pkgJson.save();

    // check if template folder exists
    if (fs.existsSync(config.location +'/public')) {
      spinner.error({ text: 'directory already exists'});
      return "1";
    } else {
        fs.mkdirSync(config.location +'/public');
        fs.cp('./template', config.location +'/public', { recursive: true }, (err) => {
          if (err) {
            spinner.error({ text: 'error copying template'});
            return "1";
          }
        });
    }

    spinner.success({ text: 'Ok'});
    return "0";
}