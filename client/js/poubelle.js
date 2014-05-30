
        var turn = function(button) {
            var now = button.parentNode.getAttribute("class");
            if (now==="hidden") {
                button.parentNode.setAttribute("class","visible");
            }
            else {
                button.parentNode.setAttribute("class","hidden");
            }
        };