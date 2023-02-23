const express = require('express')

const Team = require('../models/team')

const router = express.Router()

router.route('/teams')
  .get((req, res) => {
    Team.find({})
      .then(teams => res.json(teams))
      .catch(err => res.json(err))
  })
  .post((req, res) => {
    const team = new Team({
      team: req.body.team,
      manager: req.body.manager,
      manufacturer: req.body.manufacturer
    })
    team.save()
      .then(team => res.json({
        success: true,
        message: `Team "${team.team}" was successfully created!`
      }))
      .catch(err => res.json(err))
  })

router.route('/teams/:id')
  .get((req, res) => {
    Team.findById(req.params.id)
      .then(team => res.json(team))
      .catch(err => res.json(err))
  })
  .put((req, res) => {
    Team.findById(req.params.id)
      .then(team => {
        team.set({
          team: req.body.team,
          manager: req.body.manager,
          manufacturer: req.body.manufacturer
        })
        team.save()
          .then(team => res.json({
            success: true,
            message: `Team "${team.team}" was successfully updated!`
          }))
          .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  })
  .delete((req, res) => {
    Team.findByIdAndRemove(req.params.id)
      .then(team => res.json({
        success: true,
        message: `Team "${team.team}" was successfully deleted!`
      }))
      .catch(err => res.json(err))
  })

module.exports = router
