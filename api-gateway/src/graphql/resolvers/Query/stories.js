import StoriesService from "#root/adapters/storiesService";

const storiesResolver = async () => {
    return await StoriesService.fetchAllStories();
};

export default storiesResolver;
