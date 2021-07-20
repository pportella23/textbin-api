# Text to Binary Convert API Project
This is a project that had the intention of creating an API to serve a Arduino braille printer. The API converts text to binary to make the printer's job easier when writing down the text into the paper, but unfortunately the printer project has ended. Even so, I decided to finish the API project and make a web app to facilitate the interaction with the translator. Hope you enjoy and fell free to contribute!


## How it works
##### Front-end Application
* I made a simple web app to input the text and send to the API => See the [app repository](https://github.com/pportella23/textbin-app) for detail
##### API System
The API has a file called ```server.js``` with all the logic to get it working. Basically, what it does is create an express server and set two routes: 
```
/
```
This route is a GET method and is used to acess the content of the variable that was being updated in the POST method and expose as a JSON.
```
/
```
This route is also a POST method and is used to receive the text, convert it to ASCII, then the ASCII into binary and save it in a variable.

## Considerations
See that the API creates the server, set the routes to get it working and convert the text to binary. All this logic can be tested by acessing the web app to input some text and get it done!

## Testing
I deployed the API in the Heroku platform, so it's accessible by the link: [https://textbin-api.herokuapp.com/](https://textbin-api.herokuapp.com/)

OBS: Don't forget that the POST route cannot be used from a web browser, but it can be called by the app that I made at => [textbin-app](https://github.com/pportella23/textbin-app)

## Created by
* Pedro Portella Possamai
