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
        
        stage('Install Ansible') {
            steps {
                // Check if Ansible is installed, install if not
                sh '''
                    if ! command -v ansible &> /dev/null; then
                        echo "Installing Ansible..."
                        sudo apt-get update
                        sudo apt-get install -y ansible
                    else
                        echo "Ansible is already installed"
                        ansible --version
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
