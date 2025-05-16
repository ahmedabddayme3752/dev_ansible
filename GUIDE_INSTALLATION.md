# Guide d'Installation et Configuration: Jenkins-Ansible

Ce guide détaille les étapes pour configurer l'intégration Jenkins-Ansible pour le TP6.

## 1. Installation de Jenkins

### Sur Ubuntu/Debian
```bash
# Ajouter la clé du référentiel Jenkins
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install -y jenkins
```

### Vérifier l'installation
```bash
sudo systemctl status jenkins
```

### Accéder à Jenkins
Ouvrez votre navigateur et accédez à `http://localhost:8080`

## 2. Configuration initiale de Jenkins

1. Récupérez le mot de passe initial:
```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

2. Installez les plugins recommandés
3. Créez un utilisateur administrateur
4. Configurez l'URL de Jenkins

## 3. Installation des plugins Jenkins nécessaires

Naviguez vers **Manage Jenkins > Manage Plugins > Available** et installez:
- Git Plugin
- GitHub Integration Plugin
- Ansible Plugin

## 4. Configuration de GitHub dans Jenkins

1. Allez dans **Manage Jenkins > Configure System**
2. Trouvez la section GitHub
3. Cliquez sur **Add GitHub Server**
4. Configurez:
   - Name: GitHub
   - API URL: https://api.github.com
   - Credentials: Ajoutez vos identifiants GitHub (si nécessaire)

## 5. Installation d'Ansible

```bash
sudo apt-get update
sudo apt-get install -y ansible
```

Vérifiez l'installation:
```bash
ansible --version
```

## 6. Création du dépôt GitHub

1. Créez un nouveau dépôt sur GitHub
2. Poussez le code du TP vers ce dépôt:
```bash
cd /home/ahmed/Desktop/tp_devops
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-username/tp_devops.git
git push -u origin main
```

## 7. Création du Job Pipeline dans Jenkins

1. Sur le dashboard Jenkins, cliquez sur **New Item**
2. Entrez un nom (ex: "TP6-Jenkins-Ansible")
3. Sélectionnez **Pipeline**
4. Cliquez sur **OK**
5. Dans la configuration:
   - Section **Pipeline**:
     - Definition: **Pipeline script from SCM**
     - SCM: **Git**
     - Repository URL: URL de votre dépôt GitHub
     - Credentials: Ajoutez vos identifiants si nécessaire
     - Branch Specifier: */main
     - Script Path: Jenkinsfile
6. Cliquez sur **Save**

## 8. Configuration du Webhook GitHub (Optionnel)

1. Dans votre dépôt GitHub, allez dans **Settings > Webhooks > Add webhook**
2. Payload URL: `http://votre-serveur-jenkins:8080/github-webhook/`
3. Content type: application/json
4. Sélectionnez "Just the push event"
5. Cliquez sur **Add webhook**

## 9. Exécution du Pipeline

1. Sur le dashboard Jenkins, accédez à votre job pipeline
2. Cliquez sur **Build Now**
3. Suivez l'exécution dans **Console Output**

## 10. Vérification du Déploiement

Une fois le pipeline terminé avec succès, vérifiez que l'application est correctement déployée sur les serveurs cibles définis dans l'inventaire Ansible.
