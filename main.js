
function check(){
    const totalClasses =Number(document.querySelector('.input1').value);
const attendedClasses = Number(document.querySelector('.input2').value);

const requiredPercentage =  Number(document.querySelector('.input3').value);
const percentage = (attendedClasses/totalClasses)*100;
let copy1 = totalClasses;
let copy2 = attendedClasses;
let temp =(copy2/copy1)*100;
while(temp<requiredPercentage){
    copy1+=1;
    copy2+=1;
    temp=(copy2/copy1)*100;
}
const requiredClasses = copy2-attendedClasses;
    if(percentage > requiredPercentage){
        alert('you are safe');
    }
    else{
        
        while(temp<requiredPercentage){
            copy1+=1;
            copy2+=1;
            temp=(copy2/copy1)*100;
        }
        const requiredClasses = copy2-attendedClasses;
        alert(`you are not safe and need to attend ${requiredClasses} more class`);
    }
}
