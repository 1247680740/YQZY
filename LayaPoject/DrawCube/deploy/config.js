module.exports = {
  projectName: '长方体正方体体积应用', // 项目名称
  pages: [// 生成的页面,数组是为了兼容多页项目的情况
    {
      html: 'index.html',
      name: '长方体正方体体积应用',
      key: 'vector-drawcube', // 会作为全app展示页配置文件中的key值,需要唯一
    }
  ],
  ossHost: '17zy-jiaoxue.oss-cn-beijing.aliyuncs.com',
  cdnHost: 'cdn-jiaoxue.17zuoye.cn',
  appBaseDir: 'https://cdn-jiaoxue.17zuoye.cn/{0}/apps',
  distDir: '../release/web', // 要上传的目录
  ossDir: 'vector-drawcube', // 传到oss的目录,存在会覆盖,不存在会自动生成,请保持和git项目一致,避免重复!
  webhook: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=ea4f7529-70e4-40a5-808a-b70e14ac24b0', // 需要通知的微信群的webhook
  apiToken: 'http://marathon.test.17zuoye.net/oss/getOssToken.vpage'// 请求token用的地址
}
