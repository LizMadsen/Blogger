import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { blogApi } from "./AxiosService"

class BlogsService {
    async getAll() {
        const res = await blogApi.get('api/blogs')
        logger.log(res.data)
        AppState.blogs = res.data
    }
}


export const blogsService = new BlogsService()