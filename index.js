//Import book
function loadBook(filename,displayName)
{
    let currentbook="";
    let url="books/"+filename;
    //reset our html
    document.getElementById("fileName").innerHTML=displayName;
    document.getElementById("searchstat").innerHTML="";
    document.getElementById("keyword").value="";
    //server request for book

    var xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.send();


    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4 && xhr.status==200)
        {
            currentbook=xhr.responseText;
            document.getElementById("fileContent").innerHTML=currentbook;
            var elmnt=document.getElementById("fileContent");
            elmnt.scrollTop=0;

        }
    };

}
