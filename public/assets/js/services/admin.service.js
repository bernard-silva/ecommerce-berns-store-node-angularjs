app.service('AdminService', function () {
    this.isAdmin = () => {
        const token = localStorage.getItem('token')
        if (!token) {
            return false
        }

        const user = jwtDecode(token)
        if (!user) {
            return false
        }

        return user.admin
    }

    this.verifyAdmin = () => {
        if (!this.isAdmin()) {
            location.href = '/'
        }
    }
})