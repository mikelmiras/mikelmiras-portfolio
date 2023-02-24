import mysql from 'serverless-mysql';
export default async function handler(req, res){

    const db = mysql(
        {  
          config: {
            host: process.env.DBHOST,
            user: process.env.DBUSERNAME,
            password: process.env.DBPASS,
            database:process.env.DBNAME,
            charset: 'utf8mb4',
          }
            });
    
    
    const query = await db.query('SELECT * FROM colorenum');
    
    res.status(200).json({"status":true, "data":query})

}



    