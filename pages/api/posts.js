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

            let data
            if (req.body.allowprivate == process.env.POST_PASS){
              data = await db.query('SELECT title, content, date, slug, public FROM posts ORDER BY date DESC');
            }else{
              data = await db.query('SELECT title, content, date, slug, public FROM posts WHERE public = 1 ORDER BY date DESC');
            }
            await db.end();
            res.status(200).json({"status":true, "data":data})

}