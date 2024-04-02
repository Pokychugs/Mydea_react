const { Client } = require('pg');

const obtenerUsuario = async () => {

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

    const res = await client.query('SELECT * FROM Persona');
    const result = res.rows;
    await client.end();
    return result;

};

obtenerUsuario().then((result) => {
    console.log(result);
    
});