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
                archiveArtifacts artifacts: 'http://localhost:8080/job/Dashboard%20PlugShare/ws/jenkinsresults/mochawesome.html', onlyIfSuccessful: false
                
                mail to: "${recipientEmails}",
                subject: "Test Email",
                body: "Test",
                attachmentsPattern: 'http://localhost:8080/job/Dashboard%20PlugShare/ws/jenkinsresults/mochawesome.html'
            }
                }
            }
        }
    }