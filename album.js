// Function to create a single song item
function createSongItem(image,title,views,dur) { 
    const songs = document.getElementById("songs");
    const songItem = document.createElement("div").addEventListener("click", function() {
      var audio = new Audio('https://asset.cloudinary.com/docvdcyjk/392d3042b7c004962c83f253ed253e74');
        audio.play();
} );
    songItem.classList.add("song-item");    
    const img = document.createElement("img"); 
    img.src=image; 
    const songName = document.createElement("span");   
    songName.id="songname";  
    const songviews = document.createElement("p");     
    songviews.id="views";
    const songduration = document.createElement("a"); 
    songduration.classList.add("duration");   
    songduration.textContent=dur;
    songviews.textContent = views;
    songName.textContent = title; // Corrected syntax for setting text content 
    songItem.appendChild(img);
    songItem.appendChild(songName);  
    songItem.appendChild(songviews); 
    songItem.appendChild(songduration); 
    const contentHeight = songs.scrollHeight; 


 songsHeight = contentHeight + 70; 
 songs.style.height = `${songsHeight}px`;
    songs.appendChild(songItem);
}

createSongItem("https://i.ytimg.com/vi/ijE2MMtzkHg/maxresdefault.jpg","Afsany","348,756,048","4:11");
createSongItem("https://assets.audiomack.com/young-stunners/f1b443b229bf35d9506f9dcb16220d86ec2c4ab1f7c1101d4247c8b4684a0f9b.jpeg?width=1000&height=1000&max=true.","Gumaan","239,048,137","5:01");
createSongItem("https://source.boomplaymusic.com/group10/M00/05/02/84cb4fcd3c9a45d2990842bd12ba540c_464_464.jpg","Dont Mind","102,489","2:49");
createSongItem("https://i.scdn.co/image/ab67616d0000b2733de0fcec9539c8361ed3fd1b","Quarantine","482,087,489","4:49"); 
createSongItem("https://images.genius.com/d55252cfe84a46024a17951d50520f41.1000x1000x1.png","Balli aur main","342,879,89","3:39"); 
