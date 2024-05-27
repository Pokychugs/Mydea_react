const express = require('express');
const cors = require('cors');
const { Client } = require("pg");
const bcrypt = require('bcrypt'); //Ya no utilizo
const moment = require('moment');
const { Pool } = require("pg");

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('App escuchando en http://192.168.0.223:3000');
});

/*
const pool = new Pool({
    user: 'ipsrpxvnaqxiwm',
    host: 'ec2-100-26-73-144.compute-1.amazonaws.com',
    database: 'db3v6hean6n35q',
    password: '45a8d512e214c8aec0d15935b70c9addc631a10c65bc23296d0e2e2bd0b2f0a0',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});
*/

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'MydeaLocal',
    password: 'FunnyValentine4',
    port: 5432,
    ssl: false,
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
    const client = await pool.connect();

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
        client.release();
    }
}

async function verificarCorreoExistente(per_correo) {
    const client = await pool.connect();

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
        client.release();
    }
}

async function GuardarUsuario(usu_nombre, usu_pass, tip_id, per_telefono, per_correo, per_nombrereal) {
    const client = await pool.connect();

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
        client.release();
    }
}

//INICIAR SESIÓN
app.post('/iniciosesion', async (req, res) => {
    try {
        const userData = req.body;
        await IniciarSesion(userData.usuario, userData.correo, userData.contra);
        const usuarioData = await obtenerDatosUsuario(userData.usuario);
        const guardadosData = await obtenerDatosGuardados(usuarioData.personaId);
        res.json({ message: 'Inicio de sesión exitoso', usuario: usuarioData, guardados: guardadosData });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(401).json({ error: 'Error interno del servidor' });
    }
});

async function IniciarSesion(usu_nombre, per_correo, usu_pass) {
    const client = await pool.connect();
    try {

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
            client.release();
        }
    }
}

async function obtenerDatosUsuario(usu_nombre) {
    const client = await pool.connect();
    try {

        const queryUsuario = `SELECT 
            u.usu_id,
            u.usu_nombre,
            u.usu_password,
            u.usu_activo,
            u.tip_id,
            p.per_id,
            p.usu_id AS persona_usu_id,
            p.per_correo,
            p.per_telefono,
            p.per_foto,
            p.per_nombrecompleto,
            p.per_facebook,
            p.per_instagram,
            p.per_twitter,
            p.per_web,
            p.per_fecha,
            p.per_descripcion
        FROM 
            Usuario u
        JOIN 
            Persona p ON u.usu_id = p.usu_id
        WHERE 
            u.usu_nombre = $1;`;

            const resUsuario = await client.query(queryUsuario, [usu_nombre]);
            const usuarioData = {
                id: resUsuario.rows[0].usu_id,
                nombre: resUsuario.rows[0].usu_nombre,
                password: resUsuario.rows[0].usu_password,
                activo: resUsuario.rows[0].usu_activo,
                tipoId: resUsuario.rows[0].tip_id,
                personaId: resUsuario.rows[0].per_id,
                personaUsuId: resUsuario.rows[0].persona_usu_id,
                correo: resUsuario.rows[0].per_correo,
                telefono: resUsuario.rows[0].per_telefono,
                foto: resUsuario.rows[0].per_foto,
                nombreCompleto: resUsuario.rows[0].per_nombrecompleto,
                facebook: resUsuario.rows[0].per_facebook,
                instagram: resUsuario.rows[0].per_instagram,
                twitter: resUsuario.rows[0].per_twitter,
                web: resUsuario.rows[0].per_web,
                fecha: resUsuario.rows[0].per_fecha,
                descripcion: resUsuario.rows[0].per_descripcion
            };
            return  usuarioData;
    } catch (error) {
        console.error('Error al obtener datos de los negocios:', error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}

async function obtenerDatosGuardados(personaId) {
    const client = await pool.connect();
    try {
        const queryGuardados = `
            SELECT n.neg_id, n.neg_logo, n.neg_descripcion, n.neg_nombre 
            FROM negocio n 
            INNER JOIN guardado g ON n.neg_id = g.neg_id 
            WHERE g.per_id = $1;
        `;
        const resGuardados = await client.query(queryGuardados, [personaId]);
        // Mapear los resultados y devolverlos
        const guardadosData = resGuardados.rows.map(row => ({
            id: row.neg_id,
            logo: row.neg_logo,
            descripcion: row.neg_descripcion,
            nombre: row.neg_nombre
        }));
        return guardadosData;
    } catch (error) {
        console.error('Error al obtener datos guardados:', error);
        throw error;
    } finally {
        client.release();
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
    const client = await pool.connect();
    try {

        const queryNegocios = `
        SELECT n.neg_id, n.neg_logo, n.neg_nombre, d.dir_colonia, d.dir_calle, d.dir_numero, d.dir_cp, 
        COUNT(f.fed_like) AS likes, COUNT(f.fed_comentario) AS comentarios
        FROM Negocio n
        LEFT JOIN Direccion d ON n.dir_id = d.dir_id
        LEFT JOIN Feedback f ON n.neg_id = f.neg_id
        GROUP BY n.neg_id, n.neg_logo, n.neg_nombre, d.dir_colonia, d.dir_calle, d.dir_numero, d.dir_cp
        LIMIT 5;
        `;

        const resultNegocios = await client.query(queryNegocios);
        if (resultNegocios.rows.length === 0) {
            throw new Error('No se encontraron datos de negocios');
        }

        const negociosData = resultNegocios.rows.map(negocio => ({
            negocioid: negocio.neg_id,
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
            client.release();
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
    const client = await pool.connect();
    try {

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

app.get('/negocio/:id', async (req, res) => {
    const negocioId = req.params.id;
    try {
        const negocioData = await DatosNegocioIndividual(negocioId);
        console.log(negocioData);
        res.json(negocioData);
    } catch (error) {
        console.error('Error al obtener datos del negocio:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

async function DatosNegocioIndividual(neg_id) {
    const client = await pool.connect();
    try {
        const queryNegocio = `
            SELECT n.*, u.usu_nombre, p.per_id, p.per_foto from 
            Negocio n 
            inner join Persona p 
            on p.per_id=n.per_id 
            inner join Usuario u on p.usu_id=u.usu_id 
            where n.neg_id=$1;
        `;
        const resNegocio = await client.query(queryNegocio, [neg_id]);
        const negocioData = resNegocio.rows.map(row => ({
            correo: row.neg_correo,
            telefono: row.neg_telefono,
            logo: row.neg_logo,
            descripcion: row.neg_descripcion,
            facebook: row.neg_facebook,
            instagram: row.neg_instagram,
            twitter: row.neg_twitter,
            web: row.neg_web,
            nombre: row.neg_nombre,
            imagen_1: row.neg_imagen1,
            imagen_2: row.neg_imagen2,
            imagen_3: row.neg_imagen3,
            foto: row.per_foto
        }));
        return negocioData;
    } catch (error) {
        console.error('Error al obtener datos guardados:', error);
        throw error;
    } finally {
        client.release();
    }
}