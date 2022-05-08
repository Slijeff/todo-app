## Run app in Docker

1. Run `docker pull slijeff/react-todo` to get the docker image
2. Run `docker run --rm -it -p 3000:3000 -v ${pwd}:/app react-todo sh` to get in the container
3. Run `npm start` to start the development server and open `localhost:3000` on your browser (may need to rum `npm install` first)

