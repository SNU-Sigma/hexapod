// Auto-generated. Do not edit!

// (in-package hexapod_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Sounds {
  constructor() {
    this.torque = false;
    this.battery = false;
    this.auto_level = false;
    this.stand = false;
    this.waiting = false;
    this.shut_down = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Sounds
    // Serialize message field [torque]
    bufferInfo = _serializer.bool(obj.torque, bufferInfo);
    // Serialize message field [battery]
    bufferInfo = _serializer.bool(obj.battery, bufferInfo);
    // Serialize message field [auto_level]
    bufferInfo = _serializer.bool(obj.auto_level, bufferInfo);
    // Serialize message field [stand]
    bufferInfo = _serializer.bool(obj.stand, bufferInfo);
    // Serialize message field [waiting]
    bufferInfo = _serializer.bool(obj.waiting, bufferInfo);
    // Serialize message field [shut_down]
    bufferInfo = _serializer.bool(obj.shut_down, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Sounds
    let tmp;
    let len;
    let data = new Sounds();
    // Deserialize message field [torque]
    tmp = _deserializer.bool(buffer);
    data.torque = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [battery]
    tmp = _deserializer.bool(buffer);
    data.battery = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [auto_level]
    tmp = _deserializer.bool(buffer);
    data.auto_level = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stand]
    tmp = _deserializer.bool(buffer);
    data.stand = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [waiting]
    tmp = _deserializer.bool(buffer);
    data.waiting = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [shut_down]
    tmp = _deserializer.bool(buffer);
    data.shut_down = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'hexapod_msgs/Sounds';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9e277e5433232e212c4281205788a826';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool torque
    bool battery
    bool auto_level
    bool stand
    bool waiting
    bool shut_down
    
    `;
  }

};

module.exports = Sounds;
