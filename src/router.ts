import { Application } from 'express'
import shelf from './route/shelf.route'
import search from './route/search.route'
import novel from './route/novel.route'
import user from './route/user.route'
import oauth from './route/oauth.route'
import weapp from './route/weapp.route'
import h5 from './route/h5.route'

export default function (app: Application) {
    app.get('/test', (req, res) => res.send('hello world'))

    // 书架
    app.post('/gysw/shelf', shelf.addShelf)                            // 往书架中添加一本小说
    app.delete('/gysw/shelf', shelf.removeShelf)                       // 在书架中删除一本小说
    app.get('/gysw/shelf', shelf.getShelfList)                         // 查询书架列表

    // 搜索
    app.get('/gysw/search/hist', search.getSearchHist)                 // 查询用户搜索历史
    app.get('/gysw/search/hot', search.getSearchHot)                   // 查询热门搜索
    app.get('/gysw/search/novel', search.getSearchNovel)               // 根据小说名/作者名查询小说列表

    // 小说
    app.get('/gysw/novel/content', novel.getNovelContent)              // 查看小说内容
    app.get('/gysw/novel/chapter', novel.getNovelChapter)              // 查看章节目录
    app.get('/gysw/novel/detail', novel.getNovelIntro)                 // 查看小说详情
    app.get('/gysw/novel/classify', novel.getNovelClassify)            // 查看小说分类 
    app.get('/gysw/novels', novel.getNovelList)                        // 查看小说列表 

    // 用户
    app.put('/gysw/user', user.updateUser)                              // 修改用户信息

    // 认证
    app.post('/gysw/oauth/signin', oauth.signin)                         // 登录
    app.post('/gysw/oauth/signup', oauth.signup)                         // 注册
    app.post('/gysw/oauth/vcode', oauth.sendVcode)                       // 发送短信验证码
    app.post('/gysw/oauth/resetpw', oauth.resetpw)                       // 重置密码
    app.post('/gysw/oauth/wxsignin', weapp.signin)                       // 微信小程序登录
    app.post('/gysw/oauth/h5signin', h5.signin)                          // h5登录
    app.get('/gysw/oauth/token', oauth.getToken)                         // 获取 token
}