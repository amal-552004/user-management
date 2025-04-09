const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connexion à la base de données MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', // Change cela selon ta configuration
    database: 'user_management'
});

db.connect((err) => {
    if (err) {
        console.log('Erreur de connexion à la base de données: ', err);
    } else {
        console.log('Connecté à la base de données');
    }
});

// Routes pour gérer les utilisateurs
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Ajouter un utilisateur
app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

    db.query(query, [name, email, password], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de l\'utilisateur :', err);
            res.status(500).send('Erreur lors de l\'ajout de l\'utilisateur');
        } else {
            res.status(201).send('Utilisateur ajouté');
        }
    });
});


// Modifier un utilisateur
app.put('/users/:id', (req, res) => {
    const { name, email, password } = req.body;
    const { id } = req.params;

    const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
    db.query(query, [name, email, password, id], (err, result) => {
        if (err) {
            console.error('Erreur lors de la modification de l\'utilisateur :', err);
            res.status(500).send('Erreur lors de la modification de l\'utilisateur');
        } else {
            res.send('Utilisateur modifié');
        }
    });
});

// Supprimer un utilisateur
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression de l\'utilisateur :', err);
            res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
        } else {
            res.send('Utilisateur supprimé');
        }
    });
});
