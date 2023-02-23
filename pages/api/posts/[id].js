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
            if (req.body.allowprivate == process.env.POST_PASS || req.cookies.auth == process.env.POST_PASS){
              data = await db.query("SELECT * FROM posts WHERE slug = ?", [req.query.id])
            }else{
              data = await db.query("SELECT * FROM posts WHERE public = 1 AND slug = ?", [req.query.id])
            }
            await db.end()
            console.log(data)
            if (data[0] == undefined){
              res.status(404).json({"status":false, "message":"404 Not found"})
            }else{
              res.status(200).json({"status":true, "data":data[0]})
            }
            
}