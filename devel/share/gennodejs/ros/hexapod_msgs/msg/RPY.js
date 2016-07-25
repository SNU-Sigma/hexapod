// Auto-generated. Do not edit!

// (in-package hexapod_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class RPY {
  constructor() {
    this.roll = 0.0;
    this.pitch = 0.0;
    this.yaw = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RPY
    // Serialize message field [roll]
    bufferInfo = _serializer.float64(obj.roll, bufferInfo);
    // Serialize message field [pitch]
    bufferInfo = _serializer.float64(obj.pitch, bufferInfo);
    // Serialize message field [yaw]
    bufferInfo = _serializer.float64(obj.yaw, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RPY
    let tmp;
    let len;
    let data = new RPY();
    // Deserialize message field [roll]
    tmp = _deserializer.float64(buffer);
    data.roll = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pitch]
    tmp = _deserializer.float64(buffer);
    data.pitch = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [yaw]
    tmp = _deserializer.float64(buffer);
    data.yaw = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'hexapod_msgs/RPY';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'eeec8b25a660789a89540dedcb2b06d6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 roll
    float64 pitch
    float64 yaw
    
    `;
  }

};

module.exports = RPY;
