import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import axios from 'axios';
import { stringLength } from '@firebase/util';


const app=express();
app.use(express.json());
app.use(cors());


const CONNECTION_URL="mongodb+srv://revanth:vizag@cluster0.djvfuyv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL,(err)=>{
    if(err){
        console.log(err);
    }
})


const best_sellers_for_men=new mongoose.Schema({
    card_title:String,
    card_description:String,
    card_image_src:String,
    card_cost:String,
    warning:String,
})

const best_sellers_for_women=new mongoose.Schema({
    card_title:String,
    card_description:String,
    card_image_src:String,
    card_cost:String,
    warning:String,
})

const cards_for_men=new mongoose.Schema({
    card_name:String,
    card_image_src:String,
    products_array:[{
    card_title:String,
    card_description:String,
    card_image_src:String,
    card_cost:String,
    warning:String,
    }],
})

const cards_for_women=new mongoose.Schema({
    card_name:String,
    card_image_src:String,
    products_array:[{
    card_title:String,
    card_description:String,
    card_image_src:String,
    card_cost:String,
    warning:String,
    }],
})


const current_cart=new mongoose.Schema({
    user_name:String,
    cart_items:[{
        product_title:String,
        product_cost:String,
    }],
})

const user_bill=new mongoose.Schema({
    user_name:String,
    time:String,
    bill_status:String,
    cart_items:[{
        product_title:String,
        product_cost:String,
    }]
})



const best_sellers_for_men_model=new mongoose.model("best_sellers_for_men_model",best_sellers_for_men);
const best_sellers_for_women_model=new mongoose.model("best_sellers_for_women_model",best_sellers_for_women);
const cards_for_men_model=new mongoose.model("cards_for_men_model",cards_for_men);
const cards_for_women_model=new mongoose.model("cards_for_women_model",cards_for_women);
const current_cart_model=new mongoose.model("current_cart_model",current_cart);
const user_bill_model=new mongoose.model("user_bill_model",user_bill);


///////////////////////////////////////////////////////CART HANDLING FUNCTIONS////////////////////////////////////////////////////////////////


app.post("/update_bill_status",async(req,res)=>{
    const x=await user_bill_model.findOne({_id:(req.body).id});
    x.bill_status=req.body.new_status;
    x.save();
    res.send("yes");
})

app.post("/get_all_bills",(req,res)=>{
    user_bill_model.find({},(err,abc)=>{
        if(err)
        console.log(err);
        else
        {
        abc.reverse();
        res.send(abc);
        }
    })
})

app.post("/generate_bill",async (req,res)=>{
    //console.log(req.body.cart_items);
    const x=await user_bill_model(req.body);
    x.cart_items=(req.body.cart_items);
    //console.log(x.cart_items);
    x.save();
    //console.log(x);
    res.send("yes");
})

app.post("/empty_the_cart",(req,res)=>{
    current_cart_model.updateOne({user_name:`${req.body.name}`}, { $set: { cart_items: [] }}, function(err, affected){
        //console.log('affected: ', affected);
    });
})

app.post("/get_previous_bills",(req,res)=>{
    //console.log(req.body.name);
    user_bill_model.find({user_name:(req.body).name},(err,abc)=>{
        if(err)
        console.log(err);
        else
        res.send(abc);
    })
})


app.post("/get_cart_items",(req,res)=>{
    //console.log(req.body.name);
    current_cart_model.findOne({user_name:(req.body).name},(err,abc)=>{
        if(err)
        console.log(err);
        else
        res.send(abc.cart_items);
    })
})

app.post("/add_item_to_cart",async (req,res)=>{
    const abc=await current_cart_model.findOne({user_name:(req.body).name});
    let x={
        product_title:`${req.body.title}`,
        product_cost:`${req.body.cost}`,
    }
    if(abc)
    {
    abc.cart_items.push(x);
    abc.save();
    }
    else
    {
        const bcd=await current_cart_model({user_name:(req.body).name,cart_items:[]});
        //bcd.save();
        bcd.cart_items.push(x);
        bcd.save();
    }
    res.send("yes");
})


app.post("/remove_item_from_cart",async (req,res)=>{
    await current_cart_model.updateOne({user_name:req.body.name},{$pull :{cart_items :{_id:(req.body).id}}});
    res.send("yes");
})

app.post("/get_length_of_cart",(req,res)=>{
    current_cart_model.find({user_name:req.body.name},(err,abc)=>{
        if(err)
        console.log(err);
        else
        {
        let x="0";
        //console.log(abc);
        if((abc.length!=0))
        x=`${abc[0].cart_items.length}`;
        else
        {
            let obj={
                user_name:`${req.body.name}`,
                products_array:[],
            }
            if((req.body.name)!="undefined")
            {
            const abcd=new current_cart_model(obj);
            abcd.save();
            }
            else
            x="...";
        }
        res.send(x);
        }
    })
})


////////////////////////////////////////////////////////CART HANDLING FUNCTIONS////////////////////////////////////////////////////////////////


app.post("/push_cards_into_array",async (req,res)=>{
    //console.log(req.body);
    //console.log("\n\n\n\n\n\n\n\n");
    let x={
    card_title:`${req.body.card_title}`,
    card_description:`${req.body.card_description}`,
    card_image_src:`${req.body.card_image_src}`,
    card_cost:`${req.body.card_cost}`,
    warning:" ",
    }
    //console.log(x);
    //console.log("hello world");
    const abc=await cards_for_men_model.findOne({_id:(req.body).id});
    abc.products_array.push(x);
    abc.save();
    res.send("yes");
})


app.post("/remove_card_from_array",async (req,res)=>{
    await cards_for_men_model.updateOne({_id:(req.body).main_id},{$pull :{products_array :{_id:(req.body).temp_id}}});
    res.send("yes");
})

app.post("/get_sub_cards_men",(req,res)=>{
    cards_for_men_model.findOne({_id:(req.body).id},(err,abc)=>{
        if(err)
        console.log(err);
        else
        res.send(abc.products_array);
    })
})


app.post("/add_men_card",(req,res)=>{
    //console.log("hello world");
    const x=new cards_for_men_model(req.body);
    x.save();
    res.send("yes");
})


app.post("/get_men_cards",(req,res)=>{
    cards_for_men_model.find({},function(err,abc){
        if(err)
        {
            console.log(err);
        }
        else
        res.send(abc);
    })
})

////////////////////////////////////////////////////////////////WOMEN PRODUCT CARDS/////////////////////////////////////////////////////////////////


app.post("/get_women_cards",(req,res)=>{
    cards_for_women_model.find({},function(err,abc){
        if(err)
        {
            console.log(err);
        }
        else
        res.send(abc);
    })
})

app.post("/add_women_card",(req,res)=>{
    console.log("hello world");
    const x=new cards_for_women_model(req.body);
    x.save();
    res.send("yes");
})


app.post("/get_sub_cards_women",(req,res)=>{
    cards_for_women_model.findOne({_id:(req.body).id},(err,abc)=>{
        if(err)
        console.log(err);
        else
        res.send(abc.products_array);
    })
})


app.post("/remove_card_from_array_women",async (req,res)=>{
    await cards_for_women_model.updateOne({_id:(req.body).main_id},{$pull :{products_array :{_id:(req.body).temp_id}}});
    res.send("yes");
})


app.post("/push_cards_into_array_women",async (req,res)=>{
    //console.log(req.body);
    //console.log("\n\n\n\n\n\n\n\n");
    let x={
    card_title:`${req.body.card_title}`,
    card_description:`${req.body.card_description}`,
    card_image_src:`${req.body.card_image_src}`,
    card_cost:`${req.body.card_cost}`,
    warning:" ",
    }
    console.log(x);
    //console.log("hello world");
    const abc=await cards_for_women_model.findOne({_id:(req.body).id});
    abc.products_array.push(x);
    abc.save();
    res.send("yes");
})




////////////////////////////////////////////////////////////////WOMEN PRODUCT CARDS/////////////////////////////////////////////////////////////////

app.post("/add_new_card_bestsellermen",(req,res)=>{
    //console.log("hello world");
    const x=new best_sellers_for_men_model(req.body);
    x.save();
    res.send("yes");
})

app.post("/delete_card_bestsellermen",(req,res)=>{
    console.log(req.body);
   best_sellers_for_men_model.deleteOne({_id:req.body._id},function(err,obj){
    console.log("hello");
    if(err){
        console.log(err);
    }
    else
    res.send("yes");
   });
   //res.send("yes");
})


app.post("/get_cards_bestsellermen",(req,res)=>{
    best_sellers_for_men_model.find({},function(err,abc){
        if(err)
        {
            console.log(err);
        }
        else
        res.send(abc);
    })
})


app.post("/add_new_card_bestsellerwomen",(req,res)=>{
    console.log("hello world");
    const x=new best_sellers_for_women_model(req.body);
    x.save();
    res.send("yes");
})

app.post("/delete_card_bestsellerwomen",(req,res)=>{
    console.log(req.body);
   best_sellers_for_women_model.deleteOne({_id:req.body._id},function(err,obj){
    console.log("hello");
    if(err){
        console.log(err);
    }
    else
    res.send("yes");
   });
   //res.send("yes");
})


app.post("/get_cards_bestsellerwomen",(req,res)=>{
    best_sellers_for_women_model.find({},function(err,abc){
        if(err)
        {
            console.log(err);
        }
        else
        res.send(abc);
    })
})

app.listen(5000,()=>{
    console.log("server running");
})