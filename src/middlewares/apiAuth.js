const apiKey = "this-is-super-secret-key";

const apiAuth = (req,res,next) => {
    const reqKey = req.headers['api-key'];
    if(!reqKey){
        res.status(401).send('Unauthorized: No api key provided');
    }else{
        if(apiKey!==reqKey){
            res.status(401).send('Unauthorized: Incorrect apy key');
        }else{
            next();
        }
    }
}
export default apiAuth;