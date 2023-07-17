/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent {
        label '!windows'
    }

    environment {
        BASE_URL = 'https://dashboard-staging.plugshare.com/'
        DASHBOARD_EMAIL = 'blagoja.hristoski@contractor.evgo.com'
        DASHBOARD_PASSWORD = '075246655aA@'
    }

    stages {
        stage('All_Tests') {
            steps {
                echo "Starting tests on ${BASE_URL}"
                bat 'npm i --force'
                bat 'npm run test:all'
            }
        }
                stage('Home_Tests') {
            steps {
                echo "Starting tests on ${BASE_URL}"
                bat 'npm i --force'
                bat 'npm run test:home'
            }
        }
    }
}
