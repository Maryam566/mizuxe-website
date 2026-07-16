let buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let content = this.nextElementSibling;
        let isOpen = content.style.maxHeight;

        // Sab accordion band karo
        document.querySelectorAll(".accordion-content").forEach(function(item){
            item.style.maxHeight = null;
        });

        // Agar ye pehle se open nahi tha to isko open karo
        if(!isOpen){
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });

});