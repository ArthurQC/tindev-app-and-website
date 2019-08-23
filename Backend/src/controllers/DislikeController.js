const Dev = require('../models/Dev');
module.exports = {
    async store(req,res){
        
        const { user } = req.headers;
        const { devId } = req.params;

        try{
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev) {
            return res.status(400).json({ error: 'Dev not exists'});
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        res.status(200).json( loggedDev );
        }catch(err){
            res.status(400).json({error: 'err'});
            console.log(err);
        }
        
    }
};