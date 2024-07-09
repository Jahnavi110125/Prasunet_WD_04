
document.addEventListener("DOMContentLoaded", function() {   

    
    function toggleDropdown() {
        var dropdown = document.getElementById("dropdown-content");
        dropdown.classList.toggle("show");
    }
    
    document.querySelector(".dropbtn").onclick = function(){
        toggleDropdown()
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("rnavi1");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    
    
    
});