import mongoose, { mongo } from "mongoose";

const  orderSchema = mongoose.Schema({
      user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },

    orderItems: [
        {
        name: {type:String, requied:true},
        qty: {type:Number, requied:true},
        image: {type:String, requied:true},
        price: {type:String, requied:true},
        product: {
            type:mongoose.Schema.Types.ObjectId, 
            requied:true
        },
    }],

        shippingAdress:{
        address: {type:String, requied:true},
        city: {type:String, requied:true},
        postalcode: {type:String, requied:true},
        country: {type:String, requied:true},
        },
        paymentMethod: {type:String, requied:true},

        paymentResult:{
            id: {type:String}, 
            status: {type:String}, 
             upadate_time: {type:String}, 
             email_address: {type:String}, 
        },
        itemsPrice:{
            type:Number,
            requied: true,
            default:0,
        },
         taxPrice: {
            type:Number,
            requied: true,
            default:0.0,
        },
         shippingPrice:{
            type:Number,
            requied: true,
            default:0,
        },
         totaPrice:{
            type:Number,
            requied: true,
            default:0,
        },
         isPaid:{
            type:Boolean,
            requied: true,
            default:0,
        },
        paidAt:{
            type:Date,
        },
        isDelivered:{
            type:Boolean,
            requied: true,
            default:0,
        },
        deliverAt:{
            type:Date,
        },

},{
    timestamps:true,
})

const Order = mongoose.model("Order", orderSchema);
export default Order