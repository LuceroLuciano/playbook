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

    test("3. Update the param username", () => {
        const user = UserService.create(1, "lucero", "luss")
        const userUpdate = UserService.updateUserUsername(user, "Lucero")
        expect(user.username).toBe("Lucero")
    })
    
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "Lucero1", "Luc")
        const user2 = UserService.create(1, "Lucero2", "Luc")
        const user3 = UserService.create(1, "Lucero3", "Luc")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("Lucero1")
        expect(usernames).toContain("Lucero2")
        expect(usernames).toContain("Lucero3")
    })
})