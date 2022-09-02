const cn = require('express')
const http = require('http')
const rutas = require('./routes.js')
var cors = require('cors')
const myconect = require('express-myconnection')
const mysql =require('mysql')
const app = cn()

app.use(cors())
app.set('port',process.env.PORT || 4000)
const dboption ={
	 host:'localhost',
       user:'root',
       password:'',
       port:3306,
       database:'tickets',
}
app.use(myconect(mysql,dboption,'single'))
app.use(cn.json())

//rutas

app.use('/api',rutas)
// correr server

app.listen(app.get('port'),()=>{
	console.log(" escuchaso ",app.get('port'))
})