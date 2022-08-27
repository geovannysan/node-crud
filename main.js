const cn = require('express')
const http = require('http')
const rutas = require('./routes.js')
var cors = require('cors')
const myconect = require('express-myconnection')
const mysql =require('mysql')
const app = cn()
const servidor = http.createServer(app)
const socketio = require('socket.io')
const io = socketio(servidor)



io.on('connect', socket=>{
	socket.on('conectado',()=>{
		console.log("usuario Conectado")
	})
})
app.use(cors())
app.set('port',process.env.PORT || 4000)
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
	console.log(" escuchaso ",app.get('port'))
})