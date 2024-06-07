import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Livro from '../../app/models/livro.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    return await Livro.createMany([
      {
        titulo: 'Harry Potter e a Pedra Filosofal',
        descricao: 'Primeiro livro da série Harry Potter.',
        autor_id:1,
        categoria_id:1
      },
      {
        titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
        descricao: 'Primeiro livro da série O Senhor dos Anéis.',
        autor_id:2,
        categoria_id:2
      },

    ])
  }
}