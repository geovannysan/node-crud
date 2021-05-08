const express = require('express')
const routes = express.Router()

routes.get('/select', (req, res) => {
	req.getConnection((err, conn) => {
		if (err) return res.send(err)

		conn.query('SELECT * FROM productos', (err, rows) => {
			if (err) return res.send(err)

			res.json(rows)
		})
	})
})
routes.get('/:id', (req, res) => {
	req.getConnection((err, conn) => {
		if (err) return res.send(err)

		conn.query('SELECT * FROM productos where precio_unit = ?  ', [req.params.id], (err, rows) => {
			if (err) return res.send(err)

			res.json(rows)
		})
	})
})
routes.post('/turnos', (req, res) => {
	req.getConnection((err, conn) => {
		if (err) return res.send(err)

		conn.query('SELECT * FROM productos where precio_unit = ? and precio_dist = ?  ', [req.body.precio_unit, req.body.precio_dist], (err, rows) => {
			if (err) return res.send(err)
			res.json(rows)
		})
	})
})
routes.post('/', (req, res) => {
	req.getConnection((err, conn) => {
		if (err) return res.send(err)

		conn.query('INSERT INTO productos set ?', [req.body], (err, rows) => {
			if (err) return res.send(err)

			res.send('agregado')
		})
	})
})
routes.delete('/:id', (req, res) => {
	req.getConnection((err, conn) => {
		if (err) return res.send(err)

		conn.query('DELETE  FROM productos where id_prod = ?', [req.params.id], (err, rows) => {
			if (err) return res.send(err)

			res.send('eleiminado')
		})
	})
})
routes.put('/:id', (req, res) => {
	req.getConnection((err, conn) => {
		if (err) return res.send(err)

		conn.query('UPDATE  FROM productos set ? where id_prod = ?', [req.body, req.params.id], (err, rows) => {
			if (err) return res.send(err)

			res.send('libro actualizado')
		})
	})
})

module.exports = routes