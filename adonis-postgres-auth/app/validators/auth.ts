import vine from '@vinejs/vine'

export const registerValidation = vine.compile(
  vine.object({
    fullName: vine.string().maxLength(50),
    email: vine.string().email().normalizeEmail(),
    password: vine.string().minLength(8),
  })
)
