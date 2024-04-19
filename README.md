> [!IMPORTANT]
> This project was developed within the iTransition training program.

<a name="readme-top"></a> 

## 📗 Table of Contents

- [📖 About the Project](#about-project)
- [💻 Getting Started](#getting-started)
- [🙏 Acknowledgements](#acknowledgements)


## 📖 "About the Project" <a name="about-project"></a>

This CLA is a generalized rock-paper-scissors game with custom rules. The script takes a sequence of unique moves as command line arguments. It generates a cryptographic key, makes a computer move, computes an HMAC using SHA3-256, and displays it. Then, it prompts the user to choose their move from a menu. After the user's selection, it reveals the winner, the computer's move, and the initial key. Additionally, it provides a "help" option to display a table defining winning moves.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

Login to your GitHub account. Clone this repository to your desired folder:

```
cd my-folder
git clone git@github.com:Zilola-Nazarova/itransition-task3.git
```

Navigate to the folder and install all dependencies:
```
cd itransition-task3
npm install
```

Run the CLA with custom arguments:
```
node bin/index.js rock paper scissors
```
or:
```
play rock paper scissors
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I'm grateful for the opportunity provided by the company that presented this intriguing task. Their challenges allowed me to delve into cryptographic concepts like HMAC using SHA3-256. Thank you for the chance to engage with such thought-provoking tasks!

<p align="right">(<a href="#readme-top">back to top</a>)</p>