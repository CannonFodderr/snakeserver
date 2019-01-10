const router = require('express').Router();
const User = require('../Models/User');

router.get('/leaderboards', (req, res) => {
    User.find().then((allUsers) => {
        const sorted = allUsers.sort((a, b) => {
            return a.score - b.score
        }).reverse();
        const top10 = sorted.filter(item => sorted.indexOf(item) < 10)
        res.json(top10);
    }).catch(err => console.error(err));
});

router.post('/leaderboards', (req, res) => {
    const data = req.body;
    User.findOne({'name': data.name}).then((user)=>{
        if(!user){
            User.create({name: data.name, score: data.score})
        } else if (user.score < data.score){
            user.score = data.score;
            user.save();
        }
        res.send("Post to leaderboards");
    }).catch(err => console.error(err));
    
})

module.exports = router;