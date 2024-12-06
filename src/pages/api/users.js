import db from "@/db";
import userModel from "@/schema/user";

const users = [];

export default function getUsers(req, res) {
    console.log(db);
    if (req.method === "POST") {
        const user = new userModel(req.body)
        const response = user.save()
        res.status(200).send({ response })
    } else {
        res.status(200).send({ users })
    }
}