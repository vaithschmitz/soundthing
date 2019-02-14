import Tone from 'tone';
import {Chord, PcSet} from 'tonal';

function LoopHandler(inst, notes, nlength, timeout){
    let loopIndex = 0;
    Tone.Transport.scheduleRepeat(time => {
    repeat(time)
  }, nlength);

  function repeat(time){
    let note = notes[loopIndex % notes.length];
    inst.triggerAttackRelease(note, nlength, time);
    loopIndex++ ;
  }

  Tone.Transport.start();
  setTimeout(() => {
    Tone.Transport.stop();
  }, timeout)
}

export function LoopHandler(){}