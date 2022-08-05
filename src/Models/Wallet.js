const { model, Schema } = require("mongoose");

const WalletSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        refPath: "user_type"
    },
    user_type: {
        type: String,
        enum: ["user", "seller"]
    },
    balance: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = model("wallet", WalletSchema)