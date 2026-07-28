let inner= document.getElementById("inner");
m=0;

setInterval(function(){
    inner.style.transition="2s";
    inner.style.marginLeft=-m+"%";
    m=m+100;

    if(m>500)
    {
        setTimeout(function(){
            inner.style.transition="0s";
            inner.style.marginLeft=0;
    
        },2000);
        m=100;
    }

},5000);

