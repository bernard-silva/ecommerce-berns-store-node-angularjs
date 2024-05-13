app.service('SessionService', function () {
    this.isAuthenticated = () => {
        const user = this.getUser();
        const token = this.getToken();

        if (!token || !user || !user.userId) {
            return false
        }

        if (Date.now() > user.exp * 1000) {
            return false
        }

        return true
    }

    this.getUser = () => {
        const token = this.getToken()
        if (!token) {
            return {}
        }

        const user = jwtDecode(token)
        return user
    }

    this.getToken = () => {
        const token = localStorage.getItem('token')
        return token
    }

    this.logout = (redirect = true) => {
        localStorage.removeItem('token')
        if (redirect) {
            location.href = '/login.html'
        }
    }

    this.verifyLogin = (redirect = true) => {
        if (!this.isAuthenticated()) {
            this.logout(redirect)
        }
    }

    this.createVerifyLoginInterval = (fn) => {
        setInterval(fn || this.verifyLogin, 10000)
    }
})