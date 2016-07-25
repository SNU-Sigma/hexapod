// Auto-generated. Do not edit!

// (in-package hexapod_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class LegJoints {
  constructor() {
    this.coxa = 0.0;
    this.femur = 0.0;
    this.tibia = 0.0;
    this.tarsus = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LegJoints
    // Serialize message field [coxa]
    bufferInfo = _serializer.float64(obj.coxa, bufferInfo);
    // Serialize message field [femur]
    bufferInfo = _serializer.float64(obj.femur, bufferInfo);
    // Serialize message field [tibia]
    bufferInfo = _serializer.float64(obj.tibia, bufferInfo);
    // Serialize message field [tarsus]
    bufferInfo = _serializer.float64(obj.tarsus, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LegJoints
    let tmp;
    let len;
    let data = new LegJoints();
    // Deserialize message field [coxa]
    tmp = _deserializer.float64(buffer);
    data.coxa = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [femur]
    tmp = _deserializer.float64(buffer);
    data.femur = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tibia]
    tmp = _deserializer.float64(buffer);
    data.tibia = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tarsus]
    tmp = _deserializer.float64(buffer);
    data.tarsus = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'hexapod_msgs/LegJoints';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4281b159c18654b4920aa4a2c525621c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 coxa
    float64 femur
    float64 tibia
    float64 tarsus
    
    `;
  }

};

module.exports = LegJoints;
