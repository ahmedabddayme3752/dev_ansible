# TP 6: Intégration Jenkins-Ansible

Ce projet démontre l'intégration de Jenkins avec Ansible pour automatiser le déploiement d'une application web depuis GitHub.

## Structure du projet

- `Jenkinsfile`: Configuration du pipeline CI/CD
- `inventory.ini`: Fichier d'inventaire Ansible définissant les hôtes cibles
- `deploy.yml`: Playbook Ansible pour le déploiement de l'application
- `app/`: Répertoire contenant une application web simple pour démonstration

## Prérequis

- Jenkins installé et configuré
- Plugins Jenkins: Git, GitHub Integration, Ansible
- Ansible installé sur le serveur Jenkins ou sur les machines cibles
- Accès à un dépôt GitHub

## Configuration

1. Importez ce projet dans un dépôt GitHub
2. Configurez Jenkins avec les plugins nécessaires
3. Créez un job pipeline dans Jenkins pointant vers votre dépôt
4. Adaptez les chemins dans le Jenkinsfile selon votre environnement
5. Modifiez l'inventaire Ansible pour cibler vos serveurs

## Exécution

Déclenchez le pipeline manuellement depuis Jenkins ou configurez un webhook GitHub pour l'automatisation.
