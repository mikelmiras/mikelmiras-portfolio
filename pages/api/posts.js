import mysql from 'serverless-mysql';
export default async function handler(req, res){
    const db = mysql(
        {  
          config: {
            host: process.env.DBHOST,
            user: process.env.DBUSERNAME,
            password: process.env.DBPASS,
            database:process.env.DBNAME,
            charset:"utf8mb4",
          }
            });

            let data
            if (req.body.allowprivate == process.env.POST_PASS){
              data = await db.query('SELECT title, content, date, slug, public, id FROM posts ORDER BY date DESC');
            }else{
              data = await db.query('SELECT title, content, date, slug, public, id FROM posts WHERE public = 1 ORDER BY date DESC');
            }
            const updatedData = await Promise.all(data.map(async (item) => ({
              ...item,            
              tags:await db.query(`SELECT name, emoji, longname, color FROM colorenum
              JOIN posts_category ON posts_category.categoryid = colorenum.id
              JOIN posts ON posts.id = posts_category.postid
              WHERE posts.id = ?;`, [item.id])  
            })))
            await db.end();
            res.status(200).json({"status":true, "data":updatedData})

}