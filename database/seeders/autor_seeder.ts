import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Autor from '../../app/models/autor.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    return await Autor.createMany([
      {
        nome: 'J.K. Rowling',
        biografia: 'Autora britânica, conhecida pela série Harry Potter.',
      },
      {
        nome: 'J.R.R. Tolkien',
        biografia: 'Autor britânico, conhecido pela série O Senhor dos Anéis.',
      },
      {
        nome: 'George R.R. Martin',
        biografia: 'Autor americano, conhecido pela série As Crônicas de Gelo e Fogo.',
      },
      {
        nome: 'Isaac Asimov',
        biografia: 'Autor russo-americano, conhecido por suas obras de ficção científica.',
      },
      {
        nome: 'Agatha Christie',
        biografia: 'Autora britânica, conhecida por seus romances policiais.',
      },
    ])
  }
}