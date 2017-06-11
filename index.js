const song = {meta:{}, data:[

]};

var Generator = { };

Generator.ambient = function() {
  // push to song.data array //
  if(Generator.sequence === 1 ) {
    song.data.push({ms:Generator.ms, sequence:Generator.sequence, file: 'dragon_yawn.wav'})
  }
};
Generator.beat = function() {
  // push to song.data array //

  if(Generator.sequence === 4 ) {
    song.data.push({ms:Generator.ms, sequence:Generator.sequence, file: 'boom.wav'})
  }else{
    song.data.push({ms:Generator.ms, sequence:Generator.sequence, file: 'tsk.wav'})
  }


};
Generator.foreground = function() {
  // push to song.data array //
  if(Generator.ms<5000) {
    song.data.push({ms:Generator.ms, sequence:Generator.sequence, file: 'piano.wav'})
  }
};

Generator.bpm = 120;

Generator.run = function() {

  Generator.ambient();
  Generator.beat();
  Generator.foreground();

};

// Start loop
Generator.interval = (1000*60) / Generator.bpm;
Generator.ms = 0;
Generator.sequences = 8;
Generator.sequence = 0;


while(Generator.ms<10000){ // 10 second song

  Generator.ms = Generator.ms + Generator.interval;
  Generator.sequence++;
  if(Generator.sequence>Generator.sequences) Generator.sequence = 1;
  Generator.run()

}


clearInterval(Generator.id);
song.meta.bpm = Generator.bpm;
console.log(JSON.stringify(song, null, '  '))
