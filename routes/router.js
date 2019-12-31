const {Router} = require('express')
const router = Router()
const Message = require('../models/Message')

router.get('/', async(req,res) => {
    const post = await Message.find({})

    res.render('index', {
        title_of_page: 'index',
        fptext: 'u message',
        isIndex: true,
        post
    })
})

router.get('/create', (req,res) => {
    res.render('create', {
        title_of_page: 'create message',
        isCreate: true
    })
})

router.post('/create', async(req,res) => {
      const post = new Message({
        title: req.body.title,
        message: req.body.message
    })
    console.log(post)
    
    await post.save()
    res.redirect('/')
})

module.exports = router