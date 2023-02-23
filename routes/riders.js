const express = require('express')

const Team = require('../models/team')

const router = express.Router()

router.route('/teams/:teamId/riders')
  .post((req, res) => {
    Team.findById(req.params.teamId)
      .then(team => {
        const rider = new Rider({
          rider: req.body.rider,
          number: req.body.number,
          country: req.body.country,
          mechanic: req.body.mechanic
        })
        team.riders.push(rider)
        team.save()
          .then(() => res.json({
            success: true,
            message: `Rider "${rider.rider}" was successfully created!`
          }))
          .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  })

router.route('/teams/:teamId/riders/:id')
  .get((req, res) => {
    Team.findById(req.params.teamId)
      .then(team => {
        const rider = team.riders.id(req.params.id)
        res.json(rider)
      })
      .catch(err => res.json(err))
  })
  .put((req, res) => {
    Team.findById(req.params.teamId)
      .then(team => {
        const rider = team.riders.id(req.params.id)
        rider.set({
          rider: req.body.rider,
          number: req.body.number,
          country: req.body.country,
          mechanic: req.body.mechanic
        })
        team.save()
          .then(() => res.json({
            success: true,
            message: `Rider "${rider.rider}" was successfully updated!`
          }))
          .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  })
  .delete((req, res) => {
    Team.findById(req.params.teamId)
      .then(team => {
        const rider = team.riders.id(req.params.id)
        rider.remove()
        team.save()
          .then(() => res.json({
            success: true,
            message: `Rider "${rider.rider}" was successfully deleted!`
          }))
          .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  })

module.exports = router
