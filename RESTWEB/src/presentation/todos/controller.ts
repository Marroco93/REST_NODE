import {Request,Response} from 'express';

const todos =[
    {
        id:1,text:'Buy milk',createdAt:new Date(),

    },{
        id:2,text:'Buy bread',createdAt:null,

    },{
        id:3,text:'Buy butter',createdAt:new Date(),

    }
];

export class TodosController{

    constructor(){

        
    }

    public getTodos = (req:Request,res:Response)=>{

        res.json(todos); 
    }


    public getTodoById = (req:Request,res:Response)=>{

        const id=+req.params.id;
        if(isNaN(id)) return res.status(400).json({error:`ID argument is not a number`})
        const todo=todos.find( todo=>todo.id === id);

        (todo)
        ? res.json(todo)
        :res.status(404).json({error:`Todo with id ${id} not found`})
        res.json(todo);
    }


    public createTodo=(req:Request,res:Response)=>{

        const {text} = req.body
        if(!text)return res.status(400).json({error:'Text propert is required'});
        const newTodo={
            id:todos.length+1,
            text:text,
            createdAt:null
        }
        todos.push(newTodo)

        res.json(newTodo)
    }

    public updateTodo =(req:Request,res:Response)=>{

        const id = +req.params.id;
        if(isNaN(id)) return res.status(400).json({error:`ID argument is not a number`})
       
        const todo=todos.find( todo=>todo.id === id);
        if(!todo) return res.status(400).json({error:`Todo with id ${id} not round`})


        const {text,createdAt} = req.body
        // if(!text)return res.status(400).json({error:'Text propert is required'});

        todo.text= text || todo.text;
        (createdAt === 'null')
        ? todo.createdAt = null
        : todo.createdAt= new Date(createdAt || todo.createdAt)


        res.json(todo)

    }

    public deleteTodo=(req:Request,res:Response)=>{

        const id = +req.params.id;
       
        const todo=todos.find( todo => todo.id === id);
        if(!todo) return res.status(400).json({error:`Todo with id ${id} not around`})


        console.log("what?");
        todos.splice(todos.indexOf(todo),1)
        res.json(todo);


        

    }
}