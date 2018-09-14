## Gourmand
![Screenshot](https://user-images.githubusercontent.com/35941205/45562838-8a5f6180-b819-11e8-8b1d-31cdc4610879.png)
Gourmand is a full stack recipe search and storage app that allows users to search the [Edamam API](https://developer.edamam.com/edamam-recipe-api) for recipes, save recipes to their personal recipe list, and create new recipes and add them to their recipe list. Gourmand utilizes JWT and bcrypt for user authentication and authorization, which enables users to securely log in and retrieve their saved recipes. Users can search for recipes and view each recipe's details as a guest, but they must have an account in order to save and create recipes.

See demo video [here](https://www.youtube.com/watch?v=LunvFyZK2tI&t=2s).

## Getting Started

To use Gourmand, first fork and clone the Rails backend repo, found [here](https://github.com/blevm/recipe-finder-backend). Next, run `bundle install` in the command line and launch Postgres. Once Postgres is running, create your own secret key in an .env file. Then, run `rails db:create` && `rails db:migrate`, followed by `rails db:seed`. Finally, run `rails s -p 4000`, which will launch the API on a local server at the specified port.

Once you have the backend running, fork and clone the React frontend, which is in this repo. Before you proceed, request your own API key from Edamam and adjust the routes accordingly to complete successful queries of the API. Next, run `npm install` in the command line, followed by `npm install --save semantic-ui-react`. Then, run `npm start`. As long as you seeded your database when setting up the backend, you can log in as 'Guest' with the password 'guest'.

## How to use?
Demo found [here](https://www.youtube.com/watch?v=JPhX_7idf-Q&t=6s)

## Built With
- JavaScript
- React
- Ruby on Rails
- PostgreSQL
- Semantic UI React
- CSS

## API Reference

[Edamam API](https://developer.edamam.com/)

## Authors
- Betsy Sallee ([Github](https://github.com/ensallee))
- Michelle Blevins ([Github](https://github.com/blevm))
- Ryan O'Toole ([Github](https://github.com/exclusiveoranges))

## Acknowledgements
We would like to thank Jonathan Mines, Garry Clerge, and Mike Cheng of the Flatiron School for their help and support.
