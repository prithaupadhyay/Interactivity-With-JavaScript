function upDate(previewPic)
{
     /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */

    document.getElementById('image').innerHTML=previewPic.alt; //previewPic will get "this" variable and so previewPic.alt will point towards the content in alt.
    document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src +"')"; //this url will point towards the src url of this id.
}

function unDo()
{
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */

    document.querySelector('#image').style.backgroundImage = "url('')"; //this will again change the url to the original blank.
    document.querySelector('#image').innerHTML="Hover over an image below to display here."; //again change the content to the original data.
		
}