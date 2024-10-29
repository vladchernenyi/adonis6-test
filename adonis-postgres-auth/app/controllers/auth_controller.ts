import type { HttpContext } from '@adonisjs/core/http'
import { registerValidation } from '#validators/auth'
import User from '#models/user'

export default class AuthController {
  async register(httpContext: HttpContext) {
    const { auth } = httpContext
  }

  async login({}: HttpContext) {}

  async logout({}: HttpContext) {}
}
