class game {
    constructor ( name , version , update){
        this.name = name ;
        this.version = version ;
        this.update = update ;

    }patch(){
    console.log(this.name,this.version,this.update);
}
}
const patch1 = new game( 'free fir' ,'8.9.0121','ob49')
patch1.patch();