# CatWiki

I first studied the api and how to fetch the required resources. 
Planned the basic layout of the website and what routes I would need for the backend. 
Created a simple UI using react-bootstrap, bootswatch and font awesome for the icons. 

For the main page, I fetched all breeds available on the api and display similar ones as the user types it in the search bar. So that a list is seen and the user can click on it to see details. 

For the search page, I use the id of the breed to fetch the details from the backend and then the api to get all required details of the breed. A separate request is sent to get images with a limit of 10 set in the query. 

In the frontend, my file structure included: 
- Components ( For small components which could be reused throughout different pages 
- Screen (For different screen views) 
- Images (For any images I wanted to use on the website)


For backend: 
- Routes(For handling similar routing for the backend) 
- Controllers (For functions that are handled by the routes) 
- Try catches for any potential errors while fetching. 
- Dotenv (For hiding private stuff such as the key from API) 

Build the heroku build file and then hosted on heroku from the CLI. Added the key as a private in the heroku config. And succedfully hosted on heroku. 
The link to the live website : https://zakscatwiki.herokuapp.com/

Overall it was a fun project to do within 90 minutes, UI looks really bad and I apologise for that. Some internet errors kept ruining my api fetches so had to restart it a couple times but didnt go above the 90 minute mark. 
