const {Pool,Client}= require('pg')

const connectionString='postgressql://postgres:Mohit@7206@localhost:5432/test_db'

//Creating Client
const client= new Client({
    connectionString:connectionString
})


client.connect()
const qr=select * from test_db`, customers";
client.query(qr,(err,res)=> {
    console.log(err,res)
    client.end()
})
