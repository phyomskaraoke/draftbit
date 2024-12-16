import React from 'react';
import {
  Pressable,
  ScreenContainer,
  VideoPlayer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const IdleScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [openModal, setOpenModal] = React.useState(false);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      videoHPLPQmphRef.current?.play();
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  React.useEffect(() => {
    try {
      if (isFocused) {
        return;
      }
      videoHPLPQmphRef.current?.pause();
      videoHPLPQmphRef.current?.seekToPosition('00');
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const videoHPLPQmphRef = React.useRef();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        {
          alignContent: { minWidth: Breakpoints.Tablet, value: 'center' },
          alignItems: { minWidth: Breakpoints.Tablet, value: 'center' },
          alignSelf: { minWidth: Breakpoints.Tablet, value: 'auto' },
          backgroundColor: {
            minWidth: Breakpoints.Tablet,
            value: 'rgb(0, 0, 0)',
          },
          flexWrap: { minWidth: Breakpoints.Tablet, value: 'nowrap' },
          justifyContent: { minWidth: Breakpoints.Tablet, value: 'center' },
        },
        dimensions.width
      )}
    >
      <Pressable
        onPress={() => {
          try {
            navigation.navigate('Home2Screen');
            videoHPLPQmphRef.current?.pause();
            videoHPLPQmphRef.current?.seekToPosition(0);
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            height: { minWidth: Breakpoints.Tablet, value: '100%' },
            width: { minWidth: Breakpoints.Tablet, value: '100%' },
          },
          dimensions.width
        )}
      >
        <VideoPlayer
          isLooping={false}
          isMuted={false}
          onPlaybackFinish={() => {
            try {
              navigation.navigate('HomeScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          posterResizeMode={'cover'}
          rate={1}
          resizeMode={'cover'}
          usePoster={false}
          volume={0.5}
          {...GlobalStyles.VideoPlayerStyles(theme)['Video'].props}
          ref={videoHPLPQmphRef}
          shouldPlay={true}
          source={imageSource(
            'https://karaokeappdrew.s3.ap-southeast-2.amazonaws.com/Queen+-+Don+t+Stop+Me+Now+(Karaoke+Version).mp4'
          )}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VideoPlayerStyles(theme)['Video'].style,
              { height: { minWidth: Breakpoints.Tablet, value: '90%' } }
            ),
            dimensions.width
          )}
          useNativeControls={false}
        />
      </Pressable>
    </ScreenContainer>
  );
};

export default withTheme(IdleScreen);
