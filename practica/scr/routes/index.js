const {Router}=require('express');
const router =Router();

// para cada ruta a usar copiar 
router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/Bladimir',(req,res)=>{
    res.render('Bladimir');
});

module.exports=router;