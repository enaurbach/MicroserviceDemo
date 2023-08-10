# MicroserviceDemo
Simple fuzzy-matching microservice for FileMaker


How to use these files for a desktop demo:

	1.	Download this repository and unzip.
	2.	Open the MicroserviceDemo-main folder in VS Code (or similar editor) or open a Terminal (Mac) or cmd (Windows) window and cd (that is, navigate using the command "cd") to the folder.
	3.	In terminal, type “npm install” and Enter.  This will download and install necessary node packages.  You should only have to do this once.
	4.	In terminal, type “npm start” and Enter.  The microservice is now available for REST POST requests to "http://localhost:3500/lcs". You will need to do this each time you start the demo.  Alternatively, you can type "npm run dev" to start the microservice in dev mode.
	5.	Unzip the .fmp12 file. It can be moved to a new location or left in the MicroserviceDemo-main folder.
	6.	Open the .fmp12 file in FileMaker Pro.  The demo scripts can now be run by clicking the “Run Match Locally” button.

How to use these files for a FileMaker Server demo using a Windows server:

	1.	On a client machine, download, unzip and open the MicroserviceDemo.fmp12.zip file in FileMaker Pro.
	2.	Use the menu to open File > Manage > Security and create a new Full Access account with a password.  Disable the Admin account.  Alternatively, just add a password for Admin.
	3.	Upload the .fmp12 file to your FileMaker Server. 
	4.	Download (upload?) this repository to the server machine and unzip in a convenient location.  The MicroserviceDemo.fmp12.zip file in this downolad will not be needed.
	5.	Open a cmd window and cd to the MicroserviceDemo-main folder.
	6.	In the cmd terminal, type “npm install” and Enter.
	7.	In the cmd terminal, type “npm start” and Enter.  The microservice is now available for REST POST requests to "http://localhost:3500/lcs". 
	8.	Open the hosted MicroserviceDemo.fmp12 file in FileMaker Pro on the client machine.  The demo scripts can now be run by clicking the “Run PSOS” button.

How to make the microservice available whenever the Windows Server machine restarts:

	1.	Edit the first line of the StartLcs.bat file to reflect the location of the file.
	2.	Open Task Scheduler and click Create Basic Task to Start a program specified as the StartLcs.bat file.  Set the Triggers to At startup. 
