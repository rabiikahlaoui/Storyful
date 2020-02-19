import got from "got";

const STORIES_SERVISE_URL = "http://stories-service:7100";

export default class StoriesService {
    static async fetchAllStories() {
        const body = await got.get(`${STORIES_SERVISE_URL}/stories`).json();
        return body;
    }
}