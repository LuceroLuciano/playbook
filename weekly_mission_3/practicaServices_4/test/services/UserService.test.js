const UserService = require('../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Luz", "Lucero")
        expect(user.username).toBe("Lucero")
        expect(user.name).toBe("Lux")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})