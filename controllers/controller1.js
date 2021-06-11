
exports.home = (req,res)=>{
    res.render('home');
}

exports.register = (req,res)=>{
    res.render('register',{log:'this is log'});
}