# How to use this code
open the project in its root

write in the terminal:

- npm i

- npm run build

- npm start

then open http://localhost:3000/

***

## In this project you can log in with the following users

username: user

password: test123


username: admin

password: test123


username: user_admin

password: test123

***
## When you login 

you will see a welcome message with your username and role

currently there is no other difference between when a user or admin loggs in

***

# Deploying with surge.sh

npm run build

npm install -g surge

surge --project ./build --domain A_DOMAIN_NAME.surge.sh
(A_DOMAIN_NAME is just so that you have a name for you site)

now you will be asked for an email and a password 

then you will se a link that looks something like this

http://exercisestest.surge.sh/ (instead of A_DOMAIN_NAME i wrote exercisestest)

***

## This is a clone of the original repository

https://github.com/Inga-Helgadottir/CA2-front-end

we had to change from vite to npx to make deployment of the front end easier
