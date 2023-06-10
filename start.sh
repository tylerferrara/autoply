#!/usr/bin/env bash

# Check if docker is installed on the system.
if command -v docker -v > /dev/null; then
    docker="sudo docker"
    compose="sudo docker-compose"
    # Does the user have permission to run docker?
    if [[ $(groups "$USER") =~ docker ]]; then
        docker="docker"
        compose="docker-compose"
    fi
    # Use docker-compose if installed.
    if command -v "$compose" >/dev/null 2>&1; then
        echo "Docker Compose is installed."
        "$compose" up
    else
        echo "Docker Compose is not installed."
        "$docker" build . -t autoply;
        "$docker" run --network=host autoply
    fi
else
    echo "Install docker! \`curl -fsSL https://get.docker.com -o get-docker.sh | sh get-docker.sh\`"
    return 1
fi    