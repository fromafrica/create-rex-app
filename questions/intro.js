import inquirer from 'inquirer';

export default async function intro() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'result',
        message: 'What are you building?',
        choices: ['Single Page App', 'Multi Page App']
    });

    return answer;
}