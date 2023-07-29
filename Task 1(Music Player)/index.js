let musicprogress=document.getElementById("music-progress");
             let song=document.getElementById("song");
             let ctrlIcon=document.getElementById("ctrlIcon");
                song.onloadedmetadata=function(){
                    musicprogress.max= song.duration;
                    musicprogress.value= song.currentTime;

                }
                function playPause(){
                    if(ctrlIcon.classList.contains("fa-pause")){
                        song.pause();
                        ctrlIcon.classList.remove("fa-pause");
                        ctrlIcon.classList.add("fa-play");
                    }
                    else{
                        song.play();
                        ctrlIcon.classList.add("fa-pause");
                        ctrlIcon.classList.remove("fa-play");
                    }
                }
                if(song.play()){
                    setInterval(()=>{
                        musicprogress.value=song.currentTime
                    },500);
                }
             
                musicprogress.onchange=function(){
                    song.play();
                    song.currentTime = musicprogress.value;
                    ctrlIcon.classList.add("fa-pause");
                    ctrlIcon.classList.remove("fa-play");
                }
