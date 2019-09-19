{
    const { random } = Math

    describe('logic - authenticate user', () => {
        let user

        beforeEach(() => {
            user = {
                name: 'John-' + random(),
                surname: 'Doe-' + random(),
                username: 'johndoe-' + random() + '@mail.com',
                password: '123-' + random(),
                favorites: []
            }

            return call('http://localhost:8080/api/auth', 'post', { 'content-type': 'application/json' }, user)
                .then(response => {
                    if (response.status === 'KO') throw new Error(response.error)
                })
        })

        it('should succeed on correct data', () =>
            logic.authenticateUser(user.username, user.password)
                .then(credentials => {
                    expect(credentials).toBeDefined()

                    const { id, token } = credentials
                    expect(id).toBeDefined()
                    expect(token).toBeDefined()
                })
        )

        it('should fail on empty username', () =>
            expect(() =>
                logic.authenticateUser('', user.password)
            ).toThrowError(Error, 'username is empty or blank')
        )

        it('should fail on non-valid username', () =>
            expect(() =>
                logic.authenticateUser('manuelbarzi#gmail.com', '123')
            ).toThrowError(Error, 'username with value manuelbarzi#gmail.com is not a valid e-mail')
        )

    })
}