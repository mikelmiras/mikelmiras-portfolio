import mysql from 'serverless-mysql';
export default async function handler(req, res){
    
    const db = mysql(
        {  
          config: {
            host: process.env.DBHOST,
            user: process.env.DBUSERNAME,
            password: process.env.DBPASS,
            database:process.env.DBNAME
          }
            });
            const data = await db.query("SELECT * FROM posts WHERE slug = ?", [req.query.id])
            await db.end()
    res.status(200).json({"status":true, "data":data[0]})
}