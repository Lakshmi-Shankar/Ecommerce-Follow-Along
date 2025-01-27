module.exports = (theFunc) =>(requestAnimationFrame, res, next)=>{
    Promise.resolve(theFunc(res, res, next)).catch(next)
};