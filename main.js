var images = ["https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg3MjM5MDc5MjQx/the-remains-of-the-sehdar-palace-persepolis-the-former.jpg","https://cdn.britannica.com/57/122157-050-21261E20/Side-view-Sphinx-Great-Pyramid-of-Khufu.jpg","https://cdn.britannica.com/s:800x450,c:crop/78/187678-138-6D546A12/infrastructure-masonry-Rome-Roman.jpg","https://images.saymedia-content.com/.image/t_share/MTczOTAzMDYzNDExOTI2ODgx/ancient_greece.jpg"];
var names = ["Persian Civilization","Egypt Civilization","Roman Civilization","Greek Civilization"];
var i = 0;
function button1()
{
    i++;
    var number_of_civilizations = 4;
    if(i > number_of_civilizations )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("img1").src = updatedImage;
    document.getElementById("text1").innerHTML = updatedName;
}

