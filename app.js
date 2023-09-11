const myAudio = document.querySelector("audio")
const playButton = document.querySelector("#play")
const myShuffle = document.querySelector("#shuffle")

// Audio is playing => PLAY to PAUSE
// Audio is not playing => PAUSE to PLAY

//To Track whether the audio is playing or not
let isAudioPlaying = false

function playTheAudio()
{
    myAudio.play()
    //immediately change play to pause
    // class="fa-solid fa-play"
    // access the class data
    playButton.classList.replace("fa-play", "fa-pause")
    isAudioPlaying = true
}

function pauseTheAudio()
{
    myAudio.pause()
    playButton.classList.replace("fa-pause", "fa-play")
    isAudioPlaying = false
}

// playButton(once) --> play the audio
// playButton(second time) --> pause the audio

playButton.addEventListener("click", function()
{
    if(isAudioPlaying)
    {
        pauseTheAudio()
    }
    else
    {
        playTheAudio()
    }
    
})

// When we click on forward button OR backward button, we have to consistently change the following things
// Image
// Song name
// Singer Name
// Audio File


const info = [
    {
       songName: "AAA",
       singerName: "Lil Nas X",
       data: 2
    },
    {
        songName: "BBB",
        singerName: "ATB/Topic/A7S",
        data: 3
    },
    {
        songName: "CCC",
        singerName: "Ella Henderson & Tom Grennan",
        data: 4
    }
]

const forwardButton = document.querySelector("#forward")
const mySongName = document.querySelector("h3")
const mySingerName = document.querySelector("h4")
const backwardButton = document.querySelector("#backward")

// songData =  {
//     songName: "Montero (call me by your name)",
//     singerName: "Lil Nas X",
//     data: 1
//  }

const myImage = document.querySelector("#image")

function updateSong(songData){

    mySongName.textContent = songData.songName
    mySingerName.textContent = songData.singerName
    myImage.src = `./images/image-${songData.data}.jpg`
    myAudio.src = `./musics/music-${songData.data}.mp3`
}

let songPosition = 0

// songPosition = 2(last song) --> (0)first song

// 3

const myLike = document.querySelector("#like")

forwardButton.addEventListener("click", function()
{    
    myLike.style.color = "white"
    // Update the Song data(image, singer name, song name, audio file)
    if(songPosition > info.length - 1)
    {
        songPosition = 0
    }

    updateSong(info[songPosition])
    console.log(songPosition)
    songPosition++

    playTheAudio()

})


backwardButton.addEventListener("click", function()
{    
    // // Update the Song data(image, singer name, song name, audio file)
    // 2 1 0 2 1 0 2 1 0
    
    myLike.style.color = "white"

    songPosition--

    if(songPosition < 0)
    {
        songPosition = info.length - 1
    }

    updateSong(info[songPosition])

    playTheAudio()

    
})

// We need to get the information related to time --> Current Time, Total Duration on Audio File

// timeupdate event gives the time related information

const htmlTotalDuration = document.querySelector(".totalDuration")
const htmlCurrentTime = document.querySelector(".currentTime")
const ChildProgressBar = document.querySelector(".childProgressBar")

myAudio.addEventListener("timeupdate", function(output)
{
    let myCurrentTime = output.srcElement.currentTime
    let myTotalDuration = output.srcElement.duration

    let totalDurationInMinutes = Math.floor(myTotalDuration / 60)
    let totalDurationInSeconds = Math.floor(myTotalDuration % 60)//remainder

    if(totalDurationInSeconds < 10)
    {
        totalDurationInSeconds = `0${totalDurationInSeconds}`
    }

    htmlTotalDuration.textContent = `${totalDurationInMinutes}:${totalDurationInSeconds}`




    let currentTimeInMinutes = Math.floor(myCurrentTime / 60)
    let currentTimeInSeconds = Math.floor(myCurrentTime % 60)//remainder

    if(currentTimeInSeconds < 10)
    {
        currentTimeInSeconds = `0${currentTimeInSeconds}`
    }

    htmlCurrentTime.textContent = `${currentTimeInMinutes}:${currentTimeInSeconds}`

    ChildProgressBar.style.width = `${myCurrentTime / myTotalDuration * 100}%`
})

// Use Back Ticks when you want to attach some extra data

// Local Storage(Container) --> Temporarly(Appn is Active) --> Will always store the data in Key - Value pair --> Inside the Browser
// 5 mb

myLike.addEventListener("click", function()
{
    // Change the color to red and also store the details(Song Name and Singer Name)
    myLike.style.color = "red"
    // Adding the details to local storage
    localStorage.setItem(mySingerName.textContent, mySongName.textContent)
})

myLike.addEventListener("dblclick", function()
{
    myLike.style.color = "white"

    localStorage.removeItem(mySingerName.textContent)
})

// 3 songs -> 0 or 1 or 2
myShuffle.addEventListener("click", function()
{
    const songPositionNo = Math.floor(Math.random() * info.length)//1
    updateSong(info[songPositionNo])//info[0] OR info[1] info[2]
    playTheAudio()
})

// $ git push origin main
// info: please complete authentication in your browser...
// remote: Permission to uday5252/Projects-Submission.git denied to sankeshreddy.
// fatal: unable to access 'https://github.com/uday5252/Projects-Submission/': The requested URL returned error: 403

// Seeking

// Click --> ChildProgressBar should Move to that location --> currentTime should be updated

// Click --> info(Distance)

const ParentProgressBar = document.querySelector(".parentProgressBar")

ParentProgressBar.addEventListener("click", function(output)
{
    const clickPercentage = output.offsetX / output.srcElement.offsetWidth * 100

    ChildProgressBar.style.width = `${clickPercentage}%`

    // console.log(myAudio.duration)
    myAudio.currentTime = (output.offsetX / output.srcElement.offsetWidth) * myAudio.duration

    // 0.56 * 125 = 70, 1:10
    // (output.offsetX / output.srcElement.offsetWidth) ==> disatnce covered not in %


    
})

