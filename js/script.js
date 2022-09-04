/** script.js DBO20220904 **/

var $xmlhttp, $xml_data;
$xmlhttp = new XMLHttpRequest();
$xmlhttp.onload = function () {
    $xml_data = $xmlhttp.responseXML;
}
$xmlhttp.open("GET", "./xml/data.xml", true);
$xmlhttp.send();