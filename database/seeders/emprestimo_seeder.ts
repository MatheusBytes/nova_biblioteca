import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Emprestimo from '../../app/models/emprestimo.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    return await Emprestimo.createMany([
      {
        usuario_id: 1,
        livro_id:1,
        status: 'pendente'
      },
      {
        usuario_id: 2,
        livro_id:2,
        status: 'devolvido'
      },

    ])
  }
}