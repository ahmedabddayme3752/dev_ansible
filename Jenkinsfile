pipeline {
    agent any
    
    environment {
        ANSIBLE_INVENTORY = "${WORKSPACE}/inventory.ini"
        ANSIBLE_PLAYBOOK = "${WORKSPACE}/deploy.yml"
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the GitHub repository
                checkout scm
            }
        }
        
        stage('Check Ansible') {
            steps {
                // Check if Ansible is installed
                sh '''
                    if command -v ansible &> /dev/null; then
                        echo "Ansible is already installed"
                        ansible --version
                    else
                        echo "Ansible is not installed. Please install it before running this pipeline."
                        exit 1
                    fi
                '''
            }
        }
        
        stage('Deploy with Ansible') {
            steps {
                // Run the Ansible playbook to deploy the application
                ansiblePlaybook(
                    playbook: "${ANSIBLE_PLAYBOOK}",
                    inventory: "${ANSIBLE_INVENTORY}",
                    colorized: true
                )
            }
        }
    }
    
    post {
        success {
            echo 'Deployment completed successfully!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
