const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'prueba_t',
  password: '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function ejecutarQuery(query = '', valores = []) {
  try {
    // Obtener una conexión del pool
    const [resultados] = await pool.query(query, valores);
    return resultados;
  } catch (error) {
    console.error('Hubo un error al ejecutar el query', error);
    throw error;
  }
}

module.exports = ejecutarQuery; //Exportar modulos
