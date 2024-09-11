const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Middleware pour traiter les données POST du formulaire
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serveur de fichiers statiques (comme le HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route pour l'API Facebook
app.post('/api/post-to-facebook', async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: "Les champs 'title' et 'description' sont requis." });
    }

    // Remplacez par votre access token de la page Facebook
    const pageAccessToken = 'EAAFFsZADJq0kBO25iV1EUZBh3Wp3xsOoWx394IXsl74BQTtWXlZCOaZArLIIRnO6tNTDO0SZC9JXLxMRK0skU9YpkAz2BEy8VxgTum7x2keJZCnSX52b1ZBJzrbiWfK6MXzU2ZA8Oq7kH4pGRKm3HCJu1MhVMBZAuoZBxgZBoSIiIqhto1OsZAEPTqFvTkfZChwZDZD';
    const pageId = '358103917374281';
    const url = `https://graph.facebook.com/v17.0/${pageId}/feed`;

    try {
        const response = await axios.post(url, {
            message: `${title}\n\n${description}`,
            access_token: pageAccessToken
        });

        if (response.data.id) {
            return res.json({ message: 'Publication réussie sur Facebook !', postId: response.data.id });
        } else {
            return res.status(500).json({ error: "Erreur lors de la publication. Veillez entrer un token ayant les permissions requises", response: response.data });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Erreur lors de la requête à l\'API Facebook.', details: error.message });
    }
});

// Route pour renvoyer l'interface HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Lancer le serveur
app.listen(3000, () => {
    console.log('Serveur Express en cours d\'exécution sur le port 3000');
});

module.exports = app; // Exporter pour Vercel
