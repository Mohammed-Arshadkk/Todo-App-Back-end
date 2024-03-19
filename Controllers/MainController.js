const Todo = require('../Model/InputSchema')

const obj = {
    sendMessage : async (req,res) => {
        try{
        const {input} = req.body
        console.log(input);

        if (!input) {
        return res.status(400).json({ error: 'Input field is required' });
        }

        const newTodo = new Todo({
            title: input
        })

        await newTodo.save();

        res.status(200).json({message: 'Todo Saved Successfully', newTodo})

       }catch(err){
        console.log("An error occured ");
        res.status(500).json({ error: 'An error occurred while saving the todo' });
       }
    },
    
}

module.exports = obj