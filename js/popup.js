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
    let $image = $instrument.childNodes[1];
    let $src = $image.childNodes[0].innerHTML;
    let $title = $image.childNodes[1].innerHTML;
    let $alt = $image.childNodes[2].innerHTML;

    let $popup_dialog = document.querySelector("dialog");
    let $img = document.querySelector("dialog img");
    $img.setAttribute("src","./img/"+$src);
    $img.setAttribute("title",$title);
    $img.setAttribute("alt",$alt);

    for(i=2;i<=$instrument.childNodes.length;i++){
        alert($instrument.childNodes[i]);
    }

    $popup_dialog.showModal();
}

function close_dialog() {
    document.querySelector("audio").pause();
    document.querySelector("dialog").close();
}

function load_xml_file($path) {
    let $file = new FileReader();
}