// 200
// 400
// 500

export const responseAPI = (res, code, data, message) => {
    res.status(code).json({
        data: data,
        message: message,
        date: new Date()
    })
}