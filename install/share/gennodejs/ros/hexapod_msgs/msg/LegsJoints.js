// Auto-generated. Do not edit!

// (in-package hexapod_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let LegJoints = require('./LegJoints.js');

//-----------------------------------------------------------

class LegsJoints {
  constructor() {
    this.leg = new Array(6).fill(new LegJoints());
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LegsJoints
    // Serialize message field [leg]
    obj.leg.forEach((val) => {
      bufferInfo = LegJoints.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LegsJoints
    let tmp;
    let len;
    let data = new LegsJoints();
    len = 6;
    // Deserialize message field [leg]
    for (let i = 0; i < len; ++i) {
      tmp = LegJoints.deserialize(buffer);
      data.leg[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'hexapod_msgs/LegsJoints';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '77281f1f9c4cd29d21908d690db99185';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    hexapod_msgs/LegJoints[6] leg
    ================================================================================
    MSG: hexapod_msgs/LegJoints
    float64 coxa
    float64 femur
    float64 tibia
    float64 tarsus
    
    `;
  }

};

module.exports = LegsJoints;
