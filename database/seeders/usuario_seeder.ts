import { BaseSeeder } from '@adonisjs/lucid/seeders'

import Usuario from '../../app/models/usuario.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    return await Usuario.createMany([
      {
        nome: 'Admin User',
        email: 'admin@example.com',
      },
      {
        nome: 'Regular User',
        email: 'user@example.com',
      },
    ])
  }
}