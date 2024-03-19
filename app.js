import {createImage} from "./img.js"
import {createInfo} from "./info.js"


let container = document.getElementById("container")

const data = {
    titleOne: 'Serene Moments: A Playful Dance with Nature',
    titleTwo: 'Tales of Tail-Wagging Adventures',
    paragraphOne: 'Each leap and twist brings a new level of exuberance, filling the air with an infectious energy. Passersby cannot help but pause and smile, captivated by the sheer innocence and happiness radiating from this charming canine.',
    paragraphTwo:'Whether its overcoming obstacles, forging new friendships, or simply enjoying the simple pleasures of life, these tales remind us of the profound impact that dogs have on our lives. With each turn of the page, "Pawsitive Vibes" serves as a reminder to cherish the moments spent with our furry friends and to embrace the joy they bring into our lives.',
    buttonOne: 'Contact Us',
    buttonTwo: 'About Us',
    buttonThree:'Visit Us',
    buttonFour: 'Comments!!',
    myImage: 'cutie dog.jpg'
  };

  const{titleOne,titleTwo ,paragraphOne, paragraphTwo, buttonOne,buttonTwo,buttonThree, buttonFour ,myImage} = data


  container.append(createInfo(titleOne, titleTwo, paragraphOne, paragraphTwo, buttonOne, buttonTwo, buttonThree, buttonFour,myImage))
  container.append(createImage(myImage))
