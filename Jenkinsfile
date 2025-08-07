pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                   git branch: 'main', url: 'https://github.com/prithesh-p/prithesh.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build("node-app-image")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    docker.image("node-app-image").run("-d -p 8080:8080")
                }
            }
        }
    }
}

