pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Khushi122006/mern-job-portal.git'
            }
        }

        stage('Backend Install') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Frontend Install') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh 'sudo rm -rf /var/www/html/*'
                sh 'sudo cp -r frontend/dist/* /var/www/html/'
            }
        }

        stage('Deploy Backend') {
            steps {
                dir('backend') {
                    sh 'pm2 restart server || pm2 start server.js --name server'
                }
            }
        }
    }
}
