docker build -t load-balanced-app ./application/
docker build -t load-balance-nginx ./nginx-docker/

docker run --name "app1" -e "MESSAGE=First" -p 8081:8080 -d load-balanced-app
docker run --name "app2" -e "MESSAGE=Second" -p 8082:8080 -d load-balanced-app
docker run --name "app3" -e "MESSAGE=Third" -p 8083:8080 -d load-balanced-app

docker run --name "proxy" -p 8080:80 -d load-balance-nginx

docker stop app3 app2 app1 proxy

docker rm app3 app2 app1 proxy


npx autocannon -c 1000 -d 2 -p 10 http://localhost:8080