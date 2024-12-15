import React from 'react';
import {
  Button,
  Pressable,
  ScreenContainer,
  Square,
  VideoPlayer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Modal, StatusBar } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const PinkPonyClubScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [openModal, setOpenModal] = React.useState(false);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      videoXmST7KqcRef.current?.play();

      const entry = StatusBar.pushStackEntry?.({ barStyle: 'dark-content' });
      return () => StatusBar.popStackEntry?.(entry);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  React.useEffect(() => {
    try {
      if (isFocused) {
        return;
      }
      videoXmST7KqcRef.current?.pause();
      videoXmST7KqcRef.current?.seekToPosition('00');
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const videoXmST7KqcRef = React.useRef();

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
            setOpenModal(true);
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
        <Modal
          supportedOrientations={['portrait', 'landscape']}
          transparent={false}
          {...StyleSheet.applyWidth(
            GlobalStyles.ModalStyles(theme)['test'].props,
            dimensions.width
          )}
          animationType={'fade'}
          presentationStyle={StyleSheet.getWidthValue(
            [{ minWidth: Breakpoints.Tablet, value: 'formSheet' }],
            dimensions.width
          )}
          style={StyleSheet.applyWidth(
            GlobalStyles.ModalStyles(theme)['test'].style,
            dimensions.width
          )}
          transparent={StyleSheet.getWidthValue(
            [{ minWidth: Breakpoints.Tablet, value: true }],
            dimensions.width
          )}
          visible={openModal}
        >
          <Square
            {...GlobalStyles.SquareStyles(theme)['Square'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SquareStyles(theme)['Square'].style,
                {
                  alignContent: {
                    minWidth: Breakpoints.Tablet,
                    value: 'center',
                  },
                  alignSelf: { minWidth: Breakpoints.Tablet, value: 'center' },
                  backgroundColor: {
                    minWidth: Breakpoints.Tablet,
                    value: palettes.Gray[950],
                  },
                  borderBottomLeftRadius: {
                    minWidth: Breakpoints.Tablet,
                    value: 10,
                  },
                  borderBottomRightRadius: {
                    minWidth: Breakpoints.Tablet,
                    value: 10,
                  },
                  borderColor: {
                    minWidth: Breakpoints.Tablet,
                    value: 'rgb(0, 0, 0)',
                  },
                  borderTopLeftRadius: {
                    minWidth: Breakpoints.Tablet,
                    value: 10,
                  },
                  borderTopRightRadius: {
                    minWidth: Breakpoints.Tablet,
                    value: 10,
                  },
                  justifyContent: {
                    minWidth: Breakpoints.Tablet,
                    value: 'space-evenly',
                  },
                  marginTop: { minWidth: Breakpoints.Tablet, value: '25%' },
                  opacity: { minWidth: Breakpoints.Tablet, value: 1 },
                  paddingLeft: { minWidth: Breakpoints.Tablet, value: 20 },
                  paddingRight: { minWidth: Breakpoints.Tablet, value: 20 },
                }
              ),
              dimensions.width
            )}
          >
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setOpenModal(false);
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  {
                    backgroundColor: {
                      minWidth: Breakpoints.Tablet,
                      value: palettes.Teal[700],
                    },
                    fontFamily: {
                      minWidth: Breakpoints.Tablet,
                      value: 'System',
                    },
                    fontSize: { minWidth: Breakpoints.Tablet, value: 30 },
                    fontWeight: { minWidth: Breakpoints.Tablet, value: '400' },
                    marginTop: { minWidth: Breakpoints.Tablet, value: 1 },
                    paddingBottom: { minWidth: Breakpoints.Tablet, value: 15 },
                    paddingTop: { minWidth: Breakpoints.Tablet, value: 10 },
                    width: { minWidth: Breakpoints.Tablet, value: 300 },
                  }
                ),
                dimensions.width
              )}
              title={'Continue singing'}
            />
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  navigation.navigate('Home2Screen');
                  setOpenModal(false);
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  {
                    fontFamily: {
                      minWidth: Breakpoints.Tablet,
                      value: 'System',
                    },
                    fontSize: { minWidth: Breakpoints.Tablet, value: 30 },
                    fontWeight: { minWidth: Breakpoints.Tablet, value: '400' },
                    paddingBottom: { minWidth: Breakpoints.Tablet, value: 15 },
                    paddingTop: { minWidth: Breakpoints.Tablet, value: 15 },
                    width: { minWidth: Breakpoints.Tablet, value: 300 },
                  }
                ),
                dimensions.width
              )}
              title={'Back to song selection'}
            />
          </Square>
        </Modal>
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
          ref={videoXmST7KqcRef}
          shouldPlay={true}
          source={imageSource(
            'https://karaokeappdrew.s3.ap-southeast-2.amazonaws.com/Chappell+Roan+-+Pink+Pony+Club+(Lower+Key)+Piano+Karaoke.mp4'
          )}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VideoPlayerStyles(theme)['Video'].style,
              {
                height: { minWidth: Breakpoints.Tablet, value: '90%' },
                width: { minWidth: Breakpoints.Tablet, value: '100%' },
              }
            ),
            dimensions.width
          )}
          useNativeControls={false}
        />
      </Pressable>
    </ScreenContainer>
  );
};

export default withTheme(PinkPonyClubScreen);
