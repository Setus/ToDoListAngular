FROM nginx:latest
RUN apt-get update; apt-get install -y less; apt-get install -y curl;
COPY /dist/ToDoList /usr/share/nginx/html