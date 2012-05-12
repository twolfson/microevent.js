{
  'channels': [], // Define the channels
  'on': function (channelName, fn) {
    // Fallback the channel and add the function
    (this.channels[channelName] = this.channels[channelName] || []).push(fn);
  },
  'emit': function (channelName) {
    var channel = (this.channels[channelName] || []),
        i = channel.length;
    while (i--) {
      channel[i].apply([], [].slice.call(arguments, 1));
    }
  }
  // TODO: Work in unsubscribing
  // 'off': function (channelName, fn) {
    // // Fallback the channel and add the function
    // (this.channels[channelName] = this.channels[channelName] || []).push(fn);
  // }
}