 import type { HttpContext } from '@adonisjs/core/http'

import Livro from "#models/livro"

export default class LivrosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Livro.query().paginate(page, perPage)

    }

    async show({ params }: HttpContext) {

        return await Livro.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['titulo','descricao'])

        return await Livro.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const produto = await Livro.findOrFail(params.id)
        const dados = request.only([])

        produto.merge(dados)
        return await produto.save()

    }

    async destroy({ params }: HttpContext) {
        const produto = await Livro.findOrFail(params.id)

        await produto.delete()
        return { msg: 'registro deletado com sucesso', Livro }

    }
}     

