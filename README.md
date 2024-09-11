```markdown
# Facebook Post App

Cette application permet de publier des messages sur une page Facebook à l'aide d'un formulaire. L'application est déployée sur [Vercel](https://vercel.com).

## Fonctionnalités

- Publiez des titres et des descriptions sur une page Facebook.
- Interface simple avec formulaire d'envoi.
- Utilisation de l'API Graph de Facebook pour publier.

## Technologies utilisées

- **Express.js** : Serveur backend pour gérer les requêtes API.
- **Axios** : Pour envoyer des requêtes HTTP vers l'API Graph de Facebook.
- **HTML/CSS** : Interface utilisateur basique.
- **Vercel** : Hébergement et déploiement continu.

## Déploiement

L'application est déployée automatiquement via [Vercel](https://vercel.com) depuis un dépôt GitHub.

### Étapes de déploiement

1. Cloner le projet :
   ```bash
   git clone https://github.com/username/repository-name.git
   ```

2. Installer les dépendances :
   ```bash
   npm install 
   ```

3. Lancer l'application en local :
   ```bash
   npm start
   ```

4. Accédez à l'application sur `http://localhost:3000`.

### Déploiement sur Vercel

Le projet est connecté à GitHub pour un déploiement continu. Chaque mise à jour du dépôt sur la branche `main` déclenchera un déploiement automatique sur Vercel.

## Variables d'environnement

Pour publier sur une page Facebook, vous devez configurer le token d'accès à la page Facebook :

- `PAGE_ACCESS_TOKEN`: Votre token d'accès à la page Facebook.

Vous pouvez définir cette variable d'environnement directement sur Vercel dans les paramètres du projet.

## Contributions

Les contributions sont les bienvenues. Pour soumettre une modification, veuillez créer une nouvelle branche, y apporter vos modifications, puis ouvrir une Pull Request.

---

### 5. Flux de travail

- Chaque fois que vous mettez à jour votre dépôt GitHub (par exemple en poussant des changements via `git push`), Vercel redéploiera automatiquement la dernière version de votre projet.

En suivant ces étapes, vous aurez un déploiement continu sur Vercel, et les utilisateurs pourront interagir avec votre interface pour publier des messages sur Facebook.