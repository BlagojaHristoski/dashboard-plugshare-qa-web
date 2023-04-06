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
        stage('Execute') {
            steps {
                echo "Starting tests on ${BASE_URL}"
                bat 'npm i --force'
                bat 'npm run clean:windows'
                bat 'npm run test C607680'
            }
            post {                
                always{
                    mail to: "blagoja.hristoski@iwconnect.com",
                    subject: "Results from run",
                    body: "Test"
                    }
                }
            }
        }
    }