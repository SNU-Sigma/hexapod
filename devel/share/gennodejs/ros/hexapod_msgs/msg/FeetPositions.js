// Auto-generated. Do not edit!

// (in-package hexapod_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Pose = require('./Pose.js');

//-----------------------------------------------------------

class FeetPositions {
  constructor() {
    this.foot = new Array(6).fill(new Pose());
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FeetPositions
    // Serialize message field [foot]
    obj.foot.forEach((val) => {
      bufferInfo = Pose.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FeetPositions
    let tmp;
    let len;
    let data = new FeetPositions();
    len = 6;
    // Deserialize message field [foot]
    for (let i = 0; i < len; ++i) {
      tmp = Pose.deserialize(buffer);
      data.foot[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'hexapod_msgs/FeetPositions';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd12724c3b1519cfb275eb5b1d0e25de2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    hexapod_msgs/Pose[6] foot
    
    ================================================================================
    MSG: hexapod_msgs/Pose
    geometry_msgs/Point position
    hexapod_msgs/RPY orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: hexapod_msgs/RPY
    float64 roll
    float64 pitch
    float64 yaw
    
    `;
  }

};

module.exports = FeetPositions;
