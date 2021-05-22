docker build -t load-balanced-app .
docker run -e "MESSAGE=First instance" -p 8081:8080 -d load-balanced-app
docker run -e "MESSAGE=Second instance" -p 8082:8080 -d load-balanced-app
docker run -e "MESSAGE=Third instance" -p 8083:8080 -d load-balanced-app

docker build -t load-balance-nginx .
docker run -p 8080:80 -d load-balance-nginx