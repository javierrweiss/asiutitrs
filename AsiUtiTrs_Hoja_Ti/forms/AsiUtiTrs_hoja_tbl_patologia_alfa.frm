dataSource:"db:/maestros/tbc_patologia",
extendsID:"-1",
initialSort:"pat_descrip asc",
items:[
{
background:"#c0c0c0",
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"pat_descrip",
location:"115,6",
size:"300,20",
text:"Descripción",
typeid:7,
uuid:"224688F5-ABF8-4C89-946B-940201B969CA"
},
{
background:"#c0c0c0",
displaysTags:true,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"pat_codi",
location:"0,6",
size:"116,20",
text:"Código",
toolTipText:"Número de Internación de los internados actuales en UTI y UCO.",
typeid:7,
uuid:"26E315BF-1B66-4DDF-A0B8-2772ED699E4C"
},
{
background:"#c0c0c0",
labelFor:"btn_seleccionar",
location:"416,6",
size:"22,20",
typeid:7,
uuid:"28A21FB0-93B7-4DD9-B1F8-DA121375FC9E"
},
{
height:54,
partType:5,
typeid:19,
uuid:"2FA1E20C-5AEE-4340-BC6E-C2BF0548D993"
},
{
borderType:"LineBorder,1,#c0c0c0",
dataProviderID:"pat_codi",
fontType:"Microsoft Sans Serif,0,12",
horizontalAlignment:0,
location:"0,26",
name:"pat_codi",
onActionMethodID:"BA5993AE-4A3F-497A-8359-F9DECDF1581D",
onDoubleClickMethodID:"0EBD831D-020C-4A13-B9F7-911EBF755886",
onRenderMethodID:"-1",
showClick:false,
showFocus:false,
size:"116,20",
typeid:7,
uuid:"421146E2-6CC1-406D-AA3B-C313F619711A"
},
{
borderType:"LineBorder,1,#c0c0c0",
dataProviderID:"pat_descrip",
fontType:"Microsoft Sans Serif,0,12",
horizontalAlignment:2,
location:"116,26",
margin:"0,5,0,0",
name:"pat_descrip",
onActionMethodID:"BA5993AE-4A3F-497A-8359-F9DECDF1581D",
onDoubleClickMethodID:"0EBD831D-020C-4A13-B9F7-911EBF755886",
onRenderMethodID:"-1",
showClick:false,
showFocus:false,
size:"300,20",
typeid:7,
uuid:"501339FB-707C-4522-91E4-4B13349FAAEE"
},
{
horizontalAlignment:0,
imageMediaID:"9F8CE6FE-D887-49F2-932E-C2C49EC742A2",
location:"416,26",
name:"btn_seleccionar",
onActionMethodID:"0EBD831D-020C-4A13-B9F7-911EBF755886",
size:"22,20",
tabSeq:1,
typeid:7,
uuid:"7DFD6A06-9A6F-486A-A35B-543D33E3BF30"
}
],
name:"AsiUtiTrs_hoja_tbl_patologia_alfa",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"-1",
scrollbars:32,
showInMenu:false,
size:"438,54",
typeid:3,
uuid:"8D1DBF90-9149-45D4-A98A-B8B1190D4EF4",
view:3