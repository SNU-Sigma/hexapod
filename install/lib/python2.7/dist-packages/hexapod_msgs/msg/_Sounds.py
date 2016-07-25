# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from hexapod_msgs/Sounds.msg. Do not edit."""
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct


class Sounds(genpy.Message):
  _md5sum = "9e277e5433232e212c4281205788a826"
  _type = "hexapod_msgs/Sounds"
  _has_header = False #flag to mark the presence of a Header object
  _full_text = """bool torque
bool battery
bool auto_level
bool stand
bool waiting
bool shut_down
"""
  __slots__ = ['torque','battery','auto_level','stand','waiting','shut_down']
  _slot_types = ['bool','bool','bool','bool','bool','bool']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       torque,battery,auto_level,stand,waiting,shut_down

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(Sounds, self).__init__(*args, **kwds)
      #message fields cannot be None, assign default values for those that are
      if self.torque is None:
        self.torque = False
      if self.battery is None:
        self.battery = False
      if self.auto_level is None:
        self.auto_level = False
      if self.stand is None:
        self.stand = False
      if self.waiting is None:
        self.waiting = False
      if self.shut_down is None:
        self.shut_down = False
    else:
      self.torque = False
      self.battery = False
      self.auto_level = False
      self.stand = False
      self.waiting = False
      self.shut_down = False

  def _get_types(self):
    """
    internal API method
    """
    return self._slot_types

  def serialize(self, buff):
    """
    serialize message into buffer
    :param buff: buffer, ``StringIO``
    """
    try:
      _x = self
      buff.write(_struct_6B.pack(_x.torque, _x.battery, _x.auto_level, _x.stand, _x.waiting, _x.shut_down))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize(self, str):
    """
    unpack serialized message in str into this message instance
    :param str: byte array of serialized message, ``str``
    """
    try:
      end = 0
      _x = self
      start = end
      end += 6
      (_x.torque, _x.battery, _x.auto_level, _x.stand, _x.waiting, _x.shut_down,) = _struct_6B.unpack(str[start:end])
      self.torque = bool(self.torque)
      self.battery = bool(self.battery)
      self.auto_level = bool(self.auto_level)
      self.stand = bool(self.stand)
      self.waiting = bool(self.waiting)
      self.shut_down = bool(self.shut_down)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill


  def serialize_numpy(self, buff, numpy):
    """
    serialize message with numpy array types into buffer
    :param buff: buffer, ``StringIO``
    :param numpy: numpy python module
    """
    try:
      _x = self
      buff.write(_struct_6B.pack(_x.torque, _x.battery, _x.auto_level, _x.stand, _x.waiting, _x.shut_down))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize_numpy(self, str, numpy):
    """
    unpack serialized message in str into this message instance using numpy for array types
    :param str: byte array of serialized message, ``str``
    :param numpy: numpy python module
    """
    try:
      end = 0
      _x = self
      start = end
      end += 6
      (_x.torque, _x.battery, _x.auto_level, _x.stand, _x.waiting, _x.shut_down,) = _struct_6B.unpack(str[start:end])
      self.torque = bool(self.torque)
      self.battery = bool(self.battery)
      self.auto_level = bool(self.auto_level)
      self.stand = bool(self.stand)
      self.waiting = bool(self.waiting)
      self.shut_down = bool(self.shut_down)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill

_struct_I = genpy.struct_I
_struct_6B = struct.Struct("<6B")
