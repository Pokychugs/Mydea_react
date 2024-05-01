const express = require('express');
const cors = require('cors');
const { Client } = require("pg");
const bcrypt = require('bcrypt'); //Ya no utilizo
const moment = require('moment');

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('App escuchando en http://192.168.0.223:3000');
});

//REGISTRO
app.post('/registro', async (req, res) => {
    try {
        const userData = req.body;
        const usuarioExistente = await verificarUsuarioExistente(userData.usuario);
        const correoExistente = await verificarCorreoExistente(userData.correo);
        
        if (usuarioExistente) {
            return res.status(400).json({ error: 'El nombre de usuario ya está en uso' });
        }

        if (correoExistente) {
            return res.status(400).json({ error: 'El correo electrónico ya está en uso' });
        }

        await GuardarUsuario(userData.usuario, userData.contra, userData.tipo, userData.telefono, userData.correo, userData.nombre);
        res.json({ message: 'Usuario guardado correctamente' }); 

    } catch (error) {
        console.error('Error al guardar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

async function verificarUsuarioExistente(usu_nombre) {
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

    /*const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'MydeaLocal',
        password: 'FunnyValentine4',
        port: 5432,
        ssl: false,
    });*/

    await client.connect();

    try {
        const queryUsuarioExistente = `
            SELECT COUNT(*) AS count
            FROM Usuario
            WHERE usu_nombre = $1`;

        const result = await client.query(queryUsuarioExistente, [usu_nombre]);
        return parseInt(result.rows[0].count) > 0;
    } catch (error) {
        console.error('Error al verificar usuario existente:', error);
        return false;
    } finally {
        await client.end();
    }
}

async function verificarCorreoExistente(per_correo) {
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

    /*const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'MydeaLocal',
        password: 'FunnyValentine4',
        port: 5432,
        ssl: false,
    });*/

    await client.connect();

    try {
        const queryCorreoExistente = `
            SELECT COUNT(*) AS count
            FROM Persona
            WHERE per_correo = $1`;

        const result = await client.query(queryCorreoExistente, [per_correo]);
        return parseInt(result.rows[0].count) > 0;
    } catch (error) {
        console.error('Error al verificar correo existente:', error);
        return false;
    } finally {
        await client.end();
    }
}

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

    /*const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'MydeaLocal',
        password: 'FunnyValentine4',
        port: 5432,
        ssl: false,
    });*/

    await client.connect();

    try {
        const tiposValidos = ['1', '2'];
        if (!tiposValidos.includes(tip_id)) {
            throw new Error('Tipo de usuario inválido');
        }

        const per_fecha = moment().format('YYYY-MM-DD');

        const queryUsuario = `
            INSERT INTO Usuario(usu_nombre, usu_password, tip_id) 
            VALUES($1, $2, $3)
            RETURNING usu_id`;

        const valuesUsuario = [usu_nombre, usu_pass, parseInt(tip_id)];
        const resultUsuario = await client.query(queryUsuario, valuesUsuario);

        const usu_id = resultUsuario.rows[0].usu_id;

        const queryPersona = `
            INSERT INTO Persona(usu_id, per_correo, per_telefono, per_nombrecompleto, per_fecha) 
            VALUES($1, $2, $3, $4, $5)`;

        const valuesPersona = [usu_id, per_correo, per_telefono, per_nombrereal, per_fecha];
        await client.query(queryPersona, valuesPersona);

        console.log('Usuario y Persona guardados correctamente');
    } catch (error) {
        console.error('Error al guardar usuario y persona:', error);
    } finally {
        await client.end();
    }
}

//INICIAR SESIÓN
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

        /*const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'MydeaLocal',
            password: 'FunnyValentine4',
            port: 5432,
            ssl: false,
        });*/

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

//VISUALIZAR NEGOCIOS INICIO
app.get('/inicionegocio', async (req, res) => {
    try {
        const negocioData = await obtenerDatosNegocios();
        res.json(negocioData);
    } catch (error) {
        console.error('Error al obtener datos del negocio:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

async function obtenerDatosNegocios() {
    let client;
    try {

        /*const client = new Client({
            user: 'ipsrpxvnaqxiwm',
            host: 'ec2-100-26-73-144.compute-1.amazonaws.com',
            database: 'db3v6hean6n35q',
            password: '45a8d512e214c8aec0d15935b70c9addc631a10c65bc23296d0e2e2bd0b2f0a0',
            port: 5432,
            ssl: {
                rejectUnauthorized: false,
            },
            });*/

        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'MydeaLocal',
            password: 'MydeaEthev4*',
            port: 5432,
            ssl: false,
        });

        await client.connect();

        const queryNegocios = `
        SELECT n.neg_logo, n.neg_nombre, d.dir_colonia, d.dir_calle, d.dir_numero, d.dir_cp, 
        COUNT(f.fed_like) AS likes, COUNT(f.fed_comentario) AS comentarios
        FROM Negocio n
        LEFT JOIN Direccion d ON n.dir_id = d.dir_id
        LEFT JOIN Feedback f ON n.neg_id = f.neg_id
        GROUP BY n.neg_logo, n.neg_nombre, d.dir_colonia, d.dir_calle, d.dir_numero, d.dir_cp
        LIMIT 5;
        `;

        const resultNegocios = await client.query(queryNegocios);
        if (resultNegocios.rows.length === 0) {
            throw new Error('No se encontraron datos de negocios');
        }

        const negociosData = resultNegocios.rows.map(negocio => ({
            imagen: negocio.neg_logo,
            nombre: negocio.neg_nombre,
            direccion: {
                colonia: negocio.dir_colonia,
                calle: negocio.dir_calle,
                numero: negocio.dir_numero,
                cp: negocio.dir_cp
            },
            likes: parseInt(negocio.likes),
            comentarios: parseInt(negocio.comentarios),
        }));
        
        return negociosData;
    } catch (error) {
        console.error('Error al obtener datos de los negocios:', error);
        throw error;
    } finally {
        if (client) {
            await client.end();
        }
    }
}

//VISUALIZAR PRODUCTOS INICIO
app.get('/inicioproducto', async (req, res) => {
    try {
        const productoData = await obtenerDatosProductos();
        res.json(productoData);
    } catch (error) {
        console.error('Error al obtener datos de los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

async function obtenerDatosProductos() {
    let client;
    try {

        /*const client = new Client({
            user: 'ipsrpxvnaqxiwm',
            host: 'ec2-100-26-73-144.compute-1.amazonaws.com',
            database: 'db3v6hean6n35q',
            password: '45a8d512e214c8aec0d15935b70c9addc631a10c65bc23296d0e2e2bd0b2f0a0',
            port: 5432,
            ssl: {
                rejectUnauthorized: false,
            },
            });*/

        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'MydeaLocal',
            password: 'MydeaEthev4*',
            port: 5432,
            ssl: false,
        });

        await client.connect();

        const queryProductos = `
        SELECT p.pro_imagen, p.pro_nombre, p.pro_precio, p.pro_descripcion
        FROM Producto p
        GROUP BY p.pro_imagen, p.pro_nombre, p.pro_precio, p.pro_descripcion
        LIMIT 5;
        `;

        const resultProductos = await client.query(queryProductos);
        if (resultProductos.rows.length === 0) {
            throw new Error('No se encontraron datos del productos');
        }

        const productosData = resultProductos.rows.map(producto => ({
            imagen: producto.pro_imagen,
            nombre: producto.pro_nombre,
            precio: producto.pro_precio,
            descripcion: producto.pro_descripcion,
        }));
        
        return productosData;
    } catch (error) {
        console.error('Error al obtener datos de los productos:', error);
        throw error;
    } finally {
        if (client) {
            await client.end();
        }
    }
}