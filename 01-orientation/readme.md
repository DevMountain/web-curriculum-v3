# Orientation Day Lecture Notes
This repository contains a list of installs students need to perform to set up their development environment.

Here's the slideshow for the day: https://slides.com/dmweb/web-remote-orientation#/
## Downloads
<details>
  <summary>Show all downloads</summary>
### Discord
Link - https://discordapp.com/

All students should create a discord account and join the DevMountain Web server: https://discord.gg/damAMps.  Students should change their display name to be their real name.  (This can be done by right clicking your own name in the sidebar and selecting `change nickname`.

### Git/Git-bash

All students should download git.  Mac users can do so at the link below or by typing `git --version` into their terminal or at the following link: 

MacOS - https://git-scm.com/downloads

Windows users should also download git bash, a terminal we will use during the cohort.  This can be done here: 

Windows - https://gitforwindows.org/

### GitHub
Make sure students have a GitHub account. This is also a good time to configure the username, email, and password of GitHub to work with Git that was just installed.

Link - https://www.github.com


### Node/NPM
Link - https://nodejs.org/en/download/

All students should download and install node.  This will install npm automatically.  

### VSCode
All students must download Visual Studio Code.  This will be our code editor for the duration of the cohort.  

Link - https://code.visualstudio.com/download

Students using Macs will need to move the application from their downloads folder to their applications folder.  They will then need to install the code command. This is done by opening VSCode and typing `command + shift + p` to open the search bar. Type `shell command` and select the first option.

Students using windows should change the default terminal in VSCode shell by typing `ctrl + shift + p` to open the search bar. Once the search bar is opened, have the students type `select default shell`. They will be able to select Bash as an option.

### Repl.it
Link - https://repl.it/

All students should have a repl account.  Use the same email you used to apply for DevMountain

### Canvas
Link - https://lms.devmountain.com/login/canvas

Students should recive an email to create an account for the LMS before starting the program.  If you do not recieve this email, feel free to reach out to us. 

### The Q
Link - http://q.devmountain.com

Introduce the Q to students, and explain expectations for using the Q. It's generally a good idea to recommend the students bookmark the Q so they have it easily accessible.
</details>

# CLI, Git, & GitHub

Mini Project - https://github.com/wlh18/learn-git

Afternoon Project - https://lms.devmountain.com/courses/70/pages/day-1-afternoon-project?module_item_id=17351

## CLI

CLI (Command Line Interface): Also called the terminal, is the program we will use to interact with our computer's files and directories. It will be important to become proficient in the various commands you can use in the terminal. On Apple computers we are able to use the built in terminal. On Windows machines we will need to download Bash for windows which can be found [here](https://gitforwindows.org/)

## Common Terminal Commands

- pwd: Stands for present working directory. Show's where you currently are in your file tree.

- ls: Stands for list. Lists available scripts(where you can navigate to in your file tree) from your current location.

- cd: Stands for change directory and is used to navigate the file tree. The command should be formatted like this: `cd [the name of the directory]`. You can also navigate up a level by typing `cd ..`.

- mkdir directoryname: Stands for make directory. Creates a new directory at your current location.

- touch filename: Creates a new file at the current location. Should be called with the name and extension of the file to be created ie `touch index.html`.

- rm filename: Deletes a file. Cannot be undone.

- rm -rf directoryname - Deletes a folder and everything in it. Be VERY sure of what is being deleted before running this command, it cannot be undone.

## Git and GitHub

Git is a version control system used to track the progress of our projects. It allows us to commit changes at various points in the development process. A commit is like a milestone. You should get in the habit of committing your code often. GitHub is the website where our git repositories are stored. To store our code remotely, we can "push" our commits to github. Before pushing our code, there are three stages in which a file can exist in relation to git which are represented in this image:

![Git stages](https://res.cloudinary.com/practicaldev/image/fetch/s--Si7ksd-d--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/800/1%2AdiRLm1S5hkVoh5qeArND0Q.png)

1. As we are working on our files, git does not automatically track any changes made. When we are ready to have git track these changes, we use the `git add` command and provide it with whatever files we want it to watch. By using the command `git add .` we can tell git to catalog all changes in all files in our current directory. This moves our files to the staging area.
2. The staging area is used by git to prepare any changes ready for saving. In this stage, git has cataloged any changes that we have told it to and is readying them for the next step. We commit our changes by using the `git commit` command. This will move our files from the staging area to the git repository. This is like pressing the save button. Our commit should always be accompanied a message describing what changes have been made and is formatted like this `git commit -m "message"`.
3. When we commit our code we create a snapshot of it at that moment. This allows us to revert back to that version at any time. Frequently committing our code will create different points in time that we can revert to if we ever need to.

Once our code has been committed, we can "push" it to GitHub which will create a remote version of our code. You will want to get in the habit of frequently "pushing" your code to github. This will protect against any work being lost. Below are the common git commands you will want to be familiar with:

### Git Init

`git init` initializes git in your current repository. This means that git will start watching all of the files and directories in that location.

### Git Add

`git add .` tells git to track any changes that have been made. This is the command you can run to start the process of pushing your code to github.

run:

```bash
git add .
```

### Git Commit

After staging your code using `git add .` we now need to commit our changes. This is the final step we will take before pushing our code to github. Think about commits as check points or save points in your code. You will need to provide a message about the commit using the `-m` flag.

run:

```bash
git commit -m 'message about your changes'
```

### Git Push

After staging and commiting your code, it is now ready to be pushed up to github. When your code is ready to be pushed, run:

```bash
git push origin master
```

### Git Status

`git status` is the command you can run to check what stage of the process you are on to push your code to github.

run:

```bash
git status
```

### Git Clone

We are able to easily make copies of existing repositories on GitHub, this is called cloning. First you need to copy the url for the github repo that you wish to clone down to your local machine then navigate to the directory that you want to clone the repo into. Once you are in the correct directory run:

```bash
git clone "url for github repo"
```

