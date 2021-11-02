dataSource:"db:/asistencial/tbc_cirugint",
extendsID:"-1",
items:[
{
anchors:15,
borderType:"LineBorder,1,#000000",
formIndex:1,
items:[
{
containsFormID:"0298A911-7F0D-4E2E-8763-175E23838005",
location:"10,54",
relationName:"vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta",
text:"parto_sub_dtl",
typeid:15,
uuid:"BA035F38-50A6-43F7-B918-9EF5DD1982D8"
}
],
location:"0,24",
name:"tabs_128",
printable:false,
size:"870,228",
transparent:true,
typeid:16,
uuid:"1DB6C53F-727F-4795-8B45-8305A82D1A39"
},
{
foreground:"#000000",
formIndex:1,
labelFor:"obstetri_gesta",
location:"5,1",
name:"obstetri_gesta_label",
size:"140,20",
text:"Selección de Gestación:",
transparent:true,
typeid:7,
uuid:"2630ED8E-AEC6-43AB-899A-B1013361DF0E"
},
{
dataProviderID:"globals.current_obstetri_gest",
displayType:2,
editable:false,
formIndex:3,
location:"145,1",
name:"obstetri_gesta",
onDataChangeMethodID:"79FE5820-24EA-48DC-9273-C18018716EAF",
size:"140,20",
typeid:4,
uuid:"736F5711-ED25-4B37-982F-DF99CF1E91BB",
valuelistID:"08C4C47B-6039-4A0F-8C94-60DD55F7F760"
},
{
anchors:11,
borderType:"LineBorder,1,#000000",
lineSize:1,
location:"0,0",
shapeType:1,
size:"870,24",
transparent:true,
typeid:21,
uuid:"A53C435C-C457-4435-A4DE-30F51426BF2A"
},
{
height:253,
partType:5,
typeid:19,
uuid:"D0A4E752-6A25-4D5C-9645-0621A112D952"
}
],
name:"Parto_dtl",
navigatorID:"-1",
onShowMethodID:"-1",
showInMenu:true,
size:"875,253",
styleName:"Sanatorio",
typeid:3,
uuid:"808D59DB-2892-48C2-8E17-9D63342EDF65"