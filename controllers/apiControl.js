import panValid from "./panValid.js";




const panValidation = async (req,res) => { 
 
    console.log(`request hit for : ${req.params.panNumber}`);
    
    const valid = panValid(req.params.panNumber);

   res.send(valid);
}

export default panValidation;

