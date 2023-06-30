



// ----------- TIME DARK THEME -----------

let hour = new Date().getHours();


function darkTime(){
    if (hour < 8) {
        document.body.classList.remove("light-theme"); 
        document.body.classList.add("dark-theme"); 
        document.getElementById('inputSwitch').checked = true;
    } else if (hour < 23) {
        document.getElementById('inputSwitch').checked = false;
    }else {
        document.body.classList.remove("light-theme"); 
        document.body.classList.add("dark-theme"); 
        document.getElementById('inputSwitch').checked = true;
    }
}


const theme = document.querySelector('#inputSwitch');
        console.log(theme.checked); // false


        function checkTheme (){
            const a = localStorage.getItem('checkbox_value');
            if (a == 1) {
                document.body.classList.remove("light-theme"); 
                document.body.classList.add("dark-theme"); 
                document.getElementById('inputSwitch').checked = true;
               
            } else if (a == "null") { 
                darkTime();
                alert( localStorage.getItem('checkbox_value') ); 
            }
        
        
        }
        
        window.onload = function() {
            
            checkTheme();
            console.log(localStorage.getItem('checkbox-value'))
          };
        
    

        function myFunction() {
            
            if (theme.checked == true) {
                document.body.classList.remove("light-theme"); 
                document.body.classList.add("dark-theme"); 
                
                console.log(theme.checked); 
                localStorage.setItem("checkbox_value", "1");
                // alert( localStorage.getItem('checkbox_value') ); // 1

            } else if (theme.checked == false) {
                document.body.classList.remove("dark-theme");
                document.body.classList.add("light-theme"); 
                 
                console.log(theme.checked); 
                localStorage.setItem("checkbox_value", "2");
                // alert( localStorage.getItem('checkbox_value') ); // 1
            }
               
        }
               

theme.addEventListener("click", myFunction);


// -----------  DARK THEME -----------

// var input = document.getElementById("inputSwitch");
//     localStorage.setItem("theme", input.val());



// var storedValue = localStorage.getItem("server");
//     console.log(storedValue);


//   console.log(inputVal);


//  const themeSwitch = document.querySelector('input');


// themeSwitch.addEventListener('click', () => {
    
 

// });


// var inputSwitch = document.getElementById("inputSwitch");
// localStorage.setItem("server", inputSwitch.val());

// var storedValue = localStorage.getItem("server");
// console.log("storedValue")
