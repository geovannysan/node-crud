const cn = require('express')
const rutas = require('./routes.js')
const myconect = require('express-myconnection')
const mysql =require('mysql')

const app = cn()
app.set('port',process.env.PORT || 9000)
const dboption ={
	 host:'localhost',
       user:'root',
       password:'',
       port:3306,
       database:'tutoriales_estadistica',
}
app.use(myconect(mysql,dboption,'single'))
app.use(cn.json())

//rutas
app.get('/',(req,res)=>{
	res.send("que engorroso")
})
app.use('/api',rutas)
// correr server
app.listen(app.get('port'),()=>{
	console.log("esta escuchaso xd",app.get('port'))
})