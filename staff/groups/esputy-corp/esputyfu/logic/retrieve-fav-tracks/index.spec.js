{
    const { random } = Math

    describe('logic - retrieve fav tracks', () => {
        describe('when the user logged', () => {
            beforeEach(() => {
                user = {
                    name: 'Miguel-' + random(),
                    surname: 'Bose-' + random(),
                    username: 'mibo-' + random(),
                    password: '123-' + random(),
                    favorites: []
                }
            })

            describe('when are you search for a song', () => {

                let credentials

                beforeEach(() => {
                    user.favorites.push(wonderwall, iNeedMyGirl, elephantGun)

                    return call('https://skylabcoders.herokuapp.com/api/user', 'post', { 'content-type': 'application/json' }, JSON.stringify(user))
                        .then(response => {
                            if (response.status === 'KO') throw new Error(response.error)

                            return call('https://skylabcoders.herokuapp.com/api/auth', 'post', { 'content-type': 'application/json' }, JSON.stringify({ username: user.username, password: user.password }))
                                .then(response => {
                                    if (response.status === 'KO') throw new Error(response.error)

                                    credentials = response.data
                                })
                        })
                })

                it('should succeed on matching criteria', () => {

                    return logic.searchTracks(credentials.id, credentials.token, 'wonderwall', '10')
                        .then(songs => {
                            expect(songs).toBeDefined()
                            expect(songs instanceof Array).toBeTruthy()
                            expect(songs.length).toBe(10)

                            let favorites = 3

                            songs.forEach(track => {
                                expect(track.url).toBeDefined()
                                expect(track.linkAlbum).toBeDefined()
                                expect(track.nameAlbum).toBeDefined()
                                expect(track.releaseDate).toBeDefined()
                                expect(track.linkkArtist).toBeDefined()
                                expect(track.nameArtist).toBeDefined()
                                expect(track.explicit).toBeDefined()
                                expect(track.linkTrack).toBeDefined()
                                expect(track.idTrack).toBeDefined()
                                expect(track.nameTrack).toBeDefined()
                                expect(track.popularity).toBeDefined()
                                expect(track.previewUrl).toBeDefined()
                            })

                            expect(favorites).toBe(user.favorites.length)
                        })
                })

                it('should succeed on matching criteria when capital letters are used', () => {
                    return logic.searchTracks(credentials.id, credentials.token, 'WONDERWAL', '1')
                        .then(songs => {
                            expect(songs).toBeDefined()
                            expect(songs instanceof Array).toBeTruthy()
                            expect(songs.length).toBe(1)
                        })
                })

                it('should succeed on matching criteria when you enter a name with whitespaces between words', () => {
                    return logic.searchTracks(credentials.id, credentials.token, 'i Need My Girl', '1')
                        .then(songs => {
                            expect(songs).toBeDefined()
                            expect(songs instanceof Array).toBeTruthy()
                            expect(songs.length).toBe(1)
                        })
                })

                it('should succeed on matching criteria when you enter a name with whitespaces from both ends of a string', () => {
                    return logic.searchTracks(undefined, undefined, '      wonderwall               ', '1')
                        .then(songs => {
                            expect(songs).toBeDefined()
                            expect(songs instanceof Array).toBeTruthy()
                            expect(songs.length).toBe(1)
                        })
                })

                it('should submit a send whitout result', () => {
                    return logic.searchTracks(undefined, undefined, 'gfdsgdfs', '1')
                        .then(songs => {
                            expect(songs).toBeDefined()
                            expect(songs instanceof Array).toBeTruthy()
                            expect(songs.length).toBe(0)
                        })
                })
            })

            describe('when user already has favorite songs', () => {
                let credentials

                beforeEach(() => {
                    user.favorites.push(wonderwall, iNeedMyGirl, elephantGun)

                    return call('https://skylabcoders.herokuapp.com/api/user', 'post', { 'content-type': 'application/json' }, JSON.stringify(user))
                        .then(response => {
                            if (response.status === 'KO') throw new Error(response.error)

                            return call('https://skylabcoders.herokuapp.com/api/auth', 'post', { 'content-type': 'application/json' }, JSON.stringify({ username: user.username, password: user.password }))
                                .then(response => {
                                    if (response.status === 'KO') throw new Error(response.error)

                                    credentials = response.data
                                })
                        })
                })

                it('should succeed on matching criteria', () => {

                    return logic.searchTracks(credentials.id, credentials.token, 'wonderwall', '10')
                        .then(songs => {
                            expect(songs).toBeDefined()
                            expect(songs instanceof Array).toBeTruthy()
                            expect(songs.length).toBe(10)

                            let favorites = 3
                            expect(favorites).toBe(user.favorites.length)

                            songs.forEach(track => {
                                expect(track.favorite).toBeDefined()
                            })

                            let count = 0

                            songs.forEach(track => {
                                track.favorite && count++
                            })

                            expect(count).toBe(1)

                        })
                })

                it('should return error: id user value is not a string', () =>
                    expect(() =>
                        logic.searchTracks(5345345, credentials.token, 'wonderwall', '20')
                    ).toThrowError('id user with value 5345345 is not a string')
                )

                it('should return error: token user value is not a string', () =>
                    expect(() =>
                        logic.searchTracks(credentials.id, 5345345, 'wonderwall', '20')
                    ).toThrowError('token user with value 5345345 is not a string')
                )
            })
        })
    })
}