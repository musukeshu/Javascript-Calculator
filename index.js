(function(){
    let screen=document.querySelector('.screen');
    let clear=document.querySelector('.clearButton');
    let equals=document.querySelector('.equalsTo');
    let buttons=document.querySelectorAll('.button');

    buttons.forEach(function(b){
        b.addEventListener('click',function(e){
            let value=e.target.dataset.sym;
            screen.value+=value;
        })
    });

    clear.addEventListener('click',function(e){
        screen.value='';
    })

    equals.addEventListener('click',function(e){
        if(screen.value===''){
            screen.value='Please enter a value';
        }else{
            let answer=eval(screen.value);
            screen.value=answer;
        }
    })

})();