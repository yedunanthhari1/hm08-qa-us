Sprint 8 project
The project's objective is writing tests for Urban Routes web application using WEBDRIVER IO.

The project has eight tasks that covers different steps to create an order for a taxi ride.

Project also has a task to add a README.md file to the root directory describing the tasks and how the tests were conducted.

The softwares used for the project are WEBDRIVER IO and VS Code (to write and test scripts) .

Before Starting two softwares need to installed. VS Code and WEBDRIVER IO.

Steps to set up the system for testing.

Step 1: Connecting to GitHub The first step is to link GitHub account to TripleTen. To do so, click the “Link GitHub account” button in the widget at the top of the project page in Sprint 8. This will take us to a new browser tab where we must confirm that we want to link our GitHub account. Upon confirming, our TripleTen profile will be connected to our GitHub profile via GitHub’s secure API.

Step 2. Cloning the repo to the computer After linking accounts, a repository will be created automatically. The repository name will be hm08-qa-us., then we need to go to GitHub and clone the new repo to the local computer. To clone the repo, following steps are used - Open preferred terminal emulator. If on Windows, use Git Bash. - If we haven’t done so already, we need to create a directory to store all of the projects. For example:

                                               cd ~               # make sure we're in your home directory
                                               mkdir projects     # create a folder called projects
                                               cd projects        # change directory into the new projects folder

         - Clone the repo. The command we use will depend on the authentication strategy that we’re using. We need to replace 'username' in the following link with own username

                                                 if using HTTPS
                                                 git clone https://github.com/username/hm08-qa-us.git

                                                 if using SSH
                                                 git clone git@github.com:username/hm08-qa-us.git

Step 3 Working with the project locally Now we have a local copy of the project and can open the project folder on our computer. Before starting our work with the project, we need to run npm install to from the console in our project folder. When working on the project locally, we can use a standard text editor, but we are using VS Code. We simply open VS Code and select File → Open Folder and then select the hm08-qa-us folder that we cloned to our computer.In wdio.config.js, replace the URL with the unique link generated after the launch of Urban routes server on the project page. We will use this variable to store the URL. It helps us to declare the URL in one place and then use it throughout the whole project. WE use Deploy button to start server and copy the value to the wdio.config.js file and save it. Here since chrome browser was not working, we used the replacement file provided for Firefox browser. It replaces the existing wdio.config.js and package.json file. We are using page object model for writing scripts. The page.js and helper.js files contain different functions that we use in the tests. 

Testing Scripts:

            To run the test, first, we need to open the repo folder in VS code and select the tests folder which contains the scripts.
            Open a new terminal and run the command npm run wdio.


If all the tests are working and the scripts are written correctly, the scripts should pass all the tests.