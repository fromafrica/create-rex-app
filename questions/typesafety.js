import inquirer from 'inquirer';

export default async function typeSafety() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'result',
        message: 'Do you want type safety?',
        choices: ['No', 'Yes, Enable JSDoc', 'Yes, Enable TypeScript']
    });

    return answer;
}