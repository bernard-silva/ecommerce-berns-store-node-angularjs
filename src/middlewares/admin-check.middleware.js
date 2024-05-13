export function adminCheckMiddleware(req, res, next) {
    if (req.user.admin) {
        return next()
    }

    return res.status(401).json({ message: 'Not authorized.' })
}
