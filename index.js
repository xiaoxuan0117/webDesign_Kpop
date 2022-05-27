
//header video and audio control
const video = document.getElementById("headVideo")
const pause = document.querySelector(".pause")
const volume = document.querySelector(".volume")
let headerVideoPlaying = true
video.volume = 0;

pause.addEventListener('click',()=>{
    if(headerVideoPlaying){
        video.pause()
        headerVideoPlaying = false
        pause.src="./icon/play.png"
    }else{
        video.play()
    }
})
video.addEventListener('playing',()=>{
    headerVideoPlaying = true
    pause.src="./icon/pause.png"
})

volume.addEventListener('click',()=>{
    if(video.volume == 0){
        video.volume = 1
        volume.src="./icon/volumeOn.png"
    }else{
        video.volume = 0
        volume.src="./icon/volumeOff.png"
    }
})

//make carousel
function setCarousel(index, images, frame, carousel, idol){
    let currentIndex = index
    let prevIndex = index-1

    function changeImage(){
        frame.src = `./${idol}/info_0${currentIndex}.png`
        carousel.children[prevIndex-1].classList.remove('action')
        carousel.children[currentIndex-1].classList.add('action')
        prevIndex = currentIndex
        currentIndex = currentIndex+1
        if (currentIndex == images+1){
            currentIndex = 1
        }
    }

    let imageCarousel = setInterval(changeImage,3000)

    for(item in carousel.children){
        if(item<carousel.children.length){
            const index = parseInt(item)
            carousel.children[item].addEventListener('click', ()=>{
                clearInterval(imageCarousel)
                currentIndex = index+1
                changeImage()
                imageCarousel = setInterval(changeImage,3000)
            })
        }
    }
}


const twiceFrame = document.getElementById('twiceInfoImage')
const twiceCarousel = document.getElementById('twiceCarousel')
setCarousel(2, 6, twiceFrame, twiceCarousel, "twice")


const mamamooFrame = document.getElementById('mamamooInfoImage')
const mamamooCarousel = document.getElementById('mamamooCarousel')
setCarousel(2, 6, mamamooFrame, mamamooCarousel, "mamamoo")

const iuFrame = document.getElementById('iuInfoImage')
const iuCarousel = document.getElementById('iuCarousel')
setCarousel(2, 6, iuFrame, iuCarousel, "iu")

const hyukohFrame = document.getElementById('hyukohInfoImage')
const hyukohCarousel = document.getElementById('hyukohCarousel')
setCarousel(2, 5, hyukohFrame, hyukohCarousel, "hyukoh")

//twice member
const twiceMemberPicture = ["Nayeon","Jeongyeon","Momo", "Sana", "Jihyo", "Mina", "Dahyun", "Chaeyoung", "Tzuyu"]
const twiceMemberInfo = [
    "<p>娜璉 나연</p><p>A型<br/>韓國<br/>領唱、領舞</p>",
    "<p>定延 정연</p><p>O型<br/>韓國<br/>領唱</p>",
    "<p>Momo 모모</p><p>A型<br/>日本<br/>主領舞、副唱、副Rapper</p>",
    "<p>Sana 사나</p><p>B型<br/>日本<br/>副唱</p>",
    "<p>志效 지효</p><p>O型<br/>韓國<br/>隊長、主唱</p>",
    "<p>Mina 미나</p><p>A型<br/>日本<br/>副唱、主領舞</p>",
    "<p>多賢 다현</p><p>O型<br/>韓國<br/>副唱、領Rapper</p>",
    "<p>彩英 채영</p><p>B型<br/>韓國<br/>副唱、主饒舌</p>",
    "<p>子瑜 쯔위</p><p>A型<br/>台灣<br/>副唱、領舞</p>",]
const twiceMembers = document.querySelectorAll('.twiceMember')
const twiceMemberProfile = document.getElementById('twiceMemberProfile')
const twiceProfileInfo = document.getElementById('twiceProfileInfo')
for(member in twiceMembers){
    if(member<9){
        const index = parseInt(member)
        twiceMembers[member].addEventListener('mouseover', ()=>{
            twiceMemberProfile.children[0].src=`./twice/${twiceMemberPicture[index]}2.png`
            twiceProfileInfo.innerHTML = twiceMemberInfo[index]
        })
    }
}

const hyukohMemberPicture = ["Ohhyuk","Donggeon","Inwoo","Hyunjae"]
const hyukohMemberInfo = [
    "<p><span>Ohhyuk 오혁 </span><br/>1993/10/5<br/>Leader, Vocal, Guitar, Lyricist, Maknae</p>",
    "<p><span>Donggeon 동건</span><br/>1993/4/4<br/>BASS</p>",
    "<p><span>Inwoo 인우</span><br/>1993/6/14<br/>Drummer</p>",
    "<p><span>Hyunjae 현제</span><br/>1993/7/31<br/>Lead Guitar</p>"
]
const hyukohMembers = document.querySelectorAll('.hyukohMember')
const hyukohProfileImage = document.getElementById('hyukohProfileImage')
const hyukohProfileInfo = document.getElementById('hyukohProfileInfo')
for(member in hyukohMembers){
    if(member<4){
        const index = parseInt(member)
        hyukohMembers[index].addEventListener('mouseover',()=>{
            hyukohProfileImage.src = `./hyukoh/${hyukohMemberPicture[index]}.png`
            hyukohProfileInfo.innerHTML = hyukohMemberInfo[index]
        })
    }
}


//audio control
let currentAudio
const audios = document.getElementsByTagName('audio')
for (audio in audios){
    if(audio<audios.length){
        const index = parseInt(audio)
        audios[index].addEventListener('play',()=>{
            if(currentAudio!=null & currentAudio!=index){
                audios[currentAudio].pause()
            }
            currentAudio = index
        })
    }
}