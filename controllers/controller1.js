const pug = require('pug');

exports.home = (req,res)=>{
    
    let topMenu = pug.renderFile('views/top-menu.pug');
    let footer = pug.renderFile('views/footer.pug');
    
    res.render('home',{topmenu:topMenu,footer:footer});
}