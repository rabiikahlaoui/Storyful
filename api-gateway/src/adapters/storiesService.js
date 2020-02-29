import got from "got";

const USERS_SERVICE_URL = "http://stories-service:7100";

export default class StoriesService {
    static async fetchAllStories() {
        const body = await got.get(`${USERS_SERVICE_URL}/stories`).json();
        return body;
    }
}
