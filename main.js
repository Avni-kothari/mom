var images = [
    "https://github.com/Avni-kothari/photos/blob/main/kajal.jpg?raw=true",
    "https://github.com/Avni-kothari/photos/blob/main/eye%20cream.jpg?raw=true",
"https://github.com/Avni-kothari/photos/blob/main/lip%20balm.jpg?raw=true",
    "https://github.com/Avni-kothari/photos/blob/main/utan.jpg?raw=true",
    "https://github.com/Avni-kothari/photos/blob/main/face%20pack.jpg?raw=true",
    "https://github.com/Avni-kothari/photos/blob/main/facial%20bombs.jpg?raw=true",
    "https://github.com/Avni-kothari/photos/blob/main/gels.jpg?raw=true",
    "https://github.com/Avni-kothari/photos/blob/main/roll%20on.jpg?raw=true",
    "https://github.com/Avni-kothari/photos/blob/main/bath%20salts.jpg?raw=true",
    "https://github.com/Avni-kothari/photos/blob/main/whipped%20cream.jpg?raw=true",
    "https://github.com/Avni-kothari/photos/blob/main/body%20mist.jpg?raw=true"
];
var reasons = [
    "A Woman's Charm Must Be Seen In Her Eyes.As It Is The Gateway To Her Heart.",
    "A Good Eye Cream Is Really Important When You Are Travelling,Busy And Stressed-That's When The Puffy Circles Can Get You.",
    "Start Each Day With Your Favourite Lipbalm And A Beautiful Smile.",
    "Use A Natural Ubtan To Cleanse Your Body,It Removes Dirt And Dead Skin Cells To Reveal Naturally Glowing Skin.",
    "Beautiful Skin Requires Commitment Not A Miracle.",
    "Great Skin Dosen't Happen By Chance It Happens By Appointment.",
    "Always Have Something Beautiful In Sight,Even If It's Just A Daisy In A Jelly Glass.",
    "Just Roll It.",
    "Wash Away Those Troubles Have A Soak With Salts.",
    "Whipped Soap Is The Love Of Beauty.",
    "Pepole Who Smell Good Are Automatically More Attractive."
    ];
var i=1;
function change(){
 document.getElementById("IMG").src=images[i];
  document.getElementById("para").innerHTML=reasons[i];
  i++;
  if(i==10)
{
  i=0;
}
  
}