// Auto-generated. Do not edit!

// (in-package sound_play.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class SoundRequest {
  constructor() {
    this.sound = 0;
    this.command = 0;
    this.volume = 0.0;
    this.arg = '';
    this.arg2 = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SoundRequest
    // Serialize message field [sound]
    bufferInfo = _serializer.int8(obj.sound, bufferInfo);
    // Serialize message field [command]
    bufferInfo = _serializer.int8(obj.command, bufferInfo);
    // Serialize message field [volume]
    bufferInfo = _serializer.float32(obj.volume, bufferInfo);
    // Serialize message field [arg]
    bufferInfo = _serializer.string(obj.arg, bufferInfo);
    // Serialize message field [arg2]
    bufferInfo = _serializer.string(obj.arg2, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SoundRequest
    let tmp;
    let len;
    let data = new SoundRequest();
    // Deserialize message field [sound]
    tmp = _deserializer.int8(buffer);
    data.sound = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [command]
    tmp = _deserializer.int8(buffer);
    data.command = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [volume]
    tmp = _deserializer.float32(buffer);
    data.volume = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [arg]
    tmp = _deserializer.string(buffer);
    data.arg = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [arg2]
    tmp = _deserializer.string(buffer);
    data.arg2 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sound_play/SoundRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd098ce4a040686259137ece23a625167';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # IMPORTANT: You should never have to generate this message yourself.
    # Use the sound_play::SoundClient C++ helper or the
    # sound_play.libsoundplay.SoundClient Python helper.
    
    # Sounds
    int8 BACKINGUP = 1
    int8 NEEDS_UNPLUGGING = 2
    int8 NEEDS_PLUGGING = 3
    int8 NEEDS_UNPLUGGING_BADLY = 4
    int8 NEEDS_PLUGGING_BADLY = 5
    
    # Sound identifiers that have special meaning
    int8 ALL = -1 # Only legal with PLAY_STOP
    int8 PLAY_FILE = -2
    int8 SAY = -3
    
    int8 sound # Selects which sound to play (see above)
    
    # Commands
    int8 PLAY_STOP = 0 # Stop this sound from playing
    int8 PLAY_ONCE = 1 # Play the sound once
    int8 PLAY_START = 2 # Play the sound in a loop until a stop request occurs
    
    int8 command # Indicates what to do with the sound
    
    # Volume at which to play the sound, with 0 as mute and 1.0 as 100%.
    float32 volume
    
    string arg # file name or text to say
    string arg2 # other arguments
    
    `;
  }

};

// Constants for message
SoundRequest.Constants = {
  BACKINGUP: 1,
  NEEDS_UNPLUGGING: 2,
  NEEDS_PLUGGING: 3,
  NEEDS_UNPLUGGING_BADLY: 4,
  NEEDS_PLUGGING_BADLY: 5,
  ALL: -1,
  PLAY_FILE: -2,
  SAY: -3,
  PLAY_STOP: 0,
  PLAY_ONCE: 1,
  PLAY_START: 2,
}

module.exports = SoundRequest;
