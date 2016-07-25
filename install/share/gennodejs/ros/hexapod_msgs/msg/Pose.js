// Auto-generated. Do not edit!

// (in-package hexapod_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let RPY = require('./RPY.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class Pose {
  constructor() {
    this.position = new geometry_msgs.msg.Point();
    this.orientation = new RPY();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Pose
    // Serialize message field [position]
    bufferInfo = geometry_msgs.msg.Point.serialize(obj.position, bufferInfo);
    // Serialize message field [orientation]
    bufferInfo = RPY.serialize(obj.orientation, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Pose
    let tmp;
    let len;
    let data = new Pose();
    // Deserialize message field [position]
    tmp = geometry_msgs.msg.Point.deserialize(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orientation]
    tmp = RPY.deserialize(buffer);
    data.orientation = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'hexapod_msgs/Pose';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f1b4a886328450f637af10145259080b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = Pose;
