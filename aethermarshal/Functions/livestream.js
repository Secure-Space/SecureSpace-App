import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';

const LiveStreamScreen = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamUrl, setStreamUrl] = useState('');

  useEffect(() => {
    // Set the stream URL based on your streaming server configuration
    setStreamUrl('');
  }, []);

  const startStream = () => {
    setIsStreaming(true);
  };

  const stopStream = () => {
    setIsStreaming(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {isStreaming ? (
          <Video
            source={{ uri: streamUrl }}
            style={{ flex: 1 }}
            resizeMode="cover"
            repeat={true}
            paused={!isStreaming}
          />
        ) : (
          <RNCamera
            style={{ flex: 1 }}
            type={RNCamera.Constants.Type.front}
            captureAudio={true}
          />
        )}
      </View>
      <View style={{ padding: 20 }}>
        {isStreaming ? (
          <Button title="Stop Stream" onPress={stopStream} />
        ) : (
          <Button title="Start Stream" onPress={startStream} />
        )}
      </View>
    </View>
  );
};

export default LiveStreamScreen;
