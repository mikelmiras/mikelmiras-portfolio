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
            let privacy = + !(req.body.allowprivate == process.env.POST_PASS || req.cookies.auth == process.env.POST_PASS)
            if (privacy == 0){
              data = await db.query(`SELECT * FROM posts WHERE id IN (SELECT posts_category.postid FROM posts_category 
                JOIN colorenum ON colorenum.id = posts_category.categoryid
                WHERE colorenum.name = ?)`, [req.query.id])
              }else{
                data = await db.query(`SELECT * FROM posts WHERE id IN (SELECT posts_category.postid FROM posts_category 
                    JOIN colorenum ON colorenum.id = posts_category.categoryid
                    WHERE colorenum.name = ?) AND posts.public = 1`, [req.query.id])
              }
            if (data[0] == undefined){
              res.status(404).json({"status":false, "message":"404 Not found"})
            }else{
              const tags = await db.query(`SELECT name, emoji, longname, color FROM colorenum
              JOIN posts_category ON posts_category.categoryid = colorenum.id
              JOIN posts ON posts.id = posts_category.postid
              WHERE posts.id = ?;`, [data[0].id])
              await db.end()
              res.status(200).json({"status":true, "data":data, "tags":tags})
            }
            
}