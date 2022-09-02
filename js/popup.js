/** script.js DBO20220816 **/

function show_popup(param) {
    let $popup_dialog = document.querySelector("dialog");

    $popup_dialog.showModal();
}

function close_dialog() {
    document.querySelector("audio").pause();
    document.querySelector("dialog").close();
}

function load_xml_file($path) {
    let $file = new FileReader();
}