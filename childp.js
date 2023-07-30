import { spawn, exec } from 'child_process';

exec ('rustup --version', (err, stdout, stderr) => {

    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);

});