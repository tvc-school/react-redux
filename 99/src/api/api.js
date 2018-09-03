import fetchJson from './api-helpers'
import { red } from 'logger'

/* Dev */
// eslint-disable-next-line
import { pink } from 'logger'

export default {
  users: {
    async register(user) {
      const data = await fetchJson(
        '/users',
        {
          method: 'POST',
          body: JSON.stringify(user)
        }
      )
      pink('data returned from api.users.register: ', data)
      return data.data
    },
    async login(user) {
      pink('api.users.login: ', user)
      try {
        const data = await fetchJson(
          '/users/login',
          {
            method: 'POST',
            body: JSON.stringify(user)
          }
        )
        pink('data returned from api.users.login: ', data)
        return data.data
      }
      catch (e) {
        red('error in api.users.login', e)
        throw e
      }
    },
    logout(user) {
      return new Promise(function (resolve, reject) {
        resolve('Will call remove token in action creator')
      })
    },
    async update(password) {
      pink('api.users.update: ', password)
      try {
        const data = await fetchJson(
          '/user',
          {
            method: 'PUT',
            body: JSON.stringify(password)
          }
        )
        pink('data returned from api.users.update: ', data)
        return data.data
      }
      catch (e) {
        red('error in api.users.update', e)
      }
    }
  },
  events: {
    async create(event) {
      // pink('api.events.create: event', event)
      try {
        const data = await fetchJson(
          '/events',
          {
            method: 'POST',
            body: JSON.stringify(event)
          }
        )
        // pink('api.events.create: data', data)
        return data.data
      }
      catch (e) {
        red('api.events.create', e)
      }

    },
    async read(user) {
      try {
        const data = await fetchJson(
          '/events',
          {
            method: 'GET',
          }
        )
        pink('api.events.read: data', data)
        return data.data
      }
      catch (e) {
        red('api.events.read', e)
      }
    },
    async patch(event) {
      try {
        // pink('api.patch: event', event)
        const _id = event._id
        const data = await fetchJson(
          `/events/${_id}`,
          {
            method: 'PATCH',
            body: JSON.stringify(event)
          }
        )
        // pink('api.patch: data', data)
        return data.data
      }
      catch (e) {
        red('api.events.patch', e)
      }
    },
    async delete(id) {
      // pink('api.delete: id', id)
      try {
        const data = await fetchJson(
          `/events/${id}`,
          {
            method: 'DELETE'
          }
        )
        // pink('api.delete: data', data)
        return data.data
      }
      catch (e) {
        red('api.events.delete', e)
      }
    },
    async search(searchText) {
      // pink('api.events.search: searchText', searchText)
      const searchUrl = '/search?searchTerm=' + JSON.stringify(searchText)
      const data = await fetchJson(
        searchUrl,
        {
          method: 'GET',
        }
      )
      // pink('api.search: data', data.data)
      return data.data
    },
  },
}
