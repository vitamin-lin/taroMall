// const devURL = "http://localhost:3000"; // 开发环境，需要开启mock server（执行：gulp mock）

const devURL = 'https://archetype.kmtongji.com/'
const prodURL = 'TODO' // 生产环境，线上服务器

const BASE_URL = process.env.NODE_ENV === 'development' ? devURL : prodURL

export default BASE_URL
