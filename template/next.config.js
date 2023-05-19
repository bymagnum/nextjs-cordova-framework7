/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    // fix proxy compress gzip false
    compress: false,
    async headers() {
        return [{
            source: '/:path*',
            headers: [{
                // fix proxy Connection: keep-alive
                key: 'Connection',
                value: 'keep-alive',
            }],
        }]
    },
}
