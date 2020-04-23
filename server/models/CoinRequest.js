const mongoose = require('mongoose');

const CoinSchema = new mongoose.Schema({
    coinAmount: {
        type: Number,
        default: 100,
         
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      
    },
    status: {
        type: String,
        default: 'pending',
    }

})


module.exports = mongoose.model("CoinRequest", CoinSchema)