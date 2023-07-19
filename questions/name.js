import inquirer from 'inquirer';

export default async function () {
    const answer = await inquirer.prompt({
        name: 'result',
        message: 'What\'s the name of your project?',
        default: 'my-rex-app',
    });

    return answer;
}