        function handleAlert() {
            return alert("Olá turma");
        }

        function getTexto(){
            let h1 = document.querySelector("h1");
            if(h1?.innerText){
                h1.setAttribute("style", "color:pink" )
            }
            else{
                console.log("Não achei!");
            }
        }



    let darkmode = false;
    
    function getText(){
        let div: HTMLElement | null = document.querySelector('section');
        if(!darkmode){
            darkmode = false;
            if(div != null){
                div.style.backgroundColor = "red";
                div.style.color = "black"
            }
            }  
            if(!darkmode){
                darkmode = true;
                if(div != null){
                    div.style.backgroundColor = "blue";
                    div.style.color = "black"
                }
                }  
                
                else{
                    darkmode = false;
                    if(div != null){
                        div.style.backgroundColor = "green";
                        div.style.color = "black"

                    }
                }    
            }
        

  