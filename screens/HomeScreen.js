import React from 'react';
import {
  Button,
  Pressable,
  ScreenContainer,
  Timer,
  VideoPlayer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Modal, StatusBar, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { parameter: null };

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [popupvideo, setPopupvideo] = React.useState(false);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }

      timerkO8CotmKRef.current?.start();

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

      timerkO8CotmKRef.current?.reset(undefined);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const timerkO8CotmKRef = React.useRef();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        {
          alignItems: { minWidth: Breakpoints.Tablet, value: 'center' },
          justifyContent: {
            minWidth: Breakpoints.Tablet,
            value: 'space-around',
          },
        },
        dimensions.width
      )}
    >
      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            color: {
              minWidth: Breakpoints.Tablet,
              value: palettes.Brand['Strong Inverse'],
            },
            fontFamily: {
              minWidth: Breakpoints.Tablet,
              value: 'Agbalumo_400Regular',
            },
            fontSize: { minWidth: Breakpoints.Tablet, value: 30 },
          }),
          dimensions.width
        )}
      >
        {'SELECT A SONG TO SING'}
      </Text>
      {/* Dont Stop Me Now */}
      <Button
        accessible={true}
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('DontStopMeNowScreen');

            timerkO8CotmKRef.current?.reset(undefined);
          } catch (err) {
            console.error(err);
          }
        }}
        {...GlobalStyles.ButtonStyles(theme)['Button'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'].style, {
            marginLeft: { minWidth: Breakpoints.Tablet, value: '' },
            position: { minWidth: Breakpoints.Tablet, value: 'relative' },
            width: { minWidth: Breakpoints.Tablet, value: 300 },
          }),
          dimensions.width
        )}
        title={"Don't Stop Me Now"}
      />
      {/* PPC button */}
      <Button
        accessible={true}
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('PinkPonyClubScreen');

            timerkO8CotmKRef.current?.reset(undefined);
          } catch (err) {
            console.error(err);
          }
        }}
        {...GlobalStyles.ButtonStyles(theme)['Button'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'].style, {
            marginLeft: { minWidth: Breakpoints.Tablet, value: '' },
            position: { minWidth: Breakpoints.Tablet, value: 'relative' },
            width: { minWidth: Breakpoints.Tablet, value: 300 },
          }),
          dimensions.width
        )}
        title={'Pink Pony Club'}
      />
      <Timer
        countDirection={'up'}
        format={'mm:ss'}
        initialTime={0}
        onTimerEnd={() => {
          try {
            setPopupvideo(true);
          } catch (err) {
            console.error(err);
          }
        }}
        {...GlobalStyles.TimerStyles(theme)['Timer'].props}
        ref={timerkO8CotmKRef}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TimerStyles(theme)['Timer'].style, {
            alignSelf: { minWidth: Breakpoints.Tablet, value: 'center' },
            color: {
              minWidth: Breakpoints.Tablet,
              value: theme.colors.background.brand,
            },
          }),
          dimensions.width
        )}
        timerEndTime={8000}
        updateInterval={4000}
      />
      <Pressable>
        <Modal
          animationType={'none'}
          supportedOrientations={['portrait', 'landscape']}
          transparent={false}
          transparent={StyleSheet.getWidthValue(
            [{ minWidth: Breakpoints.Tablet, value: true }],
            dimensions.width
          )}
          visible={false}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: { minWidth: Breakpoints.Tablet, value: 'center' },
                justifyContent: {
                  minWidth: Breakpoints.Tablet,
                  value: 'flex-end',
                },
              },
              dimensions.width
            )}
          >
            <VideoPlayer
              isLooping={false}
              isMuted={false}
              posterResizeMode={'cover'}
              rate={1}
              resizeMode={'cover'}
              source={imageSource(
                'https://static.draftbit.com/videos/intro-to-draftbit.mp4'
              )}
              useNativeControls={true}
              usePoster={false}
              volume={0.5}
              {...GlobalStyles.VideoPlayerStyles(theme)['Video'].props}
              shouldPlay={false}
              style={StyleSheet.applyWidth(
                GlobalStyles.VideoPlayerStyles(theme)['Video'].style,
                dimensions.width
              )}
            />
          </View>
        </Modal>
      </Pressable>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
