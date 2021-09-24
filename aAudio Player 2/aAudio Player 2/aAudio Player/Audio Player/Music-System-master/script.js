
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let back = document.querySelector(".backImage");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Aakash Kumar Singh",
    artist: "Delhi",
    image: "Photos/Aakash_Kumar_Singh.jpg",
    path: "Audios/Aakash_Kumar_Singh.mp3",
  },
  {
    name: "Aashish",
    artist: "MP-4",
    image: "Photos/Aashish.jpeg",
    path: "Audios/Aashish.mpeg",
  },
  {
    name: "Aashish Kashyap",
    artist: "Punjab",
    image: "Photos/Aashish_Kashyap.jpg",
    path: "Audios/Aashish_Kashyap.mpeg",
  },
  {
    name: "Aashna Popli",
    artist: "Rajasthan",
    image: "Photos/Aashna_Popli.jpg",
    path: "Audios/Aashna_Popli.adts",
  },
  {
    name: "Akash Kamwani",
    artist: "Maharashtra",
    image: "Photos/Akash_Kamwani.png",
    path: "Audios/Akash_Kamwani.mp3",
  },
  {
    name: "Amit Kumar",
    artist: "Punjab",
    image: "Photos/Amit_Kumar.jpg",
    path: "Audios/Amit_Kumar.mp3",
  },
  {
    name: "Anant Kesarwani",
    artist: "UP-6",
    image: "Photos/Anant_Kesarwani.jpg",
    path: "Audios/Anant_Kesarwani.adts",
  },
  {
    name: "Anjali Geetanjali Malik",
    artist: "Haryana",
    image: "Photos/Anjali_Geetanjali_Malik.jpg",
    path: "Audios/Anjali_Geetanjali_Malik.mpeg",
  },
  {
    name: "Anju Panjwani",
    artist: "UP-6",
    image: "Photos/Anju_Panjwani.jpg",
    path: "Audios/Anju_Panjwani.mp3",
  },
  {
    name: "Ankur Arora",
    artist: "Delhi",
    image: "Photos/Ankur_Arora.jpeg",
    path: "Audios/Ananya_Arora.mp4",
  },
  {
    name: "Ankur Kashyap",
    artist: "Punjab",
    image: "Photos/Ankur_Kashyap.jpeg",
    path: "Audios/Ankur_Kashyap.mpeg",
  },
  {
    name: "Ankush",
    artist: "Delhi",
    image: "Photos/Ankush.jpg",
    path: "Audios/Ankush.mpeg",
  },
  {
    name: "Anurag Gulati",
    artist: "Delhi",
    image: "Photos/Anurag_Gulati.jpg",
    path: "Audios/Anurag_Gulati.mp3",
  },
  {
    name: "Arti Bankey",
    artist: "MP-4",
    image: "Photos/Arti_Bankey.jpg",
    path: "Audios/Arti_Bankey.mp3",
  },
  {
    name: "Chandresh Kamwani",
    artist: "Maharashtra",
    image: "Photos/Chandresh_Kamwani.jpg",
    path: "Audios/Chandresh_Kamwani.mp3",
  },
  {
    name: "Dee kay",
    artist: "Delhi",
    image: "Photos/Dee_kay.jpeg",
    path: "Audios/Dee_kay.mp3",
  },
  {
    name: "Devyanshi",
    artist: "Delhi",
    image: "Photos/Devyanshi.jpeg",
    path: "Audios/Devyanshi.mp4",
  },
  {
    name: "Gunjan Shivam",
    artist: "Uttar Pradesh",
    image: "Photos/Gunjan_Shivam.jpeg",
    path: "Audios/Gunjan_Shivam.opus",
  },
  {
    name: "Himanshi Garvit",
    artist: "Delhi",
    image: "Photos/Himanshi_Garvit.jpeg",
    path: "Audios/Himanshi_Garvit.mpeg",
  },
  {
    name: "Jagjeet Kaur",
    artist: "Delhi",
    image: "Photos/Jagjeet_Kaur.jpg",
    path: "Audios/Jagjeet_Kaur.mpeg",
  },
  {
    name: "Kamlesh Pasrija",
    artist: "Haryana",
    image: "Photos/Kamlesh_Pasrija.jpeg",
    path: "Audios/Kamlesh_Pasrija.ogg",
  },
  {
    name: "Kamna Juneja",
    artist: "Haryana",
    image: "Photos/Kamna_Juneja.jpg",
    path: "Audios/Kamna_Juneja.mp3",
  },
  {
    name: "Kanita",
    artist: "Delhi",
    image: "Photos/Kanita.jpeg",
    path: "Audios/Kanita.mp3",
  },
  {
    name: "Kashish Ratwani",
    artist: "UP-6",
    image: "Photos/Kashish_Ratwani.jpeg",
    path: "Audios/Kashish_Ratwani.mp3",
  },
  {
    name: "Kiran Saini",
    artist: "Punjab",
    image: "Photos/Kiran_Saini.jpeg",
    path: "Audios/Kiran_Saini.mp4",
  },
  {
    name: "Kishu Duggal",
    artist: "Punjab",
    image: "Photos/Kishu_Duggal.jpeg",
    path: "Audios/Kishu_Duggal.mp3",
  },
  {
    name: "Madhu Rai",
    artist: "Delhi",
    image: "Photos/Madhu_Rai.jpeg",
    path: "Audios/Madhu_Rai.mp3",
  },
  {
    name: "Mahak Kalani",
    artist: "UP-6",
    image: "Photos/Mahak_Kalani.jpg",
    path: "Audios/Mahak_Kalani.mpeg",
  },
  {
    name: "Mahi Malviya",
    artist: "Gujarat",
    image: "Photos/Mahi_Malviya.jpg",
    path: "Audios/Mahi_Malviya.mp3",
  },
  {
    name: "Manju Saini",
    artist: "Delhi",
    image: "Photos/Manju_Saini.jpg",
    path: "Audios/Manju_Saini.mp3",
  },
  {
    name: "Monika Bhola",
    artist: "Delhi",
    image: "Photos/Monika_Bhola.jpg",
    path: "Audios/Monika_Bhola.mp3",
  },
  {
    name: "Monika Punani",
    artist: "Haryana",
    image: "Photos/Monika_Punani.jpeg",
    path: "Audios/Monika_Punani.mp3",
  },
  {
    name: "Muskan Devnani",
    artist: "Maharashtra",
    image: "Photos/Muskan_Devnani.jpg",
    path: "Audios/Muskan_Devnani.mpeg",
  },
  {
    name: "Namrata Khurana",
    artist: "Haryana",
    image: "Photos/Generic.jpeg",
    path: "Audios/Namrata_Khurana.adts",
  },
  {
    name: "Neelam Chauhan",
    artist: "UP-11",
    image: "Photos/Neelam_Chauhan.jpg",
    path: "Audios/Neelam_Chauhan.mpeg",
  },
  {
    name: "Neelu Kulshreshtha",
    artist: "UP-11",
    image: "Photos/Neelu_Kulshreshtha.jpeg",
    path: "Audios/Neelu_Kulshreshtha.mpeg",
  },
  {
    name: "Neeta Shrivastava",
    artist: "UP-11",
    image: "Photos/Neeta_Shrivastava.jpeg",
    path: "Audios/Neeta_Shrivastava.mp4",
  },
  {
    name: "Nidhi Chitkara",
    artist: "Delhi",
    image: "Photos/Nidhi_Chitkara.jpeg",
    path: "Audios/Nidhi_Chitkara.mp3",
  },
  {
    name: "Payal Lakhwani",
    artist: "Maharashtra",
    image: "Photos/Payal_Lakhwani.jpg",
    path: "Audios/Payal_Lakhwani.opus",
  },
  {
    name: "Peehu Khaneja",
    artist: "Punjab",
    image: "Photos/Peehu_Khaneja.jpg",
    path: "Audios/Peehu_Khaneja.adts",
  },
  {
    name: "Pooja Manocha",
    artist: "Delhi",
    image: "Photos/Generic.jpeg",
    path: "Audios/Pooja_Manocha.mpeg",
  },
  {
    name: "Poonam Pahwa",
    artist: "Haryana",
    image: "Photos/Poonam_Pahwa.jpg",
    path: "Audios/Poonam_Pahwa.mpeg",
  },
  {
    name: "Poonam Pruthi",
    artist: "Haryana",
    image: "Photos/Poonam_Pruthi.jpeg",
    path: "Audios/Poonam_Pruthi.mpeg",
  },
  {
    name: "Pranav Tandon",
    artist: "Haryana",
    image: "Photos/Pranav_Tandon.jpg",
    path: "Audios/Pranav_Tandon.mp4",
  },
  {
    name: "Pranay Luthra",
    artist: "Punjab",
    image: "Photos/Pranay_Luthra.jpeg",
    path: "Audios/Pranay_Luthra.mpeg",
  },
  {
    name: "Priya Arora",
    artist: "UP-11",
    image: "Photos/Priya_Arora.jpeg",
    path: "Audios/Priya_Arora.mp3",
  },
  {
    name: "Rachna Dhamija",
    artist: "Haryana",
    image: "Photos/Rachna_Dhamija.jpeg",
    path: "Audios/Rachna_Dhamija.opus",
  },
  {
    name: "Renu Kukreja",
    artist: "Haryana",
    image: "Photos/Generic.jpeg",
    path: "Audios/Renu_Kukreja.mp3",
  },
  {
    name: "Rim",
    artist: "Haryana",
    image: "Photos/Rim.jpg",
    path: "Audios/Rim.mpeg",
  },
  {
    name: "Riya Sethi",
    artist: "Punjab",
    image: "Photos/Riya_Sethi.jpg",
    path: "Audios/Riya_Sethi.wav",
  },
  {
    name: "Ruhani Yadav",
    artist: "Haryana",
    image: "Photos/Ruhani_Yadav.jpeg",
    path: "Audios/Ruhani_Yadav.mp3",
  },
  {
    name: "Samiya",
    artist: "Punjab",
    image: "Photos/Samiya.jpeg",
    path: "Audios/Samiya.mp4",
  },
  {
    name: "Sangeeta Pal",
    artist: "Rajasthan",
    image: "Photos/Sangeeta_Pal.jpg",
    path: "Audios/Sangeeta_Pal.adts",
  },
  {
    name: "Sanvi",
    artist: "Punjab",
    image: "Photos/Sanvi.jpeg",
    path: "Audios/Sanvi.ogg",
  },
  {
    name: "Satish Sandhotra",
    artist: "Punjab",
    image: "Photos/Satish_Sandhotra.jpg",
    path: "Audios/Satish_Sandhotra.mp3",
  },
  {
    name: "Shagun Hardwani",
    artist: "Maharashtra",
    image: "Photos/Shagun_Hardwani.jpg",
    path: "Audios/Shagun_Hardwani.ogx",
  },
  {
    name: "Shaifali Arora",
    artist: "Delhi",
    image: "Photos/Shaifali_Arora.jpeg",
    path: "Audios/Shaifali_Arora.mp4",
  },
  {
    name: "Shefali Neb",
    artist: "UP-6",
    image: "Photos/Shefali_Neb.jpg",
    path: "Audios/Shefali_Neb.mp3",
  },
  {
    name: "Shilpa Kalra",
    artist: "UP-6",
    image: "Photos/Shilpa_Kalra.jpeg",
    path: "Audios/Shilpa_Kalra.mpeg",
  },
  {
    name: "Shruti",
    artist: "Delhi",
    image: "Photos/Shruti.jpeg",
    path: "Audios/Shruti.mpeg",
  },
  {
    name: "Simran Gumber",
    artist: "Punjab",
    image: "Photos/Simran_Gumber.jpg",
    path: "Audios/Simran_Gumber.adts",
  },
  {
    name: "Sona Sharma",
    artist: "MP-4",
    image: "Photos/Sona_Sharma.jpg",
    path: "Audios/Sona_Sharma.mp3",
  },
  {
    name: "Sonia",
    artist: "Haryana",
    image: "Photos/Sonia.jpg",
    path: "Audios/Sonia.mp3",
  },
  {
    name: "Sonia_Gulati",
    artist: "Delhi",
    image: "Photos/Sonia_Gulati.jpg",
    path: "Audios/Sonia_Gulati.mp3",
  },
  {
    name: "Suman",
    artist: "UP-11",
    image: "Photos/Suman.jpeg",
    path: "Audios/Suman.ogg",
  },
  {
    name: "Sunita_Arora",
    artist: "Haryana",
    image: "Photos/Sunita_Arora.jpeg",
    path: "Audios/Sunita_Arora.mp4",
  },
  {
    name: "Surjit Kaur",
    artist: "Punjab",
    image: "Photos/Surjit_Kaur.jpg",
    path: "Audios/Surjit_Kaur.mpeg",
  },
  {
    name: "Swetta Mehta",
    artist: "UP-11",
    image: "Photos/Swetta_Mehta.jpg",
    path: "Audios/Swetta_Mehta.mpeg",
  },
  {
    name: "Tushar Arora",
    artist: "Punjab",
    image: "Photos/Tushar_Arora.jpeg",
    path: "Audios/Tushar_Arora.opus",
  },
  {
    name: "Urmil Charaya",
    artist: "Haryana",
    image: "Photos/Urmil_Charaya.jpg",
    path: "Audios/Urmil_Charaya.adts",
  },
  {
    name: "Vaishali",
    artist: "Delhi",
    image: "Photos/Vaishali.jpeg",
    path: "Audios/Vaishali.ogg",
  },
  {
    name: "Vanshita Hardwani",
    artist: "Maharashtra",
    image: "Photos/Vanshita_Hardwani.jpeg",
    path: "Audios/Vanshita_Hardwani.ogx",
  },
  {
    name: "Viha Walia",
    artist: "Delhi",
    image: "Photos/Viha_Walia.jpeg",
    path: "Audios/Viha_Walia.mp3",
  },
  {
    name: "Vinay Bharti",
    artist: "UP-6",
    image: "Photos/Generic.jpeg",
    path: "Audios/Vinay_Bharti.mpeg",
  },
  {
    name: "Vishesh Tondwal",
    artist: "Haryana",
    image: "Photos/Generic.jpeg",
    path: "Audios/Vishesh_Tondwal.mp3",
  },
];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  back.style.background = bgColor;
}


function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = ""

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  back.style.backgroundImage = "https://images.wallpaperscraft.com/image/stars_space_dark_139528_1920x1080.jpg" + track_list[track_index].image + ")";
  // back.style.backgroundImage.filter = "blur(3px)";
  
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

let PlayList_songs=document.querySelectorAll(".song-List");

for(let i of PlayList_songs) {
  i.addEventListener("click", function(e) {
      //filter = e.currentTarget.id;
      // console.log(this.id);
      loadTrack(this.id);
      playTrack();
  })
}


let open = document.querySelector(".open");
let MyPlayList = false;
open.addEventListener("click",function(e){

  if(!MyPlayList){
      let modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `<div class="my-playList">
                      <div class="music-playList">Play List</div>
                      <div class="songs">
                          <div class="song-List1" id="8">Pal</div>
                          <div class="song-List1" id="9">Dil Jugadu</div>
                          <div class="song-List1" id="10">Downtown</div>
                          
                      </div>
                    </div>`;
        document.querySelector(".playList").appendChild(modal);
        console.log("hi");
        MyPlayList = true;
        let PlayList_songs=document.querySelectorAll(".song-List1");

      for(let i of PlayList_songs) {
        i.addEventListener("click", function(e) {
            loadTrack(this.id);
            playTrack();
        })
      }
      
  }else{
    let removeMyList = document.querySelector(".modal");
    removeMyList.remove();

    MyPlayList = false;
  }
  
})


