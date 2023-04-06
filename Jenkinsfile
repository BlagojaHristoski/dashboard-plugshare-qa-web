pipeline {
    agent {
        label '!windows'
    }

    environment {
        BASE_URL = 'https://dashboard-staging.plugshare.com/'
        DASHBOARD_EMAIL = 'blagoja.hristoski@contractor.evgo.com'
        DASHBOARD_PASSWORD = '075246655aA@'
        recipientEmails = "blagoja.hristoski@iwconnect.com"
    }

    stages {
        stage('Execute') {
            steps {
                echo "Starting tests on ${BASE_URL}"
                bat 'npm i --force'
                bat 'npm run clean:windows'
                bat 'npm run testjenkins:home'
            }
            post {                
                always{
                    emailext to: "${recipientEmails}",
                    subject: "Results from tests from PlugShare Dashboard",
                    body: "Test",
                    attachmentsPattern: '*.csv'
                    }
                }
            }
        }
    }