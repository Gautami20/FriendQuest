import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/FriendQuest", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("DB connected");
    })
    .catch(err => {
        console.log("DB connection error: ", err);
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dob: Date,
    age: Number,
    phone: String,
    aadhar: String,
    address: String
})

const User = new mongoose.model("User", userSchema);


//Routes
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successful", user: user });
            } else {
                res.send({ message: "Password didn't match" });
            }
        } else {
            res.send({ message: "User is not registered" });
        }
    } catch (err) {
        res.status(500).send({ message: "Error while logging in", error: err });
    }
});

app.post("/register", async(req, res) => {
    const { name, email, password, dob, age, phone, aadhar, address } = req.body;
    try{
        const existingUser = await User.findOne({email: email});
        if (existingUser){
            res.send({ message: "User already registered" });
        } else{
            const user = new User({
                name,
                email,
                password,
                dob,
                age,
                phone,
                aadhar,
                address
            });
            await user.save();
            res.send({ message: "Successfully Registered!" });
        }

    } catch(err){
        res.status(500).send({message: "Error while registring" , error: err});
    }

});

app.listen(9002, () => {
    console.log("Backend started at port 9002");
})