import PackageJson from '@npmcli/package-json';
import { createSpinner } from 'nanospinner';

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function json() {
    const spinner = createSpinner('running...').start();

    // check if package.json exists

    // doesn't exist? create package.json

    // add empty object to file for load to work
    const pkgJson = await PackageJson.load('./tmp');

    // safe defaults + selected options
    pkgJson.update({
        devDependencies: {
          foo: '^foo@1.0.0',
        },
        peerDependencies: {},
      });

    // write to file
    pkgJson.save();

    await sleep(1000);
    spinner.success({ text: 'Ok'});
}