const aplicacion=require('./aplicacion');

async function main(){
    await aplicacion.listen(aplicacion.get('port'));
    console.log('servidor en puerto '+aplicacion.get('port'));

}

main();