import express from 'express'
// import { omit, merge } from 'ramda'
/* User */
import shortid from 'shortid'
import { hasProp } from '../lib/hasProp'
/* Dev */
import { red, yellow } from '../logger'

function randomInt(min, max) {
  min = Math.ceil(0)
  max = Math.floor(30)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const router = express.Router()

const events = [
  { id: shortid.generate(), name: 'e1', attendees: randomInt() },
  { id: shortid.generate(), name: 'e2', attendees: randomInt() },
  { id: shortid.generate(), name: 'e3', attendees: randomInt() },
]

router.get('/', async (req, res) => {
  try {
    const inserted = { data: events, meta: {} }
    yellow('inserted', inserted)
    res.send(inserted)
  } catch (e) {
    res.status(400).send('cannot get events')
  }
})

router.post('/', async (req, res) => {
  try {
    const event = req.body
    if (!hasProp('name', event) && !hasProp('attendees', event)) {
      res.status(400).send('mal-formed event')
    }
    events.push(event)
    res.status(201).send('event added')
  } catch (e) {
    res.status(400).send('error posting event')
  }
})

// router.get('/:id', async (req, res) => {
//   yellow('get/id')
//   const id = req.params.id
//   try {
//     let event = await findById('events', id)
//     if (!event) {
//       return res.status(404).send()
//     }
//     res.send(event)

//   } catch (e) {
//     res.status(400).send(e)
//   }
// })

// router.delete('/:id', async (req, res) => {
//   const id = req.params.id

//   try {
//     let event = await findOneAndDelete('events', id)
//     if (!event) {
//       return res.status(404).send()
//     }
//     res.send(event)
//   } catch (e) {
//     res.status(400).send()
//   }
// })

// router.patch('/:id', async (req, res) => {

//   try {
//     const id = req.params.id
//     const eventSent = req.body
//     const eventToReturn = await findOneAndUpdate(
//       'events',
//       id,
//       eventSent,
//     )
//     if (!eventToReturn) {
//       return res.status(404).send()
//     }
//     res.send(eventToReturn)
//   } catch (e) {
//     red('catch', e)
//     res.status(400).send()
//   }

// })

export default router
