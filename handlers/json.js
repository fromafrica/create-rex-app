import PackageJson from '@npmcli/package-json';
import { createSpinner } from 'nanospinner';
import fs from 'fs';

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function json(config) {
    const spinner = createSpinner('running...').start();

    // check if package.json exists
    if (fs.existsSync('./package.json')) {
        spinner.error({ text: 'package.json already exists'});
        return;
    } else {
        fs.writeFile('./package.json', '{}', function () {
          //
        });
    }

    // add empty object to file for load to work
    const pkgJson = await PackageJson.load('./');

    // safe defaults + selected options
    pkgJson.update({
        devDependencies: {
          foo: '^foo@1.0.0',
        },
        peerDependencies: {},
      });

    // write to file
    pkgJson.save();

    await sleep(1500);
    spinner.success({ text: 'Ok'});
}