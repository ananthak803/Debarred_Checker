
function check(){
    const totalClasses =Number(document.querySelector('.input1').value);
const attendedClasses = Number(document.querySelector('.input2').value);

const requiredPercentage =  Number(document.querySelector('.input3').value);
const percentage = (attendedClasses/totalClasses)*100;
let copy1 = totalClasses;
let copy2 = attendedClasses;
let temp =(copy2/copy1)*100;
let maxClass = 0;
while(temp<requiredPercentage){
    copy1+=1;
    copy2+=1;
    temp=(copy2/copy1)*100;
}
const requiredClasses = copy2-attendedClasses;
    if(percentage >= requiredPercentage){
        let copy1 = totalClasses;
        // let copy2 = attendedClasses;
        let temp =(copy2/copy1)*100;
        while(temp >=requiredPercentage){
            copy1+=1;
            temp=(attendedClasses/copy1)*100;
            maxClass=copy1-totalClasses-1;
        }
        alert(`You are safe. You have ${Math.round(percentage)}%. You can bunk ${maxClass} classes`);
        // document.querySelector(".attendancePercentage").innerHTML =`Attendance Percentage: ${Math.round(percentage)}% `;
        // document.querySelector(".status").innerHTML=`Debarred Status: Safe`;
        // document.querySelector(".extra").innerHTML =`Available Class Bunk: ${maxClass}`;
    }
    else{
        
        while(temp<requiredPercentage){
            copy1+=1;
            copy2+=1;
            temp=(copy2/copy1)*100;
        }
        const requiredClasses = copy2-attendedClasses;
        alert(`you are not safe.You have ${Math.round(percentage)}%. You need to attend ${requiredClasses} more class`);
        // document.querySelector(".result").innerHTML =`You are not safe.You have ${Math.round(percentage)}% attendance. You need to attend ${requiredClasses} more class`;
    }
}
