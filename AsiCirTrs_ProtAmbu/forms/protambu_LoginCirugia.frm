extendsID:"-1",
items:[
{
dataProviderID:"globals.vOperador",
fontType:"Tahoma,1,12",
formIndex:5,
location:"454,380",
name:"operador",
size:"301,20",
transparent:true,
typeid:7,
uuid:"2D8BECAC-2339-4B0C-B449-67141BCD8B2E"
},
{
height:483,
partType:5,
typeid:19,
uuid:"2FE253D6-F7DA-468D-BA32-C4A908C43C90"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
formIndex:2,
horizontalAlignment:4,
location:"288,415",
margin:"0,0,0,5",
size:"61,20",
text:"Clave:",
transparent:true,
typeid:7,
uuid:"44ECED6C-4CE3-46C5-9E03-6B906A863393"
},
{
anchors:3,
fontType:"Tahoma,0,14",
foreground:"#000000",
formIndex:11,
location:"665,10",
name:"btn_ayuda_1",
onActionMethodID:"208BC485-BE44-47BD-BF49-4A9974A0723D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"99,39",
text:"Ayuda",
toolTipText:"<html><body>
<p><font size=2 face=\"monospace\">1ro.- Posicionar en el campo Legajo haciendo click izquierdo con el mouse sobre dicho campo.<br>
2do.- Ingresar número de Legajo con digito verificador incluído.<br>
3ro.- Oprimir la tecla ENTER (o Intro) ó cliquear sobre el campo clave.<br> 
4to.- Ingresar la Clave asociada al Legajo.<br>
5ro.- Oprimir la tecla ENTER (o Intro) .<br>
6ro.- Oprimir nuevamente la tecla ENTER (o Intro).<br>
*** El sistema validará Legajo y Clave ingresado, luego controlará si el Legajo tiene  Reports <br>
pendientes de lectura, en caso afirmativo mostrará una ventana avisando que debe leer los <br>
report pendiente en el sistema Netterm.  ***<br>
<\/body><\/html>
",
typeid:7,
uuid:"5EB3C2F1-13A6-4905-AA7C-DE1F5E3B287C"
},
{
dataProviderID:"globals.vClave",
displayType:6,
formIndex:7,
location:"354,415",
name:"clave",
onActionMethodID:"-1",
onDataChangeMethodID:"D6FEEE6D-6393-4000-8581-9981B6D3B240",
selectOnEnter:true,
size:"95,20",
toolTipText:"Ingrese la clave de acceso asignada a su legajo.",
typeid:4,
uuid:"66B5FE0A-CFA2-48EF-93D3-62EFA1961CE8"
},
{
background:"#000000",
borderType:"TitledBorder,Sanatorio Colegiales,4,0,Tahoma,1,11,#000000",
enabled:false,
foreground:"#000000",
formIndex:1,
lineSize:2,
location:"269,346",
size:"511,129",
transparent:true,
typeid:21,
uuid:"7400817B-67D3-4D18-8C17-E87177E594C3"
},
{
fontType:"Tahoma,1,12",
formIndex:8,
horizontalAlignment:0,
location:"354,445",
name:"confirma",
onActionMethodID:"F6763757-D7D3-45B6-B961-DFBA67678C7A",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"95,27",
text:"Confirma",
toolTipText:"Haga click aquí luego de haber ingresado su número de legajo y clave.",
typeid:7,
uuid:"9E0A3BF6-27C3-43E1-9D61-F5947C712060",
verticalAlignment:0
},
{
borderType:"MatteBorder,0,0,0,0,#000000",
lineSize:1,
location:"251,266",
roundedRadius:35,
shapeType:2,
size:"544,217",
transparent:true,
typeid:21,
uuid:"A07A5080-C1FD-4F44-88A4-E8797041E838"
},
{
fontType:"Tahoma,1,12",
formIndex:9,
horizontalAlignment:0,
location:"501,445",
name:"cancela",
onActionMethodID:"4AF8CE01-5A18-4D1B-A673-80334534A341",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"85,27",
text:"Salir",
toolTipText:"Haga click sobre este botón para Salir del sistema",
typeid:7,
uuid:"A8D73C94-AA74-47B9-AC6F-10296FBD0F28",
verticalAlignment:0
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
formIndex:3,
horizontalAlignment:4,
location:"274,380",
margin:"0,0,0,5",
size:"75,20",
text:"Legajo:",
transparent:true,
typeid:7,
uuid:"D0A312F1-F7C7-4085-B8C2-14F41A4CEE2F"
},
{
dataProviderID:"globals.vPassOperador",
fontType:"Tahoma,1,12",
formIndex:4,
location:"454,415",
name:"errorClave",
size:"301,20",
transparent:true,
typeid:7,
uuid:"D872D182-FE1B-4332-BB3F-013B51675766"
},
{
dataProviderID:"globals.vLegajo",
fontType:"Tahoma,1,12",
formIndex:6,
format:"####|#(6)",
location:"354,380",
name:"legajo",
onActionMethodID:"-1",
onDataChangeMethodID:"0F8D6D58-CA4F-4ADB-B70A-81D977C363D8",
onFocusLostMethodID:"0F8B8039-7DB7-4A30-B261-E75F48175D46",
selectOnEnter:true,
size:"95,20",
toolTipText:"Ingrese su número de Legajo.",
typeid:4,
uuid:"E034E073-F141-488C-98CC-416CA61CAA8A"
},
{
formIndex:10,
imageMediaID:"97E0E77B-A2D4-4886-866B-60FA2A9917B2",
location:"269,280",
mediaOptions:4,
size:"511,56",
typeid:7,
uuid:"FC4088E1-3F6B-4455-890D-6696B5DA1A7D"
}
],
name:"protambu_LoginCirugia",
navigatorID:"-2",
onShowMethodID:"972EE82C-17A9-4F3C-8979-0DF969CC53B5",
showInMenu:false,
size:"795,483",
styleName:"Sanatorio",
typeid:3,
uuid:"A51F6419-BD35-43EC-A49D-6424DE98E95A"