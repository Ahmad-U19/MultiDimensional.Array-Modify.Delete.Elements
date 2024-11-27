var array= [
    ["Ahmad",18,"Male","BS-CS"],
    ["sadiq",20,"Male","BS-SE"],
    ["ahsan",22,"Male","BS-IR"],
    ["Amna",19,"Fe-Male","BS-AI"],
    ["Aqsa",21,"Fe-Male","BBA"]
]
array[2][0]="Jahangir";

delete array[3][1];

document.write(array.length);

document.write("<table border=1px cellspacing=0 >" + "<br>");

for(var a=0; a<array.length; a++){
    document.write("<tr>");
    for (var b=0; b<array[a].length; b++){
        document.write("<td>" + array[a][b] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");