const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Lucero", "Luz")
        expect(user.username).toBe("Lucero")
        expect(user.name).toBe("Luz")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    
    test("2. Get all users data in a list", () => {
        const user = UserService.create(1, "Lucero", "Luz")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("Lucero")
        expect(userInfoList[2]).toBe("Luz")
        expect(userInfoList[3]).toBe("Sin bio")

    })
})