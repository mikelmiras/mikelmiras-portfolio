import mysql from 'serverless-mysql';
export default async function handler(req, res){
    const title = req.body.title
    const slug = req.body.slug
    const content = req.body.content
    const cookie = req.cookies
    let privacy = req.body.privacy
    if (cookie.auth != process.env.POST_PASS){
        res.status(401).json({"status":false, "message":"Unauthorized"})
        return;
    }
    if (!title || !slug || !content){
        res.status(400).json({"status":false, "message":"Bad request"})
        return;
    }
    const db = mysql(
        {  
          config: {
            host: process.env.DBHOST,
            user: process.env.DBUSERNAME,
            password: process.env.DBPASS,
            database:process.env.DBNAME
          }
            });
            try {const query = await db.query('INSERT INTO posts(title, content, slug, public) VALUES(?,?,?,?)', [title, content, slug, privacy])
            res.status(200).json({"status":true, "data":query})
        } catch(e){
            res.status(409).json({"status":false, "message":"409 Conflict. Specified item already exists"})
        }finally{
            await db.end()
        }

        }