window.onload=()=>{
    let countdownTimer=10;
    let _value;
    async function countdown(){
        let timerPromise=new Promise((myResolve, myReject)=>{
            const timer= setInterval(()=>{
                if(countdownTimer<=0){
                    myResolve('Your Time Is Over!!!!!!')
                    clearInterval(timer)
                }
                countdownTimer-=pass1()
            },1000);
        });
        _value=await timerPromise;
        logResult(_value,'lapsed');
    }
    countdown();
    function pass1(){
        document.getElementById("intervalTimer").innerHTML=countdownTimer;
        console.log(countdownTimer)
        return 1;
    }
    const logResult=(_value,eid)=>(document.getElementById(eid).innerHTML=_value)    
}