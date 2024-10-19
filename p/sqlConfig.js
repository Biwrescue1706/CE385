// ตัวอย่างการประกาศ sqlConfig

const sqlConfig = {
    user: '',
    password: '',
    server: '(LocalDb)\MSSQLLocalDB',
    database: 'Thailand',
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  };
  async function connectToDatabase() {
    try {
      await sql.connect(sqlConfig);
      console.log('Connected to database!');
    } catch (err) {
      console.error('Database connection failed:', err);
    }
  }
  
  connectToDatabase();