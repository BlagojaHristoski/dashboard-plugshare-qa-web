pipeline {
    agent {
        label '!windows'
    }

    environment {
        BASE_URL = 'https://dashboard-staging.plugshare.com/'
        DASHBOARD_EMAIL = 'blagoja.hristoski@contractor.evgo.com'
        DASHBOARD_PASSWORD = '075246655aA@'
        recipientEmails = "blagoja.hristoski@contractor.evgo.com"
    }

    stages {
        stage('Execute') {
            steps {
                echo "Starting tests on ${BASE_URL}"
                bat 'npm i --force'
                bat 'npm run clean:jenkins'
                bat 'npm run testjenkins:home'
            }
            post {                
                always{
                    mail to: "blagoja.hristoski@iwconnect.com",
                    subject: "Test Email",
                    body: "Test"
            }
                }
            }
        }
    }