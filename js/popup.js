/** script.js DBO20220816 **/

function show_popup(param) {
    let $parser = new DOMParser();
    let $datas = $parser.parseFromString($xml_data, "text/xml");
    let $instruments = $datas.getElementsByTagName("instrument");
    let i=0;
    while($instruments[i].childNodes[0].innerHTML !== param.getAttribute("id"))
    {
        i++;
    }
    let $instrument = $instruments[i];
    let $src = $instrument.childNodes[0][1];
    let $title = $instrument.childNodes[0][2];
    let $alt = $instrument.childNodes[0][3];
    
    let $popup_dialog = document.querySelector("dialog");
    let $img = document.querySelector("dialog img");
    $img.setAttribute("src","./img/"+$src.innerHTML);
    $img.setAttribute("title",$title.innerHTML);
    $img.setAttribute("alt",$alt.innerHTML);
    $popup_dialog.showModal();
}

function close_dialog() {
    document.querySelector("audio").pause();
    document.querySelector("dialog").close();
}

function load_xml_file($path) {
    let $file = new FileReader();
}