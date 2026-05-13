const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken")

async function userDetails(request, response) {
    try {
        const token = request.cookies.token || ""
        const user = await getUserDetailsFromToken(token)

        return response.status(200).json({
            message: "User details",
            data: user,
        });
    } catch (error) {
        return response.status(401).json({
            message: error.message || "Unauthorized",
            error: true,
        });
    }
}

module.exports = userDetails