const express = require('express')
const routes = express.Router()

routes.get('/eventos', (req, res) => {
	req.getConnection((err, conn) => {

		if (err) return res.send(err)

		conn.query('SELECT * FROM eventos', (err, rows) => {
			if (err) return res.send(err)

			res.json(rows)
		})
	})
})
routes.post('/usuario',(req,res)=>{	
	req.getConnection((err, conn) => {
		if (err) return res.send(err)	
		conn.query('INSERT INTO usuario set ?', [req.body], (err, rows) => {
			if (err) return res.send(err)

			res.json(rows)
		})
	})
})


module.exports = routes