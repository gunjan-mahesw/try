let cNum = Math.floor(Math.random() * 100) + 1;
attempt =0;
let attempt = document.getElementById("attempt");
let userinp = document .getElementById("inp");
let subBtn = document.getElementById("submit");
let restBtn = document.getElementById("resBtn");
let message = document.getElementById("msg");
function check (){
    let usernum = parseInt (userinp.value);

    if (cNum == usernum){
        message.innerHTML = "Congratulations! You guessed the correct number. It was " + cNum;
        message.style.color = "green";
        subBtn.disabled = true;
        restBtn.style.display = "block";


    }
    else if (cNum < usernum){
        message.innerHTML = "Too high ! try again ";

        message.style.color = "red";
        
    }
    else {
        message.innerHTML = "Too low! try again ";
        message.style.color = "red";
    }
attempt++;
attemptData.innerHTML=attempt;
setTimeout(() => {
    userinp.value = "";
    message.innerHTML = "";
},3000);

}
function restart (){
    cNum = Math.floor(Math.random() * 100) + 1;
    attempt =0;
}
subBtn.addEventListener("click",check);
restBtn.addEventListener("click",restart);
//gith hub
//readme=>project-push-proper 
//echo=>kisi file ko terminal 
//cloud platform hai 
//git init=>intialization ek repo ban jayegi local wala mai
//git add file name README.md=>jitni files local system mai pari hai, remote mai bhejni hai jo add nahi hoga woh jayega nahi.file name k baad agar . laga du toh all the files in the bundle
//git commit -m "first commit"=>version control=>software k updated versions.it is used to track . bundle k upar wraapper laga na hai woh commit hai.
//git branch -M main=>by deafault local mai branch=>master uska name change karne k liye Main likha hai.project->live wo main branch se hoti hai 
//branch=>sub folders=>replica=>clone karna hai.
//git remote add origin 
//git push url
//git push -u origin main;-u forcefully hum isse branch bheje.
//Main branch 
//git config --list
//abhi mera laptop hi connected nahi hai.
//terminal pwd=>
//ls function up users hai folders mil jayegi
//cd desktop =>function up => Desktop
//git clone remote local system mai lana hai
//remote to local=>git clone =>duplicate.jo remote mai hai vo local mai karna hai
//git clone
//