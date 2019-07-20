# NPM Exercises

## npm init

Create a directory for today's work. Run `npm init` within it to create a `package.json` file within it. For the rest of these exercises, you will install modules and the dependencies will be remembered in your `package.json` file. After each time you install a module, check your `package.json` and see that what you installed has been added as a dependency.
Create a `.gitignore` file, and within it, put `node_modules`, so that git will ignore the `node_modules` folder when you are adding files to be tracked.

### Speed Test

[Speed Test](https://www.npmjs.com/package/speed-test) is a simple module that installs a command that will test your internet connection.

Install the Speed Test module globally and run it. Read the documentation on the project page to figure out how to use it.

### Lodash

[Lodash](https://www.npmjs.com/package/lodash) is a Swiss army knife toolbelt of a module. For example, there's a shuffle built in that's useful for coding card games.

Write a simple program that makes use of lodash's shuffle function.
Write a simple program that makes use of lodash's sum, max, or mean function.
Look through the lodash documentation for another function that is interesting to you, write a program that makes use of it.

### Wallpaper, Axios & Download File

[Wallpaper](https://www.npmjs.com/package/wallpaper) is a module that lets you change your desktop background programatically. 
[Axios](https://www.npmjs.com/package/axios) is a module that lets you send and receive HTTP requests. 
[Download File](https://www.npmjs.com/package/download-file) is a module that lets you download a file to your computer from the internet.

Write a program that, when run, will set your desktop background to a random dog image.
Use Axios to fetch a random dog image url from the [Dog.ceo](https://www.dog.ceo) API
Download that image to your computer (using the url you just fetched) with Download File
Once the image is on your filesystem, you can then use Wallpaper to set the desktop background.

### PDFKit & Cat-Facts

[PDFKit](https://www.npmjs.com/package/pdfkit) is a module that lets you create PDF documents on the fly. [Cat-Facts](https://www.npm.js/package/cat-facts) is a module that will provide you with random cat facts.

Write a program that, when run, will save a PDF with a cat fact to your filesystem.

### PrettierJS

[Prettier](https://www.npmjs.com/package/prettier) is a very useful tool that reformats your JavaScript code in a consistent and pretty style. No more manually adding semi-colons or fixing indenting!

Install PrettierJS globally. Add a new "prettify" command to your `package.json` that uses PrettierJS to stylize all the files in your project, except for the ones in `node_modules`. (typing `npm run prettify` should run your command)

### Nodemailer

[Nodemailer](https://www.npmjs.com/package/nodemailer) is a module that lets you programatically send emails.

Write a script that uses nodemailer to send an email to yourself, from yourself. Use the ethereal email example in their docs.

**BONUS:** Instead of faking an email with ethereal, try getting a gmail account to send the email! Here's a guide to get you started: [https://codeburst.io/sending-an-email-using-nodemailer-gmail-7cfa0712a799](https://codeburst.io/sending-an-email-using-nodemailer-gmail-7cfa0712a799)
instead of turning on that "let less secure apps use your account" setting, create a temporary password for your gmail account instead: https://myaccount.google.com/apppasswords
 

**Bonus: Any module**
Find any npm module and learn how to use it by reading its documentation. You can do a google search for something you might be interested in and add "npm" to the search term. Or you can look through [this list](https://github.com/sindresorhus/awesome-nodejs) for some inspiration.


