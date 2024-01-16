
function footer(){
    document.write(`\
        <div id="footer-box">\
        \
            <div id="footer">\
                <div id="footer-infos">\
                    <div>\
                        <h2>kodokudokkodo</h2>\
                        <p>\
                           <br>\
                           kodokudokkodo<br>\
                            
                        </p>\
                    </div>\
                    <div id="footer-icons">\
                      
                     </br>
                        <a href="https://github.com/yemyintthein" target="_blank" class="fa fa-github"></a>\
                      
                    </div>\
                </div>\
        \
                <div id="footer-date">\
                    <p>${new Date().getFullYear()}</p>\
                </div>\
            </div>\
        \
        </div>\
    `);
}
