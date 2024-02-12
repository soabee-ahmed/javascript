let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 100;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 100;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let pop_artist = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    pop_artist.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    pop_artist.scrollLeft -= 330;
});


const songs = [
    {
        id: 1,
        songName: `<h5>On My Way<br>
    <div class="subtitle">Alan Walker</div>`,
        poster: "song images/1.jpg"
    },
    {
        id: 2,
        songName: `<h5>Aaj Se Teri<br>
    <div class="subtitle">Arijit Singh</div>`,
        poster: "song images/2.jpg"
    },
    {
        id: 3,
        songName: `<h5>Arjan-Vailly<br>
    <div class="subtitle">Bhupinder Babbal</div>`,
        poster: "song images/3.jpg"
    },
    {
        id: 4,
        songName: `<h5>Baari<br>
    <div class="subtitle">Bilal Saeed</div>`,
        poster: "song images/4.jpg"
    },
    {
        id: 5,
        songName: `<h5>Check It Out<br>
    <div class="subtitle">Parmish Verma</div>`,
        poster: "song images/5.jpg"
    },
    {
        id: 6,
        songName: `<h5>cheques<br>
    <div class="subtitle">Shubh</div>`,
        poster: "song images/6.jpg"
    },
    {
        id: 7,
        songName: `<h5>Khairiyat<br>
    <div class="subtitle">Arijit Singh</div>`,
        poster: "song images/7.jpg"
    },
    {
        id: 8,
        songName: `<h5>King Shit<br>
        <div class="subtitle">Shubh</div>`,
        poster: "song images/8.jpg"
    },
    {
        id: 9,
        songName: `<h5>Love Ya<br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster: "song images/9.jpg"
    },
    {
        id: 10,
        songName: `<h5>Lutt Putt Gaya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "song images/10.jpg"
    },
    {
        id: 11,
        songName: `<h5>Naal Naal<br>
        <div class="subtitle">Prabh Gill</div>`,
        poster: "song images/11.jpg"
    },
    {
        id: 12,
        songName: `<h5>Never Fold<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster: "song images/12.jpg"
    },
    {
        id: 13,
        songName: `<h5>Old Skool<br>
        <div class="subtitle">Prem Dhillon</div>`,
        poster: "song images/13.jpg"
    },
    {
        id: 14,
        songName: `<h5>Pasoori<br>
        <div class="subtitle">Ali Sethi</div>`,
        poster: "song images/14.jpg"
    },
    {
        id: 15,
        songName: `<h5>Phir Bhi Tumko Chahunga<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "song images/15.jpg"
    },
    {
        id: 16,
        songName: `<h5>Saari-Duniya-Jalaa-Denge<br>
        <div class="subtitle">B Praak</div>`,
        poster: "song images/16.jpg"
    },
    {
        id: 17,
        songName: `<h5>Samjhawan<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "song images/17.jpg"
    },
    {
        id: 18,
        songName: `<h5>Satranga<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "song images/18.jpg"
    },
    {
        id: 19,
        songName: `<h5>So High<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster: "song images/19.jpg"
    },
    {
        id: 20,
        songName: `<h5>Struggler<br>
        <div class="subtitle">R Nait</div>`,
        poster: "song images/20.jpg"
    },
    {
        id: 21,
        songName: `<h5>Supne Ni Saun Dinde<br>
        <div class="subtitle">Prabh Bains</div>`,
        poster: "song images/21.jpg"
    },
    {
        id: 22,
        songName: `<h5>You And Me<br>
        <div class="subtitle">Shubh</div>`,
        poster: "song images/22.jpg"
    },
]

//search data start
let search_results=document.getElementsByClassName('search_results')[0];

songs.forEach(element=>{
    const {id,songName,poster}=element;
    let card=document.createElement('a');
    card.classList.add('card');
    card.href="#"+id;
    card.innerHTML=`<img src="${poster}" alt="">
    <div class="cnt">
        ${songName}
    </h5>
    </div>`;
    search_results.appendChild(card);
})
let input=document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=search_results.getElementsByTagName('a');
    for(let index=0;index,items.length;index++){
        let as=items[index].getElementsByClassName('cnt')[0];
        let text_value=as.textContent||as.innerHTML;

        if(text_value.toUpperCase().indexOf(input_value)>-1){
            items[index].style.display="flex";
        }
        else{
            items[index].style.display="none";
        }
        
        if(input.value==0){
            search_results.style.display="none";
        }
        else
            search_results.style.display="";
    }
})

//search data end
const music = new Audio('songs/Baari.mp3');
//music.play();
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
});

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((e1) => {
        e1.style.background = `rgb(105,105,105,.0)`;
    })
}

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e1) => {
        e1.classList.add('bi-play-circle');
        e1.classList.remove('bi-pause-circle-fill');
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (e1) => {
        index = e1.target.id;
        //console.log(index);
        music.src = `songs/${index}.mp3`;
        poster_master_play.src = `song images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `songs/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            // poster_master_play.src=poster;
            download_music.setAttribute('download', songName);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = `rgb(105,105,105,.1)`;   //highlighting the current song
        makeAllPlays();
        e1.target.classList.remove('bi-play-circle');
        e1.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })
})

//seek bar,duration and current time set
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    //setting the duration of a music
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    //setting the current time for music which changes every second
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    //set the dot and bar to move along with music
    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    let vol_a = vol.value;
    if (vol_a == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    else if (vol_a > 0) {
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
    }
    if (vol_a > 50) {
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length / 2;
    }
    music.src = `songs/${index}.mp3`;
    //poster_master_play.src=`song images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach((elss) => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = `rgb(105,105,105,.1)`;   //highlighting the current song
    makeAllPlays();
    e1.target.classList.remove('bi-play-circle');
    e1.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

})
//
let length = Array.from(document.getElementsByClassName('songItem')).length / 2;
next.addEventListener('click', () => {
    index++;
    if (index > length) {
        index = 1;
    }
    music.src = `songs/${index}.mp3`;
    //poster_master_play.src=`song images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach((elss) => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = `rgb(105,105,105,.1)`;   //highlighting the current song
    makeAllPlays();
    e1.target.classList.remove('bi-play-circle');
    e1.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch(a) {
        case "next":
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.innerHTML = "repeat";
            break;
        case "repeat":
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = "random";
            break;
        case "random":
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.innerHTML = "next";
            break;

    }

})


const next_music=()=>{
    if(index==songs.length)
    index=1;
    else
    index++;
    music.src = `songs/${index}.mp3`;
        poster_master_play.src = `song images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `songs/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            // poster_master_play.src=poster;
            download_music.setAttribute('download', songName);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = `rgb(105,105,105,.1)`;   //highlighting the current song
        makeAllPlays();
        e1.target.classList.remove('bi-play-circle');
        e1.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}

const repeat_music=()=>{
        index;
        music.src = `songs/${index}.mp3`;
        poster_master_play.src = `song images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `songs/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            // poster_master_play.src=poster;
            download_music.setAttribute('download', songName);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = `rgb(105,105,105,.1)`;   //highlighting the current song
        makeAllPlays();
        e1.target.classList.remove('bi-play-circle');
        e1.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}

const random_music=()=>{
        if(index==songs.length)
        index=1;
        else{
            index=Math.floor((Math.random()*songs.length)+1);
        }
        music.src = `songs/${index}.mp3`;
        poster_master_play.src = `song images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `songs/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            // poster_master_play.src=poster;
            download_music.setAttribute('download', songName);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = `rgb(105,105,105,.1)`;   //highlighting the current song
        makeAllPlays();
        e1.target.classList.remove('bi-play-circle');
        e1.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}



music.addEventListener('ended', () => {              //when music ended than if our case matches with next than after ending of music next song is played if matches with repeat than same song is repated if random than randomly any song is played
    let b=shuffle.innerHTML;
    switch(b){
         case "next":
            next_music();
            break;
         case "repeat":
            repeat_music();
            break;
         case "random":
            random_music();
            break;
    }
})


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})
























