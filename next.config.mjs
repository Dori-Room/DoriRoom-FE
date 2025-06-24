/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',        // 정적 SPA로 빌드
    trailingSlash: true      // 라우팅 깨짐 방지
}

export default nextConfig;
