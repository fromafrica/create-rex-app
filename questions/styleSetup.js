import inquirer from 'inquirer';

export default async function styleSetup() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'result',
        message: 'Do you use CSS utility classes?',
        choices: ['No', 'Yes, Enable Tailwind']
    });

    return answer;
}