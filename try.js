function table(){
for(i=1; i<=10; i++){
    document.write('<br> <center> <font color="red" size="4pt">')
    document.write(i*n)
    
}
}

let n=prompt('welecome to PARLEE TABLE enter a number');
if (n!=null){
    table()
}
else{
    document.write(1)
}