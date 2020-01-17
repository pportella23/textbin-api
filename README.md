# Braille Printer Project 
This is a project that aims in helping people with visual deficiency by making easier and cheaper to print texts in braille.

This repository contains only the API that convert ASCII text to braille language. 


## How it works
##### Front-end Application
* We made a simple app to input the ASCII text to be converted => See the [app repository](https://github.com/pportella23/BPrinter-Frontend) for detail
##### API System
The API has a file called ```server.js``` with all the logic to get it working. Basically, what it does is create an express server and set two routes: 
```
/payload
```
This route is a GET method and is used to acess the content that will be translated to braille.
```
/add
```
This route is a POST method and is used to input the text that was already converted to braille, at the front-end app logic, to a JSON.

## Considerations
See that the only thing that is done in the API is create the server and set the routes to get it working. All the conversion logic is done in the front-end application.

## Testing
I deployed the API in the Heroku platform, so it's accessible by the link: [https://brailleprinter-api.herokuapp.com/](https://brailleprinter-api.herokuapp.com/)
OBS: Don't forget to use the routes at the end of the link ('/payload' and '/add')

## Created by
* Pedro Portella Possamai
