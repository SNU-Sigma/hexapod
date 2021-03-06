// Auto-generated. Do not edit!

// (in-package sound_play.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class SoundRequestFeedback {
  constructor() {
    this.playing = false;
    this.stamp = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SoundRequestFeedback
    // Serialize message field [playing]
    bufferInfo = _serializer.bool(obj.playing, bufferInfo);
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SoundRequestFeedback
    let tmp;
    let len;
    let data = new SoundRequestFeedback();
    // Deserialize message field [playing]
    tmp = _deserializer.bool(buffer);
    data.playing = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sound_play/SoundRequestFeedback';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '237faa3e32b21b083f32acf5260255a4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    bool playing
    time stamp
    
    `;
  }

};

module.exports = SoundRequestFeedback;
