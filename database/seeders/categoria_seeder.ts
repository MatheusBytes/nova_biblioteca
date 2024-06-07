import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Categoria from '../../app/models/categoria.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    return await Categoria.createMany([
      {
        nome: 'Fantasia',
        descricao: 'Livros de fantasia com elementos mágicos e mundos imaginários.',
      },
      {
        nome: 'Ficção Científica',
        descricao: 'Livros de ficção científica com tecnologias avançadas e cenários futuristas.',
      },
      {
        nome: 'Romance',
        descricao: 'Livros de romance que focam em relacionamentos amorosos.',
      },
      {
        nome: 'Terror',
        descricao: 'Livros de terror que exploram temas assustadores e sobrenaturais.',
      },
      {
        nome: 'Biografia',
        descricao: 'Livros que narram a vida de pessoas reais.',
      },
    ])
  }
}