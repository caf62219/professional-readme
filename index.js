// packages needed for this application
const inquirer= require('inquirer');
const fs = require('fs');

 

const generateREADME = ({title, description, installation,usage, usageImage, license, contributing,tests, questionsGithubUsername, questionsGithubURL, questionsEmail}) =>
`# ${title}
<a href= "https://img.shields.io/badge/${license}.svg" alt= "license badge" > </a>

## Description

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage} <br>
<img src="${usageImage}" alt="Image of Project" width="600px" height="400px">

## License

${license}

## Contributing

${contributing}

## Tests

${tests}.

## Questions

If you have any questions you can reach me at:

-   GitHub Username: ${questionsGithubUsername} <br>
-   GitHub URL: <a  href="${questionsGithubURL}">${questionsGithubURL}</a> <br>
-   Email Address: <a href="mailto:${questionsEmail}">${questionsEmail}</a>
`

// array of questions for user input
inquirer
    .prompt([
        {
             type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Give a short description of your project explaining the what, why, and how of your project.',
            name: 'description',
            },
        {
             type: 'input',
            message: 'Describe the steps required to install your project. Make sure to include step-by-step instructions.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What are instructions and examples for usage?',
            name: 'usage', 
        },
        {
            type: 'input',
            message: 'Provide a link to a URL of a screenshot of your project.',
            name: 'usageImage'
        },
        {
            type: 'checkbox',
            message: 'What license applies to this project?',
            name: 'license',
            choices:[ 
                "Apache License 2.0", "GNU General Public License v 3.0", "MIT License","BSD License", "Boost Software License", "Creative Commons Zero v 1.0 Universal", "The Unlicense", "Eclipse Public License 2.0", "GNU Affero General Public License v 3.0", "GNU General Public License v 2.0", "Mozilla Public License 2.0",
            ],
        },
        {
             type: 'input',
            message: 'List any contributers for this project',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please lists any tests and examples of how to use them.',
            name: 'tests',
        },
        {
             type: 'input',
            message: 'What is your GitHub username?',
            name: 'questionsGithubUsername',
        },
        {
            type: 'input',
            message: 'Provide the link to your GitHub profile.',
            name: 'questionsGithubURL',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'questionsEmail',
        },
    ])

// TODO: Create a function to write README file
   .then ((answers) => {
    switch(answers.license){ 
        case "Apache License 2.0":
            return "License-Apache_2.0-blue";
            break;
        case "GNU General Public License v 3.0":
            return "License-GPLv3-blue";
            break;
        case "MIT License":
            return "License-MIT-yellow";
            break;
        case "BSD License":
            return "License-BSD_3--Clause-blue";
            break;
        case "Boost Software License":
            return "License-Boost_1.0-lightblue";
            break;
        case  "Creative Commons Zero v 1.0 Universal":
            return "License-CC0_1.0-lightgrey";
            break;
        case "The Unlicense":
            return "license-Unlicense-blue";
            break;
        case "Eclipse Public License 2.0":
            return "License-EPL_1.0-red";
            break;
        case "GNU Affero General Public License v 3.0":
            return "License-GPLv3-blue";
            break;
        case "GNU General Public License v 2.0":
            return "License-GPL_v2-blue";
            break;
        case "Mozilla Public License 2.0":
            return "License-MPL_2.0-brightgreen";
            break;
    
        default:
            console.log ("Check your operation")
        }
    
    const READMEContent = generateREADME(answers);

    fs.writeFile('README.md', READMEContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README!')) 
   } 
   ) 




