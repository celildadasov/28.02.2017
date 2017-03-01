function create(chesswidth){
document.write('<div class="chess" style="width:'+chesswidth+'px">')
for(i=1;i<65;i++){
document.write('<div class="chessitem" style="width:110px">'+i+'</div>')
 

}

document.write('</div>');


}
create(970);