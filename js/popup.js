/** popup.js DBO20220904 **/

function show_popup(param) {
    let $focus_list = $xml_data.getElementsByTagName("focus");
    let i = 0;
    while ($focus_list[i].children[0].innerHTML !== param.getAttribute("id")) {
        i++;
    }
    let $focus = $focus_list[i];
    let $image = $focus.children[1];
    let $src = $image.children[0].innerHTML;
    let $title = $image.children[1].innerHTML;
    let $alt = $image.children[2].innerHTML;
    
    let $popup_dialog = document.createElement("dialog");
    $popup_dialog.setAttribute("class", "popup");
    document.querySelector("main").appendChild($popup_dialog);

    let $div = document.createElement("div");
    $div.setAttribute("class", "closing-cross");
    $div.setAttribute("title", "Fermer");
    $div.setAttribute("onclick", "close_dialog()");
    $div.innerText = "X";
    $popup_dialog.appendChild($div);
    
    let $img = document.createElement("img");
    $img.setAttribute("src", "./img/" + $src);
    $img.setAttribute("title", $title);
    $img.setAttribute("alt", $alt);
    $popup_dialog.appendChild($img);
    
    for (i = 2; i < $focus.children.length; i++) {
        $div = document.createElement("div");
        $popup_dialog.appendChild($div);
        
        let $element = document.createElement("h3");
        $element.innerText = $focus.children[i].children[1].innerHTML;
        $div.appendChild($element);
        
        $element = document.createElement("p");
        $element.innerText = $focus.children[i].children[2].innerHTML;
        $div.appendChild($element);
        
        let $audio = document.createElement("audio");
        $audio.setAttribute("controls", "");
        $div.appendChild($audio);
        
        let $source = document.createElement("source");
        $source.setAttribute("src", "./audio/" + $focus.children[i].children[0].innerHTML);
        $source.setAttribute("type", "audio/mpeg");
        $audio.appendChild($source);
    }

    $popup_dialog.showModal();
    $popup_dialog.focus();
}

function close_dialog() {
    let $dialog = document.querySelector("dialog");
    let $audio = document.querySelector("audio");
    if ($audio) {
        $audio.pause();
    }
    $dialog.innerHTML = "";
    $dialog.close();
    document.querySelector("main").removeChild($dialog);
}
