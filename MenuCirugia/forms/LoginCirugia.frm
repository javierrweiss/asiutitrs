extendsID:"-1",
items:[
{
dataProviderID:"globals.vLegajo",
fontType:"Tahoma,1,12",
formIndex:6,
format:"####|#(6)",
location:"354,380",
name:"legajo",
onActionMethodID:"-1",
onDataChangeMethodID:"02FFFAFD-73C3-4E28-8533-7EC92B55D209",
onFocusLostMethodID:"95401A38-3897-4E6B-9D3C-87C72D78B0C1",
selectOnEnter:true,
size:"95,20",
toolTipText:"Ingrese su número de Legajo.",
typeid:4,
uuid:"2A8D3F1B-444B-40E9-AD8C-2A4018D4A752"
},
{
formIndex:10,
imageMediaID:"97E0E77B-A2D4-4886-866B-60FA2A9917B2",
location:"269,280",
mediaOptions:4,
size:"511,56",
typeid:7,
uuid:"3D4F02D9-CB79-410E-92F5-A7ED1D834359"
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
uuid:"4371BD13-9EB5-45E2-A593-5D3666D2A6AE"
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
uuid:"6C0FC895-55FA-40C5-954C-67F58A4FF2FD"
},
{
dataProviderID:"globals.vOperador",
fontType:"Tahoma,1,12",
formIndex:5,
location:"454,380",
name:"operador",
size:"301,20",
transparent:true,
typeid:7,
uuid:"899A5356-A5EE-4893-8D90-CA60E8810BEF"
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
uuid:"8C6E9B5E-F2EA-4BF6-A594-2F8EE448BEB8"
},
{
anchors:3,
fontType:"Tahoma,0,14",
foreground:"#000000",
formIndex:11,
location:"665,10",
name:"btn_ayuda_1",
onActionMethodID:"0358A902-6AC5-4FAD-9574-F573A42790FF",
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
uuid:"A69BF46F-ECF7-4140-ADF3-9B372DBD99FD"
},
{
fontType:"Tahoma,1,12",
formIndex:8,
horizontalAlignment:0,
location:"354,445",
name:"confirma",
onActionMethodID:"4FEDD149-D807-4DC3-B688-987108A910A7",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"95,27",
text:"Confirma",
toolTipText:"Haga click aquí luego de haber ingresado su número de legajo y clave.",
typeid:7,
uuid:"AB4961EF-37F7-4159-8FFC-CBD33A026499",
verticalAlignment:0
},
{
fontType:"Tahoma,1,12",
formIndex:9,
horizontalAlignment:0,
location:"501,445",
name:"cancela",
onActionMethodID:"46AE1A8C-3A15-45D2-B33A-2476316E6CF3",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"85,27",
text:"Salir",
toolTipText:"Haga click sobre este botón para Salir del sistema",
typeid:7,
uuid:"CE74BF5F-008F-4AC3-85BF-12932B8DA2FA",
verticalAlignment:0
},
{
height:483,
partType:5,
typeid:19,
uuid:"D013636B-D465-43E6-99AD-F97E662E48DA"
},
{
dataProviderID:"globals.vClave",
displayType:6,
formIndex:7,
location:"354,415",
name:"clave",
onActionMethodID:"-1",
onDataChangeMethodID:"2071C76E-2208-4725-BF1E-77A83892A6AA",
selectOnEnter:true,
size:"95,20",
toolTipText:"Ingrese la clave de acceso asignada a su legajo.",
typeid:4,
uuid:"D88874B1-DE35-4655-9E75-22F68E757C3A"
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
uuid:"F9486C73-27CC-4439-BE60-C35B9FAADFD0"
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
uuid:"FE10B7C1-C01C-493C-AB88-80DD66EAF20C"
}
],
name:"LoginCirugia",
navigatorID:"-2",
onShowMethodID:"D3DF771C-0EF2-4B78-BF0B-3E9A203B6E31",
showInMenu:false,
size:"795,483",
styleName:"Sanatorio",
typeid:3,
uuid:"014D0C87-350D-4365-9F70-7A5F9030FD41"