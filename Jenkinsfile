pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/prithesh-p/prithesh.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("node-app-image")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker rm -f node-app-container || true'
                    sh 'docker run -d -p 8080:8080 --name node-app-container node-app-image'
                }
            }
        }
    }
}

