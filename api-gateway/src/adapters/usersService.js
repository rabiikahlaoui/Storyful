import got from "got";

const USERS_SERVICE_URL = "http://users-service:7101";

export default class UsersService {
    static async createUser({ email, password }) {
        const body = await got.post(`${USERS_SERVICE_URL}/users`, {
            json: {
                email,
                password
            }
        }).json();
        return body;
    }

    static async createUserSession({ email, password }) {
        const body = await got.post(`${USERS_SERVICE_URL}/sessions`, {
            json: {
                email,
                password
            }
        }).json();
        return body;
    }
}
