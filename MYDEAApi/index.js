const express = require('express');
const cors = require('cors');
const { Client } = require("pg");
const bcrypt = require('bcrypt');

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('App escuchando en http://192.168.0.223:3000');
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/registro', async (req, res) => {
    try {
        const userData = req.body;
        await GuardarUsuario(userData.usuario, userData.contra, userData.tipo, userData.telefono, userData.correo, userData.nombre);
        res.json({ message: 'Usuario guardado correctamente' }); 
    } catch (error) {
        console.error('Error al guardar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

async function GuardarUsuario(usu_nombre, usu_pass, tip_id, per_telefono, per_correo, per_nombrereal) {
    const client = new Client({
        user: 'ipsrpxvnaqxiwm',
        host: 'ec2-100-26-73-144.compute-1.amazonaws.com',
        database: 'db3v6hean6n35q',
        password: '45a8d512e214c8aec0d15935b70c9addc631a10c65bc23296d0e2e2bd0b2f0a0',
        port: 5432,
        ssl: {
            rejectUnauthorized: false,
        },
    });

    await client.connect();

    try {
        const tiposValidos = ['1', '2'];
        if (!tiposValidos.includes(tip_id)) {
            throw new Error('Tipo de usuario inválido');
        }

        const queryUsuario = `
            INSERT INTO Usuario(usu_nombre, usu_password, tip_id) 
            VALUES($1, $2, $3)
            RETURNING usu_id`;

        const valuesUsuario = [usu_nombre, usu_pass, parseInt(tip_id)];
        const resultUsuario = await client.query(queryUsuario, valuesUsuario);

        const usu_id = resultUsuario.rows[0].usu_id;

        const queryPersona = `
            INSERT INTO Persona(usu_id, per_correo, per_telefono, per_nombrecompleto) 
            VALUES($1, $2, $3, $4)`;

        const valuesPersona = [usu_id, per_correo, per_telefono, per_nombrereal];
        await client.query(queryPersona, valuesPersona);

        console.log('Usuario y Persona guardados correctamente');
    } catch (error) {
        console.error('Error al guardar usuario y persona:', error);
    } finally {
        await client.end();
    }
}

app.post('/iniciosesion', async (req, res) => {
    try {
        const userData = req.body;
        await IniciarSesion(userData.usuario, userData.correo, userData.contra);
        res.json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(401).json({ error: 'Error interno del servidor' });
    }
});

async function IniciarSesion(usu_nombre, per_correo, usu_pass) {
    let client;
    try {
        client = new Client({
            user: 'ipsrpxvnaqxiwm',
            host: 'ec2-100-26-73-144.compute-1.amazonaws.com',
            database: 'db3v6hean6n35q',
            password: '45a8d512e214c8aec0d15935b70c9addc631a10c65bc23296d0e2e2bd0b2f0a0',
            port: 5432,
            ssl: {
                rejectUnauthorized: false,
            },
        });

        await client.connect();

        const query = `
            SELECT usu_password
            FROM Usuario
            WHERE usu_nombre = $1`;
        const result = await client.query(query, [usu_nombre]);

        if (result.rows.length === 0) {
            throw new Error('Usuario incorrecto');
        }

        const storedPassword = result.rows[0].usu_password;

        if (usu_pass !== storedPassword) {
            throw new Error('Contraseña incorrecta');
        }

        const queryCorreo = `
            SELECT per_correo
            FROM Persona
            WHERE usu_id = (SELECT usu_id FROM Usuario WHERE usu_nombre = $1)`;
        const resultCorreo = await client.query(queryCorreo, [usu_nombre]);

        if (resultCorreo.rows.length === 0 || resultCorreo.rows[0].per_correo !== per_correo) {
            throw new Error('Correo electrónico incorrecto');
        }

        return { message: 'Inicio de sesión exitoso' };

    } catch (error) {
        console.error('Credenciales inválidas', error);
        throw new Error('Credenciales inválidas');
    } finally {
        if (client) {
            await client.end();
        }
    }
}
