var artworks=[
    {
        description:"the old bridge",
        address:"https://images.unsplash.com/photo-1723049235305-65395182241f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        description:"flower",
        address:"https://images.unsplash.com/photo-1528883402574-f11c7f90bbe6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
    },
    {
        description:"the glass",
        address:"https://images.unsplash.com/photo-1723174278559-cb3e4bfda6f4?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        description:"  nature",
        address:"https://images.unsplash.com/photo-1723069438473-f34d54c8ec2c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

]

var feed= document.getElementById('art-feed');

for (var i=0;i<artworks.length;i++){
    var feedBox=document.createElement('div');
    feedBox.setAttribute('class', 'feed-box');

    var feedImage=document.createElement('div');
    feedImage.setAttribute('class','feed-image');

    var img=document.createElement('img');
    img.setAttribute('src',artworks[i].address);

    var feedDescription=document.createElement('div');
    feedDescription.setAttribute('class','feed-description');

    var text=document.createTextNode(artworks[i].description);

    feedImage.appendChild(img);
    feedDescription.appendChild(text);
    feedBox.appendChild(feedImage);
    feedBox.appendChild(feedDescription);

    feed.appendChild(feedBox);
}