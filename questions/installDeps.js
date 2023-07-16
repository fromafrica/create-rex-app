import inquirer from 'inquirer';

export default async function installDeps() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'result',
        message: 'Install dependencies?',
        choices: ['Yes', 'No']
    });

    return answer;
}